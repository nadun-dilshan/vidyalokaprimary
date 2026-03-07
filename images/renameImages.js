 const fs = require('fs');
const path = require('path');

// Folder where your images are
const folderPath = '/Users/nadundilshan/Downloads/m web'; // change this to your folder

// Starting index
let startIndex = 11;

// Read all files in folder
const files = fs.readdirSync(folderPath);

// Filter only JPG/JPEG files
const images = files.filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ext === '.jpg' || ext === '.jpeg';
});

// Sort files alphabetically (optional)
images.sort();

images.forEach((file, idx) => {
  const ext = path.extname(file);
  const newName = `IMG${startIndex + idx}${ext}`;
  const oldPath = path.join(folderPath, file);
  const newPath = path.join(folderPath, newName);

  fs.renameSync(oldPath, newPath);
  console.log(`${file} -> ${newName}`);
});

console.log('Renaming done!');