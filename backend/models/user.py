from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash

mongo = PyMongo()

class User:
    @staticmethod
    def create_user(email, password, role):
        hashed_pw = generate_password_hash(password)
        user = {"email": email, "password": hashed_pw, "role": role}
        return mongo.db.users.insert_one(user)

    @staticmethod
    def verify_password(email, password):
        user = mongo.db.users.find_one({"email": email})
        if user and check_password_hash(user["password"], password):
            return user
        return None
