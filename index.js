/*let name = '';
let gender = '';
let age = 0;

while (!/^[a-zA-Z\u0600-\u06FF]+$/.test(name)) {
    name = prompt('Please enter your name:');
}


while (gender !== 'male' && gender !== 'female') {
    gender = prompt('Please enter your gender:');
}

while (isNaN(age) || age <= 0) {
    age = parseInt(prompt('Please enter your age:'), 10);
    if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
    }
}

alert(`Welcome, ${name}!`);*/


const findMinMax = (arr) => {
    if (arr.length === 0) {
        return { min: undefined, max: undefined };
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
};

const reverse = (arr) => {
    if (arr.length === 0) {
        return []; 
    }

    let reversed = []; 
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
};

const isStringElements = (arr) => {
    if (arr.length === 0) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) { 
        if (typeof arr[i] === 'string') {
            return true;
        }
    }

    return false;
};



let input = [1, 2, 3, 8, 5, 6, 9, 7, 5, 6];
let result = findMinMax(input);
console.log(result);



let result1 = reverse(input);
console.log(result1);

let input1 = [1, 2, "3", 4];
let input2 = [1, 2, 3, 4];
console.log(isStringElements(input1)); 
console.log(isStringElements(input2)); 