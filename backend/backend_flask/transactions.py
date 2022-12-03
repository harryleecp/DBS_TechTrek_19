from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Transaction(db.Model):
    __tablename__ = 'ScheduledTransactions'
    TransactionID = db.Column(db.Integer, primary_key = True)
    AccountID = db.Column(db.Integer)
    ReceivingAccountID = db.Column(db.Integer)
    Date = db.Column(db.DateTime(timezone=True))
    TransactionAmount = db.Column(db.Float(10,2))
    Comment = db.Column(db.Column(db.String(255)))