const doAsync = () => {
    return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve(`This is the true!`), 2000)
    : reject(new Error(`Error, problem!`))
    });
}

const doAwait = async () => {
    const something = await doAsync()
    console.log(something);
}

console.log(`BEFORE`);
doAwait();
console.log(`AFTER`);

//TWO:
const doOne = () => {
    return new Promise((resolve, reject) => {
        if(true){
         setTimeout(() => {
         resolve(`Async is true!!`)
         },3000)
        }else {
        const error = new Error(`Problems!`);
         reject(error);
        }
    });
}

const doTwo = async () => {
    const doThree = await doOne()
    console.log(doThree);
}

doTwo();
