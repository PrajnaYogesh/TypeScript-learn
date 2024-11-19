"use strict";
//declaring variables
let id = 5;
let company = "Acme";
let isPublished = true;
let lang = ["eng", "hindi", "kan"];
let ids = [1, 2, 3, 4, 5];
let x = 'Praj';
let data = ["Praj", 33, true];
//------------------------------------------------------------------------------------------------
//working with  function
const concatenate = (a, b) => {
    return a + b;
};
console.log(concatenate("Praj", "Yog"));
console.log(concatenate("5", "10"));
const User = {
    id: 10,
    name: "Yog",
    age: 73
};
const Users = {
    id: 10,
    name: "Yog",
};
//if you try to print the missing key,it will give undefined
if (!Users.ages) {
    console.log("Age is not defined!");
}
else {
    console.log(Users.ages);
}
const Userss = {
    id: 10,
    name: "Yog",
    greet(message) {
        console.log(message); // if we returned something, then in interface instead of void specify the type of the return type
    }
};
Userss.greet("Hello");
//------------------------------------------------------------------------------------------------
// Unions
const printId = (id) => {
    console.log(id);
};
printId(10);
//sometimes the id could be a string AudioScheduledSourceNode, in that case you may want to send number or string. 
const printIds = (id) => {
    console.log(id);
};
console.log("abc");
console.log(123);
const personId = (id) => {
    console.log(id);
};
console.log(personId(123));
console.log(personId("abc"));
const signContract = (employee) => {
    console.log("contract signed by " + employee.name + " with email " + employee.email);
};
signContract({ name: "Praj", creditScore: 10, id: 200, email: "praj@gmail.com" });
//======================================================================================
//Enums => define a set of named constant which allows to improve the readability and usability of your code 
// that uses those constsnat
var LoginErrors;
(function (LoginErrors) {
    LoginErrors["Unauthorized"] = "unauthorized";
    LoginErrors["NoUser"] = "no user";
    LoginErrors["WrongCredential"] = "wrong credential";
    LoginErrors["InternalError"] = "internal error";
})(LoginErrors || (LoginErrors = {}));
const printErrorMsg = (error) => {
    if (error == LoginErrors.Unauthorized) {
        console.log("User is unauthorized");
    }
    else if (error == LoginErrors.NoUser) {
        console.log("User not available");
    }
    else if (error == LoginErrors.WrongCredential) {
        console.log("Credentials are wrong");
    }
    else {
        console.log("Internal error");
    }
};
printErrorMsg(LoginErrors.NoUser);
// =======================
// Generic Types
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const userNames = new StorageContainer();
userNames.addItem("Praj");
userNames.addItem("Adi");
console.log(userNames.getItem(1));
const year = new StorageContainer();
year.addItem(1991);
year.addItem(2019);
console.log(year.getItem(0));
const employees = {
    empId: 1,
    startDate: new Date(),
    empName: "Praj",
    department: "manager"
};
console.log(employees);
employees.empName = "Adi";
console.log(employees);
