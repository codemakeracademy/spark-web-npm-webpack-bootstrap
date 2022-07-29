import "./styles/index.scss";

const userStack = {
  language: "JavaScript",
  framework: "Angular"
}

const user = {
  name: "Astemir",
  age: "24",
  ...userStack
}

console.log(user);