from flask import Blueprint, request, jsonify
from pymongo import MongoClient
import bcrypt
import jwt
import datetime
import os

auth = Blueprint('auth', __name__)  # Blueprint for authentication

# ✅ Connect to MongoDB
MONGO_URI = "mongodb://localhost:27017/"
client = MongoClient(MONGO_URI)
db = client['SleepClassificationApp']
users_collection = db['users']

# 🔒 Secret Key (Load from environment)
SECRET_KEY = os.getenv('SECRET_KEY', '0ca974f967b86da063e5bbf1c9aa3134d1e8387315c4702f2efa2fbcec27ea8d')

### 🚀 User Registration
@auth.route('/register', methods=['POST'])
def register():
    data = request.json
    required_fields = ["name", "email", "dob", "gender", "password"]
    
    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400

    if users_collection.find_one({"email": data["email"]}):
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = bcrypt.hashpw(data["password"].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    user_data = {
        "name": data["name"],
        "email": data["email"],
        "dob": data["dob"],
        "gender": data["gender"],
        "password": hashed_password
    }
    users_collection.insert_one(user_data)

    return jsonify({"success": True, "message": "Registration successful" })

### 🚀 User Login
@auth.route('/login', methods=['POST'])
def login():
    data = request.json
    user = users_collection.find_one({"email": data["email"]})

    if not user or not bcrypt.checkpw(data["password"].encode('utf-8'), user["password"].encode('utf-8')):
        return jsonify({"error": "Invalid credentials"}), 401

    token = jwt.encode(
        {"email": user["email"], "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2)}, 
        SECRET_KEY, 
        algorithm="HS256"
    )

    return jsonify({"success": True, "message": "Login successful", "token": token}), 200
