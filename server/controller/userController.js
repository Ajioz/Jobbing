const fs = require("fs");
const dataPath = "./Details/account.json";


const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath, stringifyData);
};

const getAccountData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

exports.getUsersAsync = (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
};

exports.getUsersSync = (req, res) => {
  const accounts = getAccountData();
  res.send(accounts);
};

exports.addUser = (req, res) => {
  let existAccounts = getAccountData();
 
  const newAccountId = Math.floor(100000 + Math.random() * 900000);

  existAccounts[newAccountId] = req.body;

  saveAccountData(existAccounts);
  res.send({ success: true, msg: "account data added successfully" });
};

exports.updateUser = (req, res) => {
  var existAccounts = getAccountData();
  fs.readFile(
    dataPath,
    "utf8",
    (err, data) => {
      const accountId = req.params["id"];
      existAccounts[accountId] = req.body;

      saveAccountData(existAccounts);
      res.send(`accounts with id ${accountId} has been updated`);
    },
    true
  );
};

exports.deleteUser = (req, res) => {
  fs.readFile(
    dataPath,
    "utf8",
    (err, data) => {
      let existAccounts = getAccountData();

      const userId = req.params["id"];

      delete existAccounts[userId];
      saveAccountData(existAccounts);
      res.send(`accounts with id ${userId} has been deleted`);
    },
    true
  );
};