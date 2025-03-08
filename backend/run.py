from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from middleware import token_required
from routes import auth
import os
from io import StringIO

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)
app.config["SECRET_KEY"] = '0ca974f967b86da063e5bbf1c9aa3134d1e8387315c4702f2efa2fbcec27ea8d'

# ✅ Register Authentication Routes
app.register_blueprint(auth)

# ✅ Load Models Once (Avoid reloading per request)
model3 = tf.keras.models.load_model("./models/healthy_cap.h5")
model1 = tf.keras.models.load_model("./models/model_v4.h5")
model2 = tf.keras.models.load_model("./models/model_skip_D70.h5")

disease_models = {
    "INS": tf.keras.models.load_model("./models/ins_cap.h5"),
    "NFLE": tf.keras.models.load_model("./models/nfle_cap.h5"),
    "NARCO": tf.keras.models.load_model("./models/narco_cap.h5"),
    "RBD": tf.keras.models.load_model("./models/rbd_cap.h5"),
    "PLM": tf.keras.models.load_model("./models/plm_cap.h5"),
}

# 🩺 CAP Phase Detection Route (Requires JWT)
@app.route("/predict", methods=['POST'])
@token_required
def predict(user):
    try:
        if 'myfile' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['myfile']
        file_content = file.read().decode('utf-8')
        x_bal = np.loadtxt(StringIO(file_content), delimiter=',')
        x_bal = x_bal.reshape((1, 1024))

        # 🎯 Predict CAP Phase
        pred3 = model3.predict(x_bal)
        str3 = 'CAP phase detected: A' if pred3[0][0] >= 0.5 else 'CAP phase detected: B'

        # 🎯 Main Diagnosis
        pred1 = model1.predict(x_bal)

        if pred1[0][0] > 0.5:
            str1 = 'Health Report: Positive'
            pred2 = model2.predict(x_bal)

            disease_list = ['INS', 'NFLE', 'NARCO', 'RBD', 'PLM']
            i = pred2.argmax()
            str2 = disease_list[i]

            # 🎯 Load Disease-Specific CAP Model
            disease_model = disease_models[str2]  # Get correct model
            pred3 = disease_model.predict(x_bal)
            str3 = 'CAP phase detected: A' if pred3[0][0] >= 0.5 else 'CAP phase detected: B'
        else:
            str1 = 'Health Report: Negative'
            str2 = "None"  # Ensure consistency

        return jsonify({"health_report": str1, "disease": str2, "cap_phase": str3})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ✅ Run Flask App
if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))  # Allow environment variable override
    app.run(debug=True, port=port)
