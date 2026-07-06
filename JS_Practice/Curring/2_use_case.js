function sendEmail (to) {
    return function (subject) {
        return function (body) {
            console.log(`Sending email to: ${to} with subject: ${subject} and body: ${body}`);
        }
    }
}

let sendToABC = sendEmail("abc_xyz@gmail.com");
let subject = sendToABC("Please practice currying");
let body = subject("This is a practice exercise for currying in JavaScript.");

body;


const sendEmailArrow = (to) => (subject) => (body) => {
    return `Sending email to: ${to} with subject: ${subject} and body: ${body}`;
}

let sendToXYZ = sendEmailArrow("abc_xyz@gmail.com");
let subjectIs = sendToXYZ("Please practice currying");
let bodyIs = subjectIs("This is a practice exercise for currying in JavaScript.");

console.log(bodyIs);