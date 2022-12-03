from flask import Flask, redirect, request, render_template, redirect,url_for, flash,session,jsonify
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
def get(user_id):
        # results = Account.query.all()
        # res=[]
        results = Account.query.filter_by(UserID = user_id).all()
        res = []
        # return render_template('index.html', accounts = self.AccountID)
        for result in results:
            result_dict = result.__dict__
            result_dict.pop('_sa_instance_state', None)
            res.append(result_dict)

        return render_template("index.html",accounts =res)



if __name__ == '__main__':
    app.run(debug=True)