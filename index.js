var i = 0
function forever_loop() {
    i++
    setTimeout(forever_loop, 5000);
    console.log("Hellow world " + i)
}

console.log("Hellow world")
forever_loop()