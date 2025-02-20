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

// 해당 아이디를 가진 모든 데이터 삭제
const deleteRow = async (id) => {
  const query = `DELETE FROM users WHERE id = ${Number(id)}`;
  try {
    await pool.query(query, [id]);
  } catch (e) {
    console.log("삭제실패");
  }
};

// 해당 아이디를 가진 데이터 수정
const updateRow = async (data) => {
  const query = `UPDATE users SET name = ?, comment = ? where id = ?`;
  try {
    await pool.query(query, [data.name, data.comment, data.id]);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { allVisitors, getOne, postData, deleteRow, updateRow };
