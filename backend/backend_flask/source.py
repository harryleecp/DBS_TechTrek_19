from flask import Flask, redirect, request, render_template, redirect,url_for, flash,session,jsonify
from accounts import Account
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:letmeinpls@test-1.c6htqhzutcbg.ap-northeast-1.rds.amazonaws.com:3306/Bank-flask'
db = SQLAlchemy(app)
api = Api(app)

class Accounts(Resource):
    def post(self,user_id):
        results = Account.query.filter_by(UserID = user_id).all()
        res = []

        for result in results:
            result_dict = result.__dict__
            result_dict.pop('_sa_instance_state', None)
            res.append(result_dict)

        return jsonify(res)

api.add_resource(Accounts,'/account/<int:user_id>')

class Transactions(Resource):
    def post(self,account_id):
        results = Transactions.query.filter_by(AccountID = account_id).all()
        res = []

        for result in results:
            result_dict = result.__dict__
            result_dict.pop('_sa_instance_state', None)
            res.append(result_dict)

        return jsonify(res)

    def add_transactions():

        return

    def delete_transactions():
        
        return '', 204

api.add_resource(Transactions,'/transactions/<int:account_id>')

if __name__ == '__main__':
    app.run(debug=True,port=8000)