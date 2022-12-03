from flask import Flask, redirect, request, render_template, redirect,url_for, flash,session
from accounts import Account
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:letmeinpls@test-1.c6htqhzutcbg.ap-northeast-1.rds.amazonaws.com:3306/Bank-flask'
db = SQLAlchemy(app)
api = Api(app)
'mysql://admin:letmeinpls@database.ap-northeast-1.rds.amazonaws.com:3306/mydatabase'


@app.route('/')
def get_all():
    results = Account.query.all()
    res = dict()
    res["AccountID"] = 
       # return render_template('index.html', accounts = self.AccountID)
    return render_template("index.html",accounts = results)


def get_by_userID():
    results = Account.query.all()
    return render_template("index.html",accounts = results)


if __name__ == '__main__':
    app.run(debug=True)