const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "5251b959-16a5-4a23-970c-c93cd79674e5"}}
    )
    return res.status(r.status).json(r.data)
  } catch (error) {
    return res.status(e.response.satus).json(e.response.data)
  }
  return res.json({ username: username, secret: "sha256..." });
});


app.listen(3000), () => {
    console.log("Server started on port 3000")
};