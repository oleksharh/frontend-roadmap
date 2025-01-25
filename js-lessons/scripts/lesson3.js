let user =
{
    name: 'First Last',
    age: 18,
    car: true,
    son:
    {
        name: 'Second Last',
        age: 2, 
    }
}

Object.keys(user).forEach(function(key) {
    console.log(key, user[key]);
});

Object.values(user).forEach(function(val) {
    console.log(val);
});

Object.entries(user).forEach(function(entry) {
    console.log(entry);
});

let userStr = JSON.stringify(user);

console.log(userStr);

let userObj = JSON.parse(userStr);

console.log(userObj);