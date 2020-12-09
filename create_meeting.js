const query = require("./query.json");
const settings = require("./settings.json");
const base = require("./config");

const path = "/meetings";

query.settings = settings;

console.log(settings);

base.post(path, query).then(console.log).catch(console.log);
