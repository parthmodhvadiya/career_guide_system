import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder, StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
import joblib
import os

# Get the directory of the current file
current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, 'career_prediction_model.joblib')

# Sample training data (you should replace this with your actual dataset)
data = {
    'Acedamic percentage in Operating Systems': np.random.uniform(60, 100, 1000),
    'percentage in Algorithms': np.random.uniform(60, 100, 1000),
    'Percentage in Programming Concepts': np.random.uniform(60, 100, 1000),
    'Percentage in Software Engineering': np.random.uniform(60, 100, 1000),
    'Percentage in Computer Networks': np.random.uniform(60, 100, 1000),
    'Percentage in Electronics Subjects': np.random.uniform(60, 100, 1000),
    'Percentage in Computer Architecture': np.random.uniform(60, 100, 1000),
    'Percentage in Mathematics': np.random.uniform(60, 100, 1000),
    'Percentage in Communication skills': np.random.uniform(60, 100, 1000),
    'Logical quotient rating': np.random.randint(1, 11, 1000),
    'hackathons': np.random.randint(0, 10, 1000),
    'coding skills rating': np.random.randint(1, 11, 1000),
    'public speaking points': np.random.randint(1, 11, 1000),
    'self-learning capability?': np.random.choice(['Yes', 'No'], 1000),
    'Extra-courses did': np.random.choice(['Yes', 'No'], 1000),
    'certifications': np.random.choice(['Yes', 'No'], 1000),
    'Interested subjects': np.random.choice(['Machine Learning', 'Web Development', 'Cloud Computing', 'Mobile Development'], 1000),
    'interested career area ': np.random.choice(['Data Science', 'Software Development', 'Cloud Architecture', 'DevOps'], 1000),
    'Job/Higher Studies?': np.random.choice(['Job', 'Higher Studies'], 1000),
    'Type of company want to settle in?': np.random.choice(['Product', 'Service', 'Startup'], 1000),
    'worked in teams ever?': np.random.choice(['Yes', 'No'], 1000),
    'Suggested Job Role': np.random.choice([
        'Software Engineer',
        'Data Scientist',
        'Technical Support',
        'System Administrator',
        'DevOps Engineer',
        'Cloud Architect',
        'Mobile Developer',
        'Web Developer'
    ], 1000)
}

# Create DataFrame
df = pd.DataFrame(data)

# Separate features and target
X = df.drop('Suggested Job Role', axis=1)
y = df['Suggested Job Role']

# Identify numeric and categorical columns
numeric_features = X.select_dtypes(include=['int64', 'float64']).columns
categorical_features = X.select_dtypes(include=['object']).columns

# Create preprocessing pipelines for numeric and categorical data
numeric_transformer = StandardScaler()
categorical_transformer = OneHotEncoder(drop='first', sparse_output=False)

# Combine preprocessing steps
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ])

# Create a pipeline
model = Pipeline([
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))
])

# Fit the pipeline
model.fit(X, y)

# Save the model and preprocessor
joblib.dump(model, model_path)

def predict_job_role(user_input):
    """
    Predict job role based on user input
    
    Args:
        user_input (dict): Dictionary containing user's information
        
    Returns:
        str: Predicted job role
    """
    try:
        # Load the saved model
        loaded_model = joblib.load(model_path)
        
        # Convert input to DataFrame
        input_df = pd.DataFrame([user_input])
        
        # Make prediction
        prediction = loaded_model.predict(input_df)
        
        return prediction[0]
    except Exception as e:
        raise Exception(f"Error making prediction: {str(e)}")

# Test the model with sample input
test_input = {
    'Acedamic percentage in Operating Systems': 85,
    'percentage in Algorithms': 90,
    'Percentage in Programming Concepts': 88,
    'Percentage in Software Engineering': 80,
    'Percentage in Computer Networks': 75,
    'Percentage in Electronics Subjects': 60,
    'Percentage in Computer Architecture': 70,
    'Percentage in Mathematics': 82,
    'Percentage in Communication skills': 85,
    'Logical quotient rating': 8,
    'hackathons': 3,
    'coding skills rating': 9,
    'public speaking points': 7,
    'self-learning capability?': 'Yes',
    'Extra-courses did': 'No',
    'certifications': 'Yes',
    'Interested subjects': 'Machine Learning',
    'interested career area ': 'Data Science',
    'Job/Higher Studies?': 'Job',
    'Type of company want to settle in?': 'Product',
    'worked in teams ever?': 'Yes'
}

if __name__ == "__main__":
    predicted_role = predict_job_role(test_input)
    print("\nSuggested Job Role:", predicted_role) 