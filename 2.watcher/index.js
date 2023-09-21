const Watcher = require("./Watcher");
const fs = require("fs");

const watchDir = "./watchDir";
const processedDir = "./processedDir";

const watcher = new Watcher(watchDir, processedDir);

watcher.on("process", (file) => {
  const watchFile = `${watchDir}/${file}`;
  const processedFile = `${processedDir}/${file.toLowerCase()}`;
  console.log(`.${watchFile.split(".")[1]}.ts`);
  fs.rename(watchFile, processedFile, (err) => {
    if (err) throw err;
  });
});

watcher.start();
