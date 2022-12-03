#!/usr/bin/env python
# coding: utf-8

# In[46]:


import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn import metrics
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import classification_report


# In[55]:


data_train = pd.read_csv('ClientScore (Training Data).txt', sep = ",")
data_test = pd.read_csv('ClientScore (Testing Data).txt', sep = ",")

data_train.head()


# In[35]:


logreg = LogisticRegression(random_state=16)
y_train = data_train["CreditWorthy"]
x_train = data_train[["Score 1","Score 2"]]
y_test = data_test["CreditWorthy"]
x_test = data_test[["Score 1","Score 2"]]
logreg.fit(x_train, y_train)


# In[36]:


y_pred = logreg.predict(x_test)


# In[39]:


cnf_matrix = metrics.confusion_matrix(y_test, y_pred)
cnf_matrix


# In[49]:



target_names = ['Creditworthy = 1', 'Creditworthy = 0']
print(classification_report(y_test, y_pred, target_names=target_names))
## The thing is, precision and recall is highly used for imbalanced dataset 
## because in an highly imbalanced dataset, a 99% accuracy can be meaningless.


# In[50]:


class_names=[0,1]
fig, ax = plt.subplots()
tick_marks = np.arange(len(class_names))
plt.xticks(tick_marks, class_names)
plt.yticks(tick_marks, class_names)
# create heatmap
sns.heatmap(pd.DataFrame(cnf_matrix), annot=True, cmap="YlGnBu" ,fmt='g')
ax.xaxis.set_label_position("top")
plt.tight_layout()
plt.title('Confusion matrix', y=1.1)
plt.ylabel('Actual label')
plt.xlabel('Predicted label')


# In[51]:


#Receiver Operating Characteristic(ROC) curve is a plot of the true positive rate against the false positive rate. 
#It shows the tradeoff between sensitivity and specificity.
y_pred_proba = logreg.predict_proba(x_test)[::,1]
fpr, tpr, _ = metrics.roc_curve(y_test,  y_pred_proba)
auc = metrics.roc_auc_score(y_test, y_pred_proba)
plt.plot(fpr,tpr,label="data 1, auc="+str(auc))
plt.legend(loc=4)
plt.show()


# In[ ]:


#### Explain the approach of dealing with
##1, Resamaple the dataset that is imbalanced out of balanced dataset. In this case, we can use over-sampling technique, which increase the size of rare samples.
## Under-Sampling will work as well, 
##2, Using the K-fold cross validation 
####Explain the bias-variance trade off
## 1,In statistics and machine learning, the bias–variance tradeoff is the property of a model that the variance of 
## the parameter estimated across samples can be reduced by increasing the bias in the estimated parameters.
## 2, If our model is too simple and has very few parameters then it may have high bias and low variance. On the other hand if our model has large number of parameters then it’s going to have high variance and low bias. So we need to find the right/good balance without overfitting and underfitting the data.
## This tradeoff in complexity is why there is a tradeoff between bias and variance. An algorithm can’t be more complex and less complex at the same time.
#### Since the outpout is a binary variable, it is a classfication problem and we use precision and recall. In the question, we want to 
## found the the creditworthy score of customer, we might want to strike a balance between precision and recall, thus we use F1 score
## which strike a balance between precision and recall.

