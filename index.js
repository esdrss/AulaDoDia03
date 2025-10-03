const { Person } = require("./person")

require("./modules/path")

const person = new Person("Bruno");
console.log(person.sayMyName())