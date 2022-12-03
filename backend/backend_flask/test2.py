from app import AccountModel

with app.app_context():
print(AccountModel.query.all())