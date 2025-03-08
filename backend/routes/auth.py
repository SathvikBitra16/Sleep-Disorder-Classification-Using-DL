from flask import Blueprint, request, jsonify
import jwt
import datetime
from backend.config import Config
from backend.models.user import User

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json
    User.create_user(data["email"], data["password"], data["role"])
    return jsonify({"message": "User registered successfully"}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.verify_password(data["email"], data["password"])
    if not user:
        return jsonify({"error": "Invalid credentials"}), 401

    token = jwt.encode(
        {"email": user["email"], "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1)},
        Config.SECRET_KEY, algorithm="HS256"
    )
    return jsonify({"token": token})
