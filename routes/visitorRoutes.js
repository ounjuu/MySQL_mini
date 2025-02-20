const express = require("express");
const router = express.Router();
const visitorController = require("../controller/visitorController");

// 라우터 ejs의 주소와 연결
router.get("/", visitorController.getVisitor);
router.get("/detail/:id", visitorController.visitorOne);
router.get("/write/:id", visitorController.moveWrite);

router.post("/post/test", visitorController.createTest);

//update
router.put("/update", visitorController.dataUpdate);

// delelte
router.delete("/delete/:id", visitorController.deleteData);

module.exports = router;
