from flask import Flask, jsonify
from flask_cors import CORS
from MLModels.predict_route import prediction_bp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Register blueprints
app.register_blueprint(prediction_bp)

# Error handlers
@app.errorhandler(404)
def not_found_error(error):
    return jsonify({
        'success': False,
        'error': 'Not found'
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        'success': False,
        'error': 'Internal server error'
    }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0') 