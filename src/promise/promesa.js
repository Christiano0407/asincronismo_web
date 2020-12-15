const somethingHappen = () => {
    return new Promise((resolve, reject) => {
    if(true){
        resolve(`Very Good!`);
    }else {
        reject(`Not this moment!`);
    }
    });
};

somethingHappen()
.then((response) => console.log(response) )
.catch((err) => console.error(err));

// TWO
const nameHuman = () => {
  return new Promise((resolve, reject) => {
   if(true){
       resolve(`This is of way`);
   }else {
       reject(`Problem, problem!`);
   }
  });
};

nameHuman()
.then((response) => console.log(response))
.catch((err) => console.error(err));

// THREE
const imagine = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
            resolve(`Happy!`)
            }, 2000)
        }else {
            const error = new Error(`This is problem!`);
            reject(error);
        }
    });
};

imagine()
.then((response) => console.log(response))
.catch((err) => console.error(err));

//Promise.all (Todas las promesas a ejecutar)

Promise.all([somethingHappen(), nameHuman(), imagine()])
.then(response => console.log(`This is a array`, response))
.catch(err => console.error(err));
