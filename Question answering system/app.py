from flask import Flask, render_template, request, jsonify
from transformers import pipeline
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load lightweight Question Answering model (DistilBERT)
qa_pipeline = pipeline("question-answering", model="distilbert-base-cased-distilled-squad")

@app.route('/')
def home():
    """Render the main HTML page"""
    return render_template('index.html')

@app.route('/answer', methods=['POST'])
def answer():
    """Handle question answering requests"""
    try:
        data = request.get_json()
        question = data.get('question', '').strip()
        context = data.get('context', '').strip()

        if not question or not context:
            return jsonify({'error': 'Both question and context are required.'}), 400

        # Get model prediction
        result = qa_pipeline(question=question, context=context)

        return jsonify({'answer': result['answer']})
    except Exception as e:
        print("Error:", e)
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    # Run Flask app
    app.run(debug=True)
