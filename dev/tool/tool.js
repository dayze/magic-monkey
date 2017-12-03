const readline = require('readline');
const fs = require('fs');
const dependenciesJSON = JSON.parse(fs.readFileSync('dependencies.json', 'utf8'));
let finalCSScode = ""

let matchRegExp = function (regExp, data) {
  return data.match(regExp)[1]
}

/* Lecture du fichier html */
const rl = readline.createInterface({
  input: fs.createReadStream('testTool.html')
});
/* pour chaque ligne du fichier html */
rl.on('line', function (line) {
  if (line.includes("class=")) {
    /*let regExpClassAttr = "class=\"(.*?)\""
    let classAttrStringValue = line.match(regExpClassAttr)[1]
    let classesList = classAttrStringValue.split(" ").filter(entry => entry.trim() !== '');*/
    let classesList = matchRegExp("class=\"(.*?)\"", line).split(" ").filter(entry => entry.trim() !== '');


    classesList.forEach(function (className) {
      if (dependenciesJSON.hasOwnProperty(className)) {
        let dependencies = dependenciesJSON[className]
        if (dependencies.length !== 0) {
          console.log("vide")
        }
        fs.readFileSync("../../stylesheets/magic-monkey.min.css", "utf-8",
          function (err, data) {
            if (err) {
              throw err;
            }
            /* let regExpContentClass = "(\." + className + "\{.*?\})"
             finalCSScode += data.match(regExpContentClass)[1]*/
            finalCSScode += matchRegExp("(\." + className + "\{.*?\})", data)
            console.log(finalCSScode)
          }
        )
      }
    })


  }
}, function () {
  console.log("test")
});
console.log(finalCSScode)
/* création du fichier css */
fs.writeFile("magic-monkey-minimalist.css", finalCSScode, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});