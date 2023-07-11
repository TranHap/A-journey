from ultralytics import YOLO
from flask import request, Response, Flask
from flask_cors import CORS
from waitress import serve 
from PIL import Image
import json 
import requests
import os

vite_chat_api = os.environ.get("VITE_CHAT_API")

CHAT_API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill"
headers_chat = {"Authorization": f"Bearer {vite_chat_api}"}

app = Flask(__name__)
CORS(app)


@app.route("/")
def root():
    return ("hello there")


@app.route("/detect", methods=["POST"])
def detect():
    print("Success post")
    buf = request.files["image_file"]
    boxes = detect_objects_on_image(Image.open(buf.stream))
    return Response(
      json.dumps(boxes),  
      mimetype='application/json'
    )

def detect_objects_on_image(buf):
    model = YOLO("yolov8m.pt")
    results = model.predict(buf)
    result = results[0]
    output = []
    for box in result.boxes:
        x1, y1, x2, y2 = [
          round(x) for x in box.xyxy[0].tolist()
        ]
        class_id = box.cls[0].item()
        prob = round(box.conf[0].item(), 2)
        output.append([
          x1, y1, x2, y2, result.names[class_id], prob
        ])
    return output


@app.route('/chatai', methods=["POST"])
def chat():
    payload = request.get_json()
    response = requests.post(CHAT_API_URL, headers=headers_chat, json=payload)
    output = response.json()
    print(output)
    return output
	


serve(app, host='0.0.0.0', port=8080)



