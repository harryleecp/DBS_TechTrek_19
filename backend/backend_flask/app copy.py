from flask import Flask, render_template
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy


from flask_mysqldb import MySQL

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:letmeinpls@test-1.c6htqhzutcbg.ap-northeast-1.rds.amazonaws.com:3306/Bank-flaskBank-flask'
db = SQLAlchemy(app)

class AccountModel(db.Model):
    __tablename__ = 'BankAccount'
    AccountID = db.Column(db.Integer, primary_key=True)
    UserID = db.Column(db.Integer)
    AccountType = db.Column(db.String)
    AccountBalance = db.Column(db.Float)


"""
@app.route('/')
def index():
    accounts = AccountModel.query.all()
    return render_template('index.html', accounts=accounts)
"""

resource_fields = {
	'AccountID': fields.Integer,
	'UserID': fields.String,
	'AccountType': fields.String,
	'AccountBalance': fields.Float
}

class Account(Resource):
	@marshal_with(resource_fields)
	def get(self, video_id):
		result = AccountModel.query.all() #filter_by(id='AccountID').first()
		if not result:
			abort(404, message="Could not find account with that id")
		return result

api.add_resource(Account, "/acc/") #<int:account_id>")

"""
@app.route('/')
def users():
    cur = db.connection.cursor()
    cur.execute('''SELECT * FROM Bank-flask.BankAccount''')
    rv = cur.fetchall()
    return str(rv)
"""


if __name__ == "__main__":
	app.run(debug=True)