//const country = "Finland";
//const language = "Finnish"

//console.log(country);
//console.log(language);

/*
const paymentSuccess = true;
const marks = 100;
//we used void cause value is absent
function enroll() {
    console.log('Course enrollment is in progress...')
    const promise = new Promise<void>(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            } else {
                reject('Payment failed')
            }
        }, 2000);
    });
    return promise;
}
function paymentProgress() {
    console.log('Payment method is in progress...')
    const promise = new Promise<void>(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                reject('You could not get enough marks to get certified');
            }
        }, 3000);
    });
    return promise;
}
function getCertificate() {
    console.log('Preparing for Certificate.')
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Congrats! You got the certificate.');
        }, 1000);
    });
    return promise;
}
async function course() {
    try {
    await enroll();
    await paymentProgress();
    const message = await getCertificate();
    console.log(message);
    } catch (err) {
      console.log(err);
    }
}
course();
*/
/*
let fruits = ['Mango', 'Banana', 'Lichi', 'Apple', 'Kiwi', 'Orange'];
console.log(fruits);
fruits.push(34); // will throw error
*/

/*
// correct approach
let mixed = ['Mango', 'Banana', 'Lichi', 'Apple', 'Kiwi', 'Orange', 50, true];
console.log(mixed);
mixed.push(34);
// won't accept object in this array as object isn't declared
mixed.push({
    name: "Koushik"
})
*/
/*
let mixed = ['Mango', 'Banana', 'Lichi', 'Apple', 'Kiwi', 'Orange', 50, true, {}];
console.log(mixed);
mixed.push({
    name: "Koushik"
});
*/

// explicit & union types

/*
// for variables
let a: string;
let b: number;

a = "Koushik";
b = 80;

let m: string | number;
m = "koushik";
m= 80;

*/

/*
// for array

let x: string[] = [];

x.push('banana', 'mango', 'apple');
console.log(x);

let y: number[] = [];
y.push(4, 8, 10, 13);
console.log(y);


// union type

let z: (string | number | boolean)[] = [];
z.push('banana', 'mango', 'apple', 7, 9, 12, true);
console.log(z);
*/

/*
// for object

let x: object;
x = [4, 5, 6];  // it will accept array as array is a certain type of object
console.log(x);

// declared as a pattern
let c: {
    name: string;
    place: string;
    road_no: number;
    adult: boolean;
};
//c= [] // it will come error as it was declared as a pattern

c = {
    name: "koushik",
    place: "vantaa",
    road_no: 23,
    adult: true
};

console.log(c);
*/

// Dynamic type or Any type

/*
// variable
let a: any;  //or let a;
// as we declared as any type so it's possible to assign number or string or others

a = 10;
a = 'Finland';
a = true;
a = false;
*/

/*
// array
let a: any[] = [];

a.push('banana', 'mango', 'apple', 2, 4, true, false);
console.log(a);
*/

/*
// object

let a: {
    name: any,
    age: any
};

a = {
    name: 'Joe',
    age: 38
};
*/

// how to use functions

/*
//let sumInt = Function; // Function  has to be mentioned in capital letter
 const sumInt = (x:any, y:any, z?:any) => { // here used ? with z as it's optional
    if (x == y) {
        return 3 * (x + y);
    } else {
        return (x + y);
    }
}
console.log(sumInt(10, 20));
console.log(sumInt(10, 10));
*/

/*
const sumInt = (x:any, y:any, z:any="true") => {// we can use this way too by declaring a value
    if (x == y) {
        return 3 * (x + y);
    } else {
        return (x + y);
    }
}
console.log(sumInt(10, 20));
console.log(sumInt(10, 10));
*/

/*
// Type Aliases

type studentType = string | number;
type studentHis = { name: string; age: number}
type courseType = { subject: string; sub_id: number }

const studentDetails = (
    id: studentType,
    student: studentHis
) => {
    console.log(`Student id is ${id}, name is ${student.name} and age is ${student.age}`);
};

const courseDetails = (student: courseType) => {
    console.log(`The course is taken by ${student.subject} and subject id is ${student.sub_id}`);
};
*/

/*
// Function Signatures


let calculation: (a: number, b: number, c: string) => number;

calculation = (a: number, b: number, c: string) => {
    if (c == 'add') {
        return a + b;
    } else {
        return a - b;
    }
};

console.log(calculation(8, 4, 'add'));

*/


/*
// class

class Person {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    my_detail() {
        console.log(`I am ${this.name} from ${this.country} and I am ${this.age} years old.`)
    }
}

const koushik = new Person('Koushik', 42, 'Bangladesh');

console.log(koushik);

*/

/*
// Access Modifiers
// by default all properties are public
// if we don't want to access outside from the class we can use access modifier as private

class Person {
    public name: string;
    private age: number;
    readonly country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    my_detail() {
        console.log(`I am ${this.name} from ${this.country} and I am ${this.age} years old.`)
    }
}

const koushik = new Person('Koushik', 42, 'Bangladesh');

koushik.age = 32; // it's coming error as we used private
koushik.country = 'Finland'; // it's readonly property

console.log(koushik);
console.log(koushik.name); // it won't come error as we didn't use private
console.log(koushik.age); // it's coming error as we used private
console.log(koushik.country);

*/
/*
// Module System
import { Person } from "./classes/Person.js" ;

const koushik = new Person('Koushik', 42, 'Bangladesh');

console.log(koushik);
console.log(koushik.name); // it won't come error as we didn't use private
console.log(koushik.country);
*/

