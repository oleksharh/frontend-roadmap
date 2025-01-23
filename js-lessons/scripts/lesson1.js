alert('Hello, World!');

let randomStr = 'Hello, World!';

document.write(randomStr);

let isAdult = confirm('Are you an adult?');

if (isAdult) {
    document.write('Welcome!');
} else {
    document.write('Sorry, you are not allowed to enter this site.');
}

document.write('<br>');
document.write(isAdult);

let peomptValue = prompt('Enter your name: ', 'First Last');

document.write('<br>');
document.write(peomptValue);

switch (peomptValue) {
    case 'First Last':
        document.write('Welcome, First Last!');
        break;
    case 'First':
        document.write('Welcome, First!');
        break;
    default:
        document.write('Welcome!');
        break;
}