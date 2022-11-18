"use strict";
//const country = "Finland";
//const language = "Finnish"
//console.log(country);
//console.log(language);
/*
const paymentSuccess = true;
const marks = 100;

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
// for object
let x;
x = [4, 5, 6]; // it will accept array as array is a certain type of object
console.log(x);
let c;
c = {
    name: "koushik",
    place: "vantaa",
    road_no: 23,
    adult: true
};
console.log(c);
