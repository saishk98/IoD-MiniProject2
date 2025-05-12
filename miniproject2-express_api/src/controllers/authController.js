import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let users = []; // Simulated user database

export const signup = async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  if (users.some(user => user.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password before storing
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "Signup successful!" });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  // Verify user exists and password is correct
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "Login successful!", token });
};