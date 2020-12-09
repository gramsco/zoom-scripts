const axios = require("axios");
require("dotenv").config();

const token = process.env.ZOOM_TOKEN;
const user = process.env.ZOOM_USER;

const baseURL = `https://api.zoom.us/v2/users/${user}`;

let base = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

module.exports = base;
