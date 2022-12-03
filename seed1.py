from flask import Flask, redirect, request, render_template, redirect,url_for, flash,session
from flask_wtf import FlaskForm
from flask_wtf.file import  FileRequired
from accounts import Account
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:letmeinpls@test-1.c6htqhzutcbg.ap-northeast-1.rds.amazonaws.com:3306/Bank-flask'
db = SQLAlchemy(app)
api = Api(app)
'mysql://admin:letmeinpls@database.ap-northeast-1.rds.amazonaws.com:3306/mydatabase'


@app.route('/')
def get():
        results = Account.query.all()
        # return render_template('index.html', accounts = self.AccountID)
        return render_template("index.html",accounts = results)


def index():
   cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
   cur.execute("SELECT * FROM Account")
   rv = cur.fetchall()
   Account = []
   content = {}
   for result in rv:
       content = {'id': result['UserID'], 'name': result['Username'], 'email': result['Email']}
       Account.append(content)
       content = {}
   return jsonify(Account) 





if __name__ == '__main__':
    app.run(debug=True)