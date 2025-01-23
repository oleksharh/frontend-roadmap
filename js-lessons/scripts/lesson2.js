let object = {
    name: 'First Last',
    age: 18,
    isAdult: true,
    sayHello: function() {
        document.write('Hello, World!');
    }
};

console.log(object['name']);

delete object.name;

console.log(object['name'], object);

let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    document.write('<br>' + array[i] + ' ');
}