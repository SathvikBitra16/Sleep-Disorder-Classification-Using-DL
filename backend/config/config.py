import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "your_random_secret")
    MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/SleepClassificationApp")
