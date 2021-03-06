'use strict';
let courseCube = [
    {
      "id": 1,
      "courseName": "Angular 6",
      "duration": "2.5",
      "fee": 10000,
      "startDate": "04-28-2018",
      "trainer": [],
      "students": []
    },
    {
      "id": 2,
      "courseName": "Python",
      "duration": "2.5",
      "startDate": "05-28-2018",
      "fee": 20000
    },
    {
      "id": 3,
      "courseName": "AWS",
      "duration": "2.5",
      "startDate": "06-28-2018",
      "fee": 20500
    },
    {
      "id": 4,
      "courseName": "JAVA",
      "duration": "2.5",
      "startDate": "07-28-2018",
      "fee": 15000
    },
    {
      "id": 5,
      "courseName": "Ruby",
      "duration": "2.5",
      "startDate": "08-28-2018",
      "fee": 16000
    },
    {
      "id": 6,
      "courseName": "Node Js",
      "duration": "2.5",
      "startDate": "04-28-2018",
      "fee": 10000
    },
    {
      "id": 7,
      "courseName": "CSS - 3",
      "duration": "2.5",
      "startDate": "04-28-2018",
      "fee": 10000
    },
    {
      "id": 8,
      "courseName": "HTML - 5",
      "duration": "2.5",
      "startDate": "04-28-2018",
      "fee": 30000
    },
    {
      "id": 9,
      "courseName": "CI/CD",
      "duration": "2.5",
      "startDate": "04-28-2018",
      "fee": 10000
    }
  ];
//list all courseCube present in DB
exports.list_all_courseCube = function (req, res) {
  
  try {
    if(req.headers.coursecubeid == '12345678'){
      res.json(courseCube);
    }else{
      throw new Error("BROKEN");
    }
  }
  catch (err) {
    res.status(500).send('coursecubeid mismatch')
  }
  
};

//list all courseCube present in DB
exports.save = function (req, res) {
  courseCube.push(req.body);
  res.json('success');
};
