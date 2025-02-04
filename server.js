const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // CORS 설정
  },
});

io.on("connection", (socket) => {
  console.log("새로운 클라이언트 연결됨:", socket.id);

  socket.on("set name", (name) => {
    io.emit("chat message", { name: "System", text: `${name}님이 채팅방에 입장했습니다.` });
  });

  socket.on("chat message", (msg) => {
    console.log("메시지 수신:", msg);
    io.emit("chat message", msg); // 모든 클라이언트에 메시지 전송
  });

  socket.on("disconnect", () => {
    console.log("클라이언트 연결 종료:", socket.id);
  });
});

// Railway에서는 환경 변수로 포트를 설정합니다.
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Socket.io 서버 실행 중 (포트 ${PORT})`);
});