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

module.exports = {
  writeFile: writeFile
};