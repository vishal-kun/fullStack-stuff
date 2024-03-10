const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "vishal" || password != "pass") {
    res.status(400).json({
      msg: "input is wrong",
    });
    return;
  }

  if (kidneyId != "1" && kidneyId != "2") {
    res.status(400).json({
      msg: "input is wrong",
    });
    return;
  }

  // Do something with kidney
  res.json({
    msg: "your kidney is fine",
  });
});

app.listen(3000);
