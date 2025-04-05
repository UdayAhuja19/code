from flask import Flask
print('flask is running')
app = Flask(__name__)

@app.route('/')
def index():
	return "hello world"
app.run(host='0.0.0.0', port=5001)
