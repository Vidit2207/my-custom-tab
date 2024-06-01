import fs from "fs";
class FileSystem {
  constructor() {
    this.initializeExternalLinks();
  }
  initializeExternalLinks() {
    const isExisting = fs.existsSync("/public/data/externalLinks.json");
    if (!isExisting) {
      fs.open("/public/data/externalLinks.json", "w", (err, file) => {
        if (err) throw err;
        console.log(file);
      });
    }
  }
  readExternalLinks() {}
  createNewExternalLink() {}
  updateExternalLink() {}
  deleteExternalLink() {}
}

const fileSystem = new FileSystem();
export default fileSystem;
