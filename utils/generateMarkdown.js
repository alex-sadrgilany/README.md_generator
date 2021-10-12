// require fs package
const fs = require("fs");

// Create a function that works on Promise to write the README.md
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File successfully created!"
      });
    });
  });
};

// export so it can be called on index.js
module.exports = {
  writeFile: writeFile
};