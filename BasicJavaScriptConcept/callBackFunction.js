function explain_callback(name, age, task) {
    console.log("Hello ", name);
    console.log("Your Age is ", age)
    task()
}

function washHand() {
    console.log("wash hand with soap")
}

function takeShower() {
    console.log("take a shower")
}

function scroolFB() {
    console.log("Scrool facebook and like comment on that")
}

explain_callback("Sogiruddin", 17, washHand);
explain_callback("kobir uddin", 13, takeShower);
explain_callback('Mogir uddin', 21, scroolFB)