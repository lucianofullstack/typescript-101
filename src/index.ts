let age: number = 20;
if (age< 50)
  age+=10;

  console.log(age);

  const enum Size {Small=1, Medium, Large}
  let mySize: Size = Size.Medium

  type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void  
  }

let employee: Employee = {
   id:1,
   name: 'Lucho',
   retire: (date: Date) => {
      console.log(date);
   }
};

employee.name = 'Lucho';


function kgToLbs (weight: number | string) { 
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight)*2.2;
  }
}

kgToLbs(10);
kgToLbs("10");

let weight: number & string;

type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: ()=> void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget  = {
  drag: () => {},
  resize: ()=> {}
}

type Quantity = 50 | 100;

let quantity: Quantity = 100;



function greet(name:string|null|undefined){
  if (name)
  console.log(name.toUpperCase())
  else 
  console.log('hola')
}

greet(null);



type Customer = {
  birthday?: Date
}

function getCustomer(id:number): Customer | null | undefined {
  return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1);

console.log(customer?.birthday?.getFullYear())

let log: any = null;
log?.('a')

//(message: string) => console.log(message)


npm install aws-sdk
npm install uuid

var AWS = require("aws-sdk");

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});


// Load the SDK and UUID
var AWS = require("aws-sdk");
var uuid = require("uuid");

// Create unique bucket name
var bucketName = "node-sdk-sample-" + uuid.v4();
// Create name for uploaded object key
var keyName = "hello_world.txt";

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({ apiVersion: "2006-03-01" })
  .createBucket({ Bucket: bucketName })
  .promise();

// Handle promise fulfilled/rejected states
bucketPromise
  .then(function (data) {
    // Create params for putObject call
    var objectParams = {
      Bucket: bucketName,
      Key: keyName,
      Body: "Hello World!",
    };
    // Create object upload promise
    var uploadPromise = new AWS.S3({ apiVersion: "2006-03-01" })
      .putObject(objectParams)
      .promise();
    uploadPromise.then(function (data) {
      console.log(
        "Successfully uploaded data to " + bucketName + "/" + keyName
      );
    });
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });



