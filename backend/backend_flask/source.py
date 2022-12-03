from flask import Flask, redirect, request, render_template, redirect,url_for, flash,session,jsonify
from accounts import Account
from user import User
from transactions import Transaction
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource, abort, reqparse

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

class Users(Resource):
    def post(self,user_id):
        results = Users.query.filter_by(UserID = user_id).all()
        res = []

        for result in results:
            result_dict = result.__dict__
            result_dict.pop('_sa_instance_state', None)
            res.append(result_dict)

        return jsonify(res)

api.add_resource(Users,'/user/<int:user_id>')

put_args = reqparse.RequestParser()
put_args.add_argument("TransactionID", type=int, required=True)
put_args.add_argument("AccountID", type=int, required=True)
put_args.add_argument("ReceivingAccountID", type=int, required=True)
put_args.add_argument("Date", type=int, required=True)
put_args.add_argument("TransactionAmount", type=int, required=True)
put_args.add_argument("Comment", type=int, required=True)

class Transactions(Resource):
    def post(self,account_id):
        results = Transactions.query.filter_by(AccountID = account_id).all()
        res = []

        for result in results:
            result_dict = result.__dict__
            result_dict.pop('_sa_instance_state', None)
            res.append(result_dict)

        return jsonify(res)

    def add_transactions(self, transaction_id):
        args = put_args.parse_args()
        result = Transactions.query.filter_by(id=transaction_id).first()
        if result:
            abort(409, message="Video id taken...")
            
        transact = Transactions(TransactionID='TransactionID', AccountID: args["AccountID"], ReceivingAccountID: args["ReceivingAccountID"], 
        Date: args["Date"], TransactionAmount: args["TransactionAmount"], Comment: args["Comment"])
        
        db.session.add(transact)
        db.session.commit()

        results = Transactions.query.filter_by(TransactionID = transaction_id).all()
        res = []

        for result in results:
            result_dict = result.__dict__
            result_dict.pop('_sa_instance_state', None)
            res.append(result_dict)

        return jsonify(res)

    def delete_transactions(self, transaction_id):
        Transaction.query.filter(TransactionID = transaction_id).delete()
        db.session.commit()
        return {"status":"Transaction has been deleted"}

api.add_resource(Transactions,'/transactions/<int:account_id>')
api.add_resource(Transactions,'/transaction/delete/<int:transaction_id>')


if __name__ == '__main__':
    app.run(debug=True,port=8000)