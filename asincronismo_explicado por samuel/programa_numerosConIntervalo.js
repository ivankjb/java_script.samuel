for (let i = 10; i > 0; i--) {
    setTimeout(() => {
        console.log(i)
    }, i * 2000);
} 

for (var i = 10; i > 0; i--) {
    setTimeout(() => {
        console.log(i)
    }, 2000);
    console.log(i)
} 