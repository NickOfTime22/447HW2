import time, os
from flask import Flask, render_template, request, url_for, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from dataclasses import dataclass

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.debug = True

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@dataclass
class Profile(db.Model):
    # Id : Field which stores unique id for every row in
    # database table.
    # first_name: Used to store the first name if the user
    # last_name: Used to store last name of the user
    # Age: Used to store the age of the user
    school_id:int = db.Column(db.Integer, primary_key=True)
    name:str = db.Column(db.String(20), unique=False, nullable=False)
    points:int = db.Column(db.Integer, nullable=False)
 
    # repr method represents how one object of this datatable
    # will look like
    # def __repr__(self):
    #     return f"Name : {self.first_name}, Age: {self.age}"

@app.route('/data')
def get_data():
    students = Profile.query.all()
    # for row in students:
        # string += {
        #     "Name":row.name,
        #     "School_id":row.school_id,
        #     "Points": row.points
        # }
        # return {
        #     "Name":row.name,
        #     "School_id":row.school_id,
        #     "Points": row.points
        # }
    return jsonify(students)

# Might be able to delete below method
@app.route('/add', methods=["POST"], strict_slashes=False)
def add_students():
    school_id = request.json['school_id']
    name = request.json['name']
    points = request.json['points']

    newStudent = Profile(
        school_id=school_id,
        name=name,
        points=points
    )

    db.session.add(newStudent)
    db.session.commit()
#     students = Profile.query.all()
#     for row in students:
#         return{"Fname: ",row.first_name, "Lname:",row.last_name, "SchId:", row.school_id, "Age:", row.age}
    # return render_template('index.html', students=students)