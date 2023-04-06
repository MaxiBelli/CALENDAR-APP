const { response } = require("express");


// Function to create a new user
const createUser = async (req, res = response) => {
const { name , email, password } = req.body;

res.status(201).json({
ok: true,
message: "register",
name,
email,
password
});
}

// Function to login a user
const loginUser = async (req, res = response) => {
const { email, password } = req.body;

res.status(201).json({
ok: true,
message: "login",
email,
password
});
}

// Function to revalidate a token
const revalidateToken = async (req, res = response) => {
res.json({
ok: true,
message: "renew",
});
};

module.exports = {
createUser,
loginUser,
revalidateToken,
};