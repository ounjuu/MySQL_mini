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
  const createData = visitorModel.postData(req.body);
  res.send("200");
};

// 해당 아이디 삭제
const deleteData = async (req, res) => {
  await visitorModel.deleteRow(req.params.id);
  res.send("200");
};

// 수정 페이지 이동
const moveWrite = async (req, res) => {
  const visitor = await visitorModel.getOne(req.params.id);
  await res.render("visitorwrite", { visitor });
};

// 수정
const dataUpdate = async (req, res) => {
  await visitorModel.updateRow(req.body);
  res.send("200");
};

module.exports = {
  getVisitor,
  visitorOne,
  createTest,
  deleteData,
  moveWrite,
  dataUpdate,
};
