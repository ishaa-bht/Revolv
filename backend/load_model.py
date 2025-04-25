import joblib
import pandas as pd
import numpy as np

# Load the model
model = joblib.load(r"backend\random_forest_model.joblib")

# Load the label encoders
label_encoders = joblib.load(r"backend\label_encoders.joblib")

# Load the scaler
scaler = joblib.load(r"backend\scaler.joblib")

# print("Model and preprocessing objects loaded successfully with joblib!")


# Load the new data
new_data = pd.read_csv(r"backend\business_responses.csv")

# Drop unnecessary columns
new_data_features = new_data.drop(columns=["business_name"], errors='ignore')

# Get expected feature names from training (categorical + numerical)
expected_columns = model.feature_names_in_  # Use the exact feature names from the trained model

# Identify missing and extra columns
missing_cols = set(expected_columns) - set(new_data_features.columns)
extra_cols = set(new_data_features.columns) - set(expected_columns)

# Add missing columns and fill with default values
for col in missing_cols:
    if col in label_encoders:  # Categorical column
        new_data_features[col] = label_encoders[col].classes_[0]  # Default category
    else:  # Numerical column
        new_data_features[col] = 0  # Default numerical value

# Remove extra columns not seen during training
new_data_features = new_data_features[list(expected_columns)]  # Ensure exact order

# Apply label encoders safely
for col, encoder in label_encoders.items():
    known_classes = set(encoder.classes_)
    new_data_features[col] = new_data_features[col].apply(
        lambda x: x if x in known_classes else encoder.classes_[0]  # Replace unknown categories
    )
    new_data_features[col] = encoder.transform(new_data_features[col])

# Scale numerical features
numerical_columns = scaler.feature_names_in_
new_data_features[numerical_columns] = scaler.transform(new_data_features[numerical_columns])

# Predict recommended tools
predictions = model.predict(new_data_features)

#print the predictions
print("Recommended tools: ", predictions)
