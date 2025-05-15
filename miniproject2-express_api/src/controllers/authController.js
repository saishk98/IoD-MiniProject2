// Basic user object for validation, adding, and updating password
const users = [
  {
    username: "testuser@example.com",
    password: "securePass123", // 12-character password
  },
];

const validAuthToken = "mySecureAuthToken123"; // Define a valid auth token for validation

const checkAuthToken = (req, res) => {
  const authToken = req.headers["auth-token"];

  if (!authToken) {
    res.status(401).send("Auth token is missing");
    return false;
  }

  if (authToken !== validAuthToken) {
    res.status(403).send("Invalid auth token");
    return false;
  }

  return true;
};

// Controller functions (you can replace these with actual implementations)
const login = (req, res) => {
  const isValid = checkAuthToken(req, res);

  if (!isValid) {
    return;
  }

  const { username, password } = req?.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).send("Invalid username or password");
    // WHAT WOULD I DO IF I WANTED TO TELL THE FRONT END THAT IT WAS EITHER THE USERNAME OR PASSWORD THAT WAS WRONG?
  }

  // user is found
  res.status(200).send("Login successful");
};

const changePassword = (req, res) => {
  const isValid = checkAuthToken(req, res);

  if (!isValid) {
    return;
  }

  const { username, currentPassword, newPassword } = req?.body;

  if (!username || !currentPassword || !newPassword) {
    return res
      .status(400)
      .send("Username, current password, and new password are required");
  }

  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(404).send("User not found");
  }

  if (user.password !== currentPassword) {
    return res.status(401).send("Current password is incorrect");
  }

  user.password = newPassword;

  res.status(200).send("Password updated successfully");
};

const addUser = (req, res) => {
  const isValid = checkAuthToken(req, res);

  if (!isValid) {
    return;
  }

  const { username, password } = req?.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const userExists = users.some((u) => u.username === username);

  if (userExists) {
    return res.status(409).send("User already exists");
  }

  users.push({ username, password });

  res.status(201).send("User added successfully");
};

module.exports = {
  login,
  changePassword,
  addUser,
};