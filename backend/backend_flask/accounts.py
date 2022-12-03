from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Account(db.Model):
    __tablename__ = 'BankAccount'
    AccountID = db.Column(db.Integer, primary_key = True)
    AccountType = db.Column(db.String(255))
    AccountBalance = db.Column(db.Float(10,2))
    UserID = db.Column(db.Integer, db.ForeignKey("User.UserID"))