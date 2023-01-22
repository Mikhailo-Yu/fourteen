function getPlus() { 
    let result = 0; 
    return function(num) { 
        result = result + num;
        return result; 
    } 
};

const sum = getPlus();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

// function getMinus() { 
//     let result = 20; 
//     console.log('Result перед return ' + result);
//     return function(num) { 
//         result = result - num;
//         console.log('Result перед return всередині функції' + result);
//         return result; 
//     } 
// };

// let reason = getMinus();
// console.log(reason(2));
// console.log(reason(8));
// console.log(reason(3));