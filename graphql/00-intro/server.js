var express = require("express");
var { graphql, buildSchema } = require("graphql");
var graphHTTP = require("express-graphql");

var schema = buildSchema(`
  type Account {
    name: String
    age: Int
    sex: String
    salary(city: String): Int
  }

  type Query {
    hello: String
    test: String
    accounts: [Account]
    account: Account
    getAccount(name: String): Account
    getClassMates(classNo: Int!):[String]
  }


  input AccountInput {
    name: String
    age: Int
    sex: String
    department: String
    salary:Int
  }

  type Mutation {
    createAccount(input : AccountInput): Account
    updateAccount(id:ID!, input:AccountInput): Account
  }
`);

var rootValue = {
  hello: () => "Hello world!",
  test: () => "test",
  account: () => {
    return {
      name: "name",
      age: 18,
      sex: "female",
    };
  },
  accounts: () => {
    return [];
  },
  getAccount: ({ name }) => {
    return {
      name: name,
      age: 18,
      sex: "female",
      salary: ({ city }) => {
        if (city === "A") return 1000000;
        return 80000;
      },
    };
  },
  getClassMates: ({ classNo }) => {
    console.log(classNo);
    const obj = {
      31: ["aaa", "bbb", "ccc"],
      61: ["eee", "fff", "ggg"],
    };
    return obj[classNo];
  },

  //mutation
  createAccount: ({ accountDTO }) => {
    //createAccount
  },
  updateAccount: ({ id, accountDTO }) => {
    //udpateAccount
    //TODO Object.assign(a,b,c)???
  },
};

const app = express();
app.use(
  "/graphql",
  graphHTTP({
    schema: schema,
    rootValue: rootValue,
    graphql: true,
  })
);
