// Step 1: Basic server + User Signup/Login/Profile
// Idi chesedi enti: users signup/login chesi, tama profile create cheskovadam

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.static("public")); // public folder lo HTML files serve chestam
app.use(express.json()); // form data ni JSON la చదవడానికి

// ---------- Users Data (JSON file lo save chestam) ----------
const USERS_FILE = path.join(__dirname, "users.json");

function loadUsers() {
  if (fs.existsSync(USERS_FILE)) {
    return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
  }
  return {}; // { "ravi": { password: "123", bio: "Hi nenu Ravi" } }
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// SIGNUP: kotha account create cheyadam
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  if (!username || !password) {
    return res.json({ success: false, message: "Peru mariyu password ivvali" });
  }
  if (users[username]) {
    return res.json({ success: false, message: "Ee peru already unna account undi" });
  }

  // kotha user ni create chestunnam, bio ippటికీ khaali ga untundi
  users[username] = { password: password, bio: "" };
  saveUsers(users);
  res.json({ success: true });
});

// LOGIN: unna account tho login cheyadam
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  if (users[username] && users[username].password === password) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Peru leda password thappu" });
  }
});

// PROFILE UPDATE: bio update cheyadam
app.post("/update-profile", (req, res) => {
  const { username, bio } = req.body;
  const users = loadUsers();

  if (!users[username]) {
    return res.json({ success: false, message: "User kanipinchaledu" });
  }

  users[username].bio = bio;
  saveUsers(users);
  res.json({ success: true });
});

// PROFILE GET: oka user profile details tీసుకోవడానికి
app.get("/profile/:username", (req, res) => {
  const users = loadUsers();
  const user = users[req.params.username];

  if (!user) {
    return res.json({ success: false, message: "User kanipinchaledu" });
  }

  // password pంపకుండా, bio matrame pంపుతున్నాం (security kosam)
  res.json({ success: true, username: req.params.username, bio: user.bio });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
