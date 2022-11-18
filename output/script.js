"use strict";
//const country = "Finland";
//const language = "Finnish"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//console.log(country);
//console.log(language);
const paymentSuccess = true;
const marks = 100;
function enroll() {
    console.log('Course enrollment is in progress...');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            }
            else {
                reject('Payment failed');
            }
        }, 2000);
    });
    return promise;
}
function paymentProgress() {
    console.log('Payment method is in progress...');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            }
            else {
                reject('You could not get enough marks to get certified');
            }
        }, 3000);
    });
    return promise;
}
function getCertificate() {
    console.log('Preparing for Certificate.');
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Congrats! You got the certificate.');
        }, 1000);
    });
    return promise;
}
function course() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield enroll();
            yield paymentProgress();
            const message = yield getCertificate();
            console.log(message);
        }
        catch (err) {
            console.log(err);
        }
    });
}
course();
