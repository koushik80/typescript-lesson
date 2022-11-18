//const country = "Finland";
//const language = "Finnish"

//console.log(country);
//console.log(language);


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