const { Person } = require("./person")

require("./modules/path")

const person = new Person("Esdras")
console.log(person.sayMyName())