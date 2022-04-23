import fs from "fs";

fs.appendFile("my-file.txt", "File created with nodejs.", (err) => {
    if (err) throw err;
    console.log("Success");
});