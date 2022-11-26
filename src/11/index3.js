function getNumber() {
    //const promise = Promise.resolve(Math.random())
    const promise = new Promise((resolve, reject) => {
        // reject("error")
        setTimeout(() => {
            resolve(Math.random())
        }, 2000);

    })
    return promise
}

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))

const repo = {
    save(data) {
        try {
            localStorage.setItem("some-key", JSON.stringify(data))
        } catch (error) {
            return false;
        }
        return true;
    },
    read() {
        const data = localStorage.getItem("some-key");
        if (!data){
            return null
        } else {
            return JSON.parse(data)
        }
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem("some-key", JSON.stringify(data))
                resolve()
            } catch (error) {
                reject(error)
            }

        })
        return promise;
    },
    readAsync() {
        return new Promise((res, rej) => {
            const data = localStorage.getItem("some-key");
            if (!data){
                res(null)
            } else {
                res(JSON.parse(data))
            }
            JSON.parse()
        })
    }
}



repo.saveAsync({name: 'Lyuda'})
        .then(() =>  console.log("SAVED"))
        .catch(error =>  console.warn("NOT SAVED"))
//синхронные функции
const result = repo.save({name: 'Lyuda'})
console.log("SAVED")
const data = repo.read()
console.log(data)

//ассинхронные функции
const run = async () => {
    await repo.saveAsync({name: 'Lyuda'})
        console.log("SAVED")

    const data = await repo.readAsync()
    console.log(data)
}
run()