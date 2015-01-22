__author__ = 'onyekaigabari'

from flask import Flask, redirect, render_template
#from flask.ext.script import Manager

app = Flask(__name__)
##manager = Manager(app)


@app.route('/peer1')
def index():
    return render_template('index.html')

@app.route('/peer2')
def user():
    return render_template('index2.html')

#@app.route('/user/<name>/')
#def user(name):
#    return '<h1>Hello, %s!</h1>'%name
if __name__ == '__main__':
    app.run(debug=True)



