from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline

from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# Load model from path
model_path = "fine"
tokenizer = AutoTokenizer.from_pretrained(model_path, local_files_only=True)
model = AutoModelForSequenceClassification.from_pretrained(model_path, local_files_only=True)

# Emotion labels
id2label = {
    0: "surprise",
    1: "sadness",
    2: "happy",
    3: "scared",
    4: "disgust",
    5: "neutral",
    6: "anger"
}
model.config.id2label = id2label
model.config.label2id = {v: k for k, v in id2label.items()}

# Set up pipeline
emotion_classifier = pipeline("text-classification", model=model, tokenizer=tokenizer, top_k=1)

@app.route('/predict-emotion', methods=['POST'])
def predict_emotion():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'Missing text field in request'}), 400
    
    text = data['text']
    result = emotion_classifier(text)[0][0]
    
    return jsonify({'emotion': result['label'], 'score': result['score']})

if __name__ == '__main__':
    app.run(port=5002)