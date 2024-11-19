//declaring variables
let id:number = 5;
let company:string = "Acme"
let isPublished:boolean = true;
let lang:String[] = ["eng","hindi","kan"];
let ids:number[] = [1,2,3,4,5];
let x:any = 'Praj';
let data:any[] = ["Praj",33,true];

//------------------------------------------------------------------------------------------------

//working with  function
const concatenate = (a :string,b :string) : string =>{
    return a+b;
}

console.log(concatenate("Praj","Yog"));
console.log(concatenate("5","10"));

//------------------------------------------------------------------------------------------------

//creating objects using Interface

interface UserInterface  {
    id : number,
    name : string,
    age:number
}

const User:UserInterface = {
    id : 10,
    name : "Yog",
    age:73
}

// User.age = "a"; this will give an error because age is number,
//you can change type by using interface and connect that interface to object

 //------------------------------------------------------------------------------------------------

// Optional key in the object using ?
interface UserInterfaces  {
    id : number,
    name : string,
    ages?:number
}

const Users:UserInterfaces = {
    id : 10,
    name : "Yog",
  
}
//if you try to print the missing key,it will give undefined

if(!Users.ages){
    console.log("Age is not defined!")
}else{
    console.log(Users.ages)
}

//------------------------------------------------------------------------------------------------

//working with Functions inside the object

interface UserInterfacess  {
    id : number;
    name : string;
    ages?:number;
    greet(message:string):void //here void is the return type,since we are only printing inside function, we used void
}

const Userss:UserInterfacess = {
    id : 10,
    name : "Yog",
  greet(message){
    console.log(message) // if we returned something, then in interface instead of void specify the type of the return type
  }
}

Userss.greet("Hello");

//------------------------------------------------------------------------------------------------

// Unions

const printId = (id:number) => {
    console.log(id);
}

printId(10);

//sometimes the id could be a string AudioScheduledSourceNode, in that case you may want to send number or string. 
const printIds = (id : string | number) =>{
    console.log(id)
}

console.log("abc")
console.log(123);


//we used Interface to set the type for objects, we can also the type alias or type definition for single fields as below
type IDField = string | number

const personId = (id : IDField) =>{
    console.log(id);
}

console.log(personId(123))
console.log(personId("abc"))


//======================================================================================

// Intersection

//consider you have 2 different object and you want to take some key from first object and some key from second object.
// For objects we use Interface to define the type

interface BusinessPartner{
name: string,
creditScore : number
}

interface UserIdentity{
    id:number
    email:string
}

//we want to access fields from  both interface so i will create a type and Intersect them
type Employee = BusinessPartner & UserIdentity

const signContract = (employee : Employee):void =>{
    console.log("contract signed by " + employee.name + " with email " + employee.email );
}

signContract({name: "Praj",creditScore:10,id:200,email:"praj@gmail.com"})

//======================================================================================
//Enums => define a set of named constant which allows to improve the readability and usability of your code 
// that uses those constsnat

enum LoginErrors {
Unauthorized ="unauthorized",
NoUser= "no user",
WrongCredential="wrong credential",
InternalError = "internal error"
}

const printErrorMsg = (error :LoginErrors)=>{
if( error == LoginErrors.Unauthorized){
    console.log("User is unauthorized");
    
}else if( error == LoginErrors.NoUser){
    console.log("User not available");
    
}else if( error == LoginErrors.WrongCredential){
    console.log("Credentials are wrong");
    
}
else{
    console.log("Internal error");
    
}
}

printErrorMsg(LoginErrors.NoUser)

// =======================

// Generic Types


class StorageContainer<T> {
    private contents : T[];

    constructor(){
        this.contents = [];
    }

    addItem (item : T) : void{
this.contents.push(item);
    }

    getItem(idx:number):T|undefined{
return this.contents[idx];
    }


}

const userNames = new StorageContainer<String>();
userNames.addItem("Praj");
userNames.addItem("Adi");

console.log(userNames.getItem(1));


const year = new StorageContainer<number>();
year.addItem(1991);
year.addItem(2019);

console.log(year.getItem(0))


// ===============================
// we need some fields to be read only and should not be mutated, in that case we use readonly

interface Employees {
    readonly empId: number;
    startDate : Date;
    empName: string;
    department:string;
}

const employees:Employees ={
empId :1,
startDate: new Date(),
empName:"Praj",
department:"manager"
}

console.log(employees);
employees.empName="Adi";
// employees.empId=2; => cannot change the value because it is read only
console.log(employees);