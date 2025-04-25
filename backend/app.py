from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load ML model and preprocessing objects
model = joblib.load("./random_forest_model.joblib")
label_encoders = joblib.load("./label_encoders.joblib")
scaler = joblib.load("./scaler.joblib")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.json
        
        # Convert JSON to DataFrame-friendly format
        formatted_data = {
            "business_name": data.get("businessName", ""),
            "industry": ", ".join(data.get("industry", [])),
            "business_type": ", ".join(data.get("businessType", [])),
            "size_of_business": data.get("businessSize", ""),
            "website": data.get("hasWebsite", ""),
            "website_qr": "No",  # Assuming default value
            "sell_products_online": data.get("sellsOnline", ""),
            "tools_used": ", ".join(data.get("tools", [])),
            "manage_customer_interactions": ", ".join(data.get("customerInteraction", [])),
            "business_challenges": ", ".join(data.get("challenges", [])),
        }

        # Convert to DataFrame
        df = pd.DataFrame([formatted_data])

        # Drop unnecessary columns
        df_features = df.drop(columns=["business_name"], errors='ignore')

        # Ensure columns match model's training data
        expected_columns = model.feature_names_in_

        # Handle missing and extra columns
        missing_cols = set(expected_columns) - set(df_features.columns)
        extra_cols = set(df_features.columns) - set(expected_columns)

        # Add missing columns with default values
        for col in missing_cols:
            df_features[col] = label_encoders[col].classes_[0] if col in label_encoders else 0

        # Remove extra columns
        df_features = df_features[list(expected_columns)]

        # Encode categorical features
        for col, encoder in label_encoders.items():
            known_classes = set(encoder.classes_)
            df_features[col] = df_features[col].apply(lambda x: x if x in known_classes else encoder.classes_[0])
            df_features[col] = encoder.transform(df_features[col])

        # Scale numerical features
        numerical_columns = scaler.feature_names_in_
        df_features[numerical_columns] = scaler.transform(df_features[numerical_columns])

        # Make prediction
        predictions = model.predict(df_features)

        return jsonify({"recommended_tools": predictions.tolist()})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
