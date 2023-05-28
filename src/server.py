# pip3 install mysql-connector-python
from flask_cors import CORS 
from flask import Flask, request
from settings import dbpwd
import mysql.connector as mysql
import json

db = mysql.connect(
	host = "localhost",
	user = "root",
	passwd = dbpwd,
	database = "blog")


app = Flask(__name__)
CORS(app)

@app.route('/posts', methods=['GET'])
def get_all_posts():
	query = "select id, title, content from posts"
	cursor = db.cursor()
	cursor.execute(query)
	records = cursor.fetchall()
	cursor.close()
	header = ['id', 'title', 'content']
	data = []
	for r in records:
		data.append(dict(zip(header, r)))
	return json.dumps(data)

@app.route('/newpost', methods=['POST'])
def add_post():
	data = request.get_json()
	query = "insert into posts (title, content) values (%s, %s)"
	values = (data['title'], data['text'])
	cursor = db.cursor()
	cursor.execute(query, values)	
	db.commit()
	new_post_id = cursor.lastrowid
	cursor.close()
	return get_post(new_post_id)

def get_post(id):
	query = "select title, content from posts where id = %s"
	values = (id,)
	cursor = db.cursor()
	cursor.execute(query, values)
	record = cursor.fetchone()
	cursor.close()
	header = ['id', 'title', 'content']
	return json.dumps(dict(zip(header, record)))

if __name__ == "__main__":
	app.run()
	