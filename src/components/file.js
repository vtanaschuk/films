if (msg.statusCode == 200) {
  const imageURL = msg.payload.data[0].url;

  msg.payload = {
    content: imageURL,
    type: "message",
    chatId: msg.fromApp.chatId,
  };

  return msg;
} else {
  msg.payload = {
    content: `Отримано помилку від сервера: ${msg.statusCode}`,
    type: "message",
    chatId: msg.fromApp.chatId,
  };

  return [null, msg];
}

if (msg.statusCode == 200) {
  msg.payload.type = "message";
  msg.payload.content = `<a href="${msg.payload.data[0].url}">image link</a>`;

  msg.payload.chatId = `${msg.fromApp.chatId}`;
  msg.payload.options = { parse_mode: "HTML" };
} else {
  msg.payload.type = "message";
  msg.payload.content = `${msg.payload.error.message}`;
  msg.payload.chatId = `${msg.fromApp.chatId}`;
}
return msg;


msg.headers ={
  "content-type" : "audio/mpeg; audio/x-mpeg;video/x-mpeg;text/xml",
  "content-disposition": "attachment; filename-file.mp3"
}
msg.payload.audio.data

return msg;