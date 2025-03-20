from flask import Blueprint, request, jsonify
import joblib
from .job_prediction_model import predict_job_role

prediction_bp = Blueprint('prediction', __name__)

@prediction_bp.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data from request
        data = request.get_json()
        
        print(data)
        if not data:
            return jsonify({
                'success': False,
                'error': 'No input data provided'
            }), 400
            
        # Validate required fields
        required_fields = [
            'Acedamic percentage in Operating Systems',
            'percentage in Algorithms',
            'Percentage in Programming Concepts',
            'Percentage in Software Engineering',
            'Percentage in Computer Networks',
            'Percentage in Electronics Subjects',
            'Percentage in Computer Architecture',
            'Percentage in Mathematics',
            'Percentage in Communication skills',
            'Logical quotient rating',
            'hackathons',
            'coding skills rating',
            'public speaking points',
            'self-learning capability?',
            'Extra-courses did',
            'certifications',
            'Interested subjects',
            'interested career area ',
            'Job/Higher Studies?',
            'Type of company want to settle in?',
            'worked in teams ever?'
        ]
        
        missing_fields = [field for field in required_fields if field not in data]
        print(missing_fields);
        if missing_fields:
            return jsonify({
                'success': False,
                'error': f'Missing required fields: {", ".join(missing_fields)}'
            }), 400
        
        # Make prediction
        predicted_role = predict_job_role(data)
        
        # Return prediction
        return jsonify({
            'success': True,
            'predicted_role': predicted_role
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400 