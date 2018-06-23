'use strict';
let students = [
    {
      "id": 1,
      "name": "user-1",
      "age": 23,
      "courseName": "Angular 6",
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
