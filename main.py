from flask import Flask, render_template

app = Flask(__name__)

# Configuration
app.config['GA_TRACKING_ID'] = 'G-XXXXXXX123'  # Replace with actual GA4 tracking ID

@app.route("/")
def index():
    return render_template("index.html", ga_tracking_id=app.config['GA_TRACKING_ID'])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
