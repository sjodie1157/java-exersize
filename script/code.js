
let numbers = [12, 18, 11, 5, 8, 2];
console.log(numbers);

function displayMiddleNumber(numbers) {
    let length = numbers.length;
    
    if (length % 2 === 0) {
        let mid1 = numbers[length / 2 - 1];
        let mid2 = numbers[length / 2];
        console.log(mid1 +' & '+ mid2);
    } else {
        let mid = numbers[Math.floor(length / 2)];
        console.log(mid);
    }
}

displayMiddleNumber(numbers)


  