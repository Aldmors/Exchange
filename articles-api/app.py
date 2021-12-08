from logging import debug
from flask import Flask
from flask_cors import CORS, cross_origin
from flask import jsonify
import script

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
host = "127.0.0.1"
port = 4000

@app.route("/")
@cross_origin()
def default_path():
    return "Use => GET /articles"

@app.route("/articles",methods=['GET'])
@cross_origin()
def articles():
    articles = script.get_articles()
    return jsonify(articles)

if __name__ == '__main__':
   app.run(host=host, port=port)