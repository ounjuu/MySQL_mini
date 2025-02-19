const mysql = require("mysql2/promise");
//DB 연결
const pool = mysql.createPool({
  host: "localhost", //DB가 설치된 호스트 ip 주소
  user: "root", // DB 접속 유저 이름
  password: "1234", // DB 접속 비밀번호
  database: "user", // DB 이름
});

// 데이터 전부 가져오기
const allVisitors = async () => {
  const query = "SELECT * FROM users";
  const [rows] = await pool.query(query);
  console.log(rows);
  return rows;
};

// 해당하는 데이터 하나만 가져오기
const getOne = async (userId) => {
  const query = `SELECT * FROM users WHERE id = ${userId} `;
  const [rows] = await pool.query(query);
  console.log(rows);
  return rows;
};

//등록하기
const postData = async (data) => {
  try {
    const query = "INSERT INTO users (userid, name, comment) VALUES (?, ?, ?)";
    await pool.query(query, [data.userid, data.name, data.comment]);
    return "데이터가 성공적으로 등록되었습니다.";
  } catch (e) {
    console.log("error", e);
    throw new Error("데이터 등록 실패");
  }
};

module.exports = { allVisitors, getOne, postData };
