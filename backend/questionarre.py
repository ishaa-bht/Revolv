import csv

def ask_question(prompt):
    """Ask a free-text question and return the response."""
    return input(f"{prompt}: ").strip()

def ask_yes_no(question):
    """Ask a Yes/No question and return 'Yes' or 'No'."""
    while True:
        answer = input(f"{question} (Yes/No): ").strip().lower()
        if answer in ["yes", "no"]:
            return "Yes" if answer == "yes" else "No"
        print("Invalid input. Please enter 'Yes' or 'No'.")

def ask_mcq(question, options, allow_multiple=False):
    """Ask an MCQ question with predefined options."""
    print(f"\n{question}")
    for i, option in enumerate(options, 1):
        print(f"{i}. {option}")

    while True:
        user_input = input("Enter the number(s) of your choice (comma-separated for multiple): ").strip()
        choices = user_input.split(",") if allow_multiple else [user_input]

        selected_options = []
        for choice in choices:
            choice = choice.strip()
            if choice.isdigit() and 1 <= int(choice) <= len(options):
                selected_options.append(options[int(choice) - 1])
            else:
                print("Invalid selection. Please try again.")
                break
        else:
            return ", ".join(selected_options)

def save_to_csv(data, filename="business_responses.csv"):
    """Save dictionary data to a CSV file."""
    file_exists = False
    try:
        with open(filename, "r"):
            file_exists = True
    except FileNotFoundError:
        pass

    with open(filename, "a", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=data.keys())

        if not file_exists:  # Write header only if the file doesn't exist
            writer.writeheader()

        writer.writerow(data)

    print(f"\nResponses saved to {filename} successfully!")

def business_questionnaire():
    """Run the business questionnaire and collect responses."""
    print("\nWelcome to the Business Questionnaire!\n")

    data = {}
    
    # Basic Business Information
    data["business_name"] = ask_question("Enter your business name")
    data["industry"] = ask_mcq("Select your industry:", ["Retail", "Tech", "Food", "Finance"], allow_multiple=False)
    data["business_type"] = ask_mcq("Select your business type:", ["Retail", "Service", "Manufacturing", "E-commerce", "Consulting"], allow_multiple=False)
    data["size_of_business"] = ask_mcq("What is the size of your business?", ["Small", "Medium", "Large"], allow_multiple=False)

    # Website & QR Code
    data["website"] = ask_yes_no("Do you have a website for your business?")
    data["website_qr"] = "No" if data["website"] == "No" else ask_yes_no("Have you generated a QR code for your website?")

    # Online Sales
    data["sell_products_online"] = ask_yes_no("Do you sell products/services online?")

    # Tools Used
    tools_available = ["CRM", "ERP", "Inventory Management", "Email Marketing", "Social Media Management", "Accounting", "Analytics"]
    data["tools_used"] = ask_mcq("Which tools do you currently use?", tools_available, allow_multiple=True)

    # Customer Interactions
    customer_interactions = ["Phone", "In-store", "Email", "Social media", "Automated chatbots", "CRM"]
    data["manage_customer_interactions"] = ask_mcq("How do you interact with your customers?", customer_interactions, allow_multiple=True)

    # Business Challenges
    business_challenges = ["Marketing", "Sales", "Inventory management", "Customer retention", "Time management", "Operational efficiency"]
    data["business_challenges"] = ask_mcq("What are the major challenges your business faces?", business_challenges, allow_multiple=True)

    # Save responses to CSV
    save_to_csv(data)

if __name__ == "__main__":
    business_questionnaire()
