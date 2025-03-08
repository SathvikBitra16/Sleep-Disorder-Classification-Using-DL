from flask import request, jsonify, current_app
import jwt
from functools import wraps

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')

        if not token:
            return jsonify({"error": "Token is missing"}), 401

        try:
            token = token.split(" ")[1]  # Extract token after "Bearer "
            secret_key = str(current_app.config["SECRET_KEY"])  # Ensure SECRET_KEY is a string
            decoded_data = jwt.decode(token, secret_key, algorithms=["HS256"])
            return f(decoded_data, *args, **kwargs)
        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token"}), 401
        except TypeError as e:
            return jsonify({"error": f"SECRET_KEY type error: {str(e)}"}), 500

    return decorated
