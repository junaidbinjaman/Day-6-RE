function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, "is a even Number")
    } else {
        console.log(num * 2, " is a odd number")
    }
}

// var nums = [5, 12, 89, 45, 18, 8];

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     evenify(num)
// }

var friends_age = [13, 17, 19, 20, 18];

for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    evenify(age)
}