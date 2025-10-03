const path = require("path");

// BaseName

console.log(path.basename(__filename));

//Nome do Diretorio atual
console.log(path.dirname(__filename))

//Extensão do arquivo
console.log(path.extname(__filename))

//Criar um objeto path
console.log(path.parse(__filename))

//Juntar caminhos de arquivos
console.log(path.join(__dirname,"test","test.html"));