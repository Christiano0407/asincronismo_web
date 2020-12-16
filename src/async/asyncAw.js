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
