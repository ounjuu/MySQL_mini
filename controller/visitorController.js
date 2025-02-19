const visitorModel = require("../model/visitorModel");

// 전체
const getVisitor = async (req, res) => {
  const data = await visitorModel.allVisitors();
  res.render("visitor", { data });
};

//하나
const visitorOne = async (req, res) => {
  const visitor = await visitorModel.getOne(req.params.id);
  res.render("visitorOne", { visitor });
  console.log(visitor);
};

// 등록
const createTest = (req, res) => {
  console.log(req);
  const createData = visitorModel.postData(req.body);
  res.send("200");
};
module.exports = { getVisitor, visitorOne, createTest };
