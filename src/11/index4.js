// function secondomer(counter) {
//     console.log(counter)
//     setTimeout(() => {
//         counter < 100 ? secondomer(counter +1) : console.log('End')
//     }, 1000)
// }
// secondomer(0)
//
// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//         }, 1000)
//     }, 1000)
// }, 1000)


function wait(msec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, msec);
    })
}

async function run() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}
run()