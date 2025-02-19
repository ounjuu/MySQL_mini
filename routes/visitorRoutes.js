const express = require("express");
const router = express.Router();
const visitorController = require("../controller/visitorController");

// 라우터 ejs의 주소와 연결
router.get("/", visitorController.getVisitor);
router.get("/detail/:id", visitorController.visitorOne);

router.post("/post/test", visitorController.createTest);
module.exports = router;
