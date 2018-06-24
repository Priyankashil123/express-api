
'use strict';
let students = [
    {
      "id": 1,
      "name": "user-1",
      "age": 23,
      "courseName": "Angular 6",
    },
    {
      "id": 2,
      "name": "user-2",
      "age": 24,
      "courseName": "Angular 6",
    },
    {
      "id": 3,
      "name": "user-3",
      "age": 24,
      "courseName": "Angular 6",
    },
    {
      "id": 4,
      "name": "user-4",
      "age": 24,
      "courseName": "JAVA",
    },
    {
      "id": 5,
      "name": "user-5",
      "age": 24,
      "courseName": "JAVA",
    }
  ];
//list all students present in DB
exports.list_all_student = function (req, res) {
  res.json(students);
};

//save student to DB
exports.save = function (req, res) {
  students.push(req.body);
  res.json('success');
};


//delete student to DB
exports.delete = function (req, res) {
  students = students.filter(student => student.id != req.body.id);
  res.json('success');
};


//update student to DB
exports.update = function (req, res) {
  for(let student of students){
    if(student.id === req.body.id){
      student.name = req.body.name;
      student.courseName = req.body.courseName;
      student.age = req.body.age;
    }
  }
  res.json('success');
};
