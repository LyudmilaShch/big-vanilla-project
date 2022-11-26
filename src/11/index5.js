const findUserInDB = (id) => {
    const users = [
        {id: 1, name: 'Lyuda', friend: 5},
        {id: 2, name: 'Katya', friend: 3},
        {id: 3, name: 'Tanya', friend: 4},
        {id: 4, name: 'Vasya', friend: 1}
    ]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (users.find(u => u.id === id)) {
                resolve(users.find(u => u.id === id))
            } else {
                reject('User not found')
            }
        }, randomIntFromInterval(500, 1500));
    })
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


findUserInDB(1)
    .then(user => {
        console.log(user.name)
        return user.friend;
    })
    .then(frientId => findUserInDB(frientId))
    .catch(error => {
        return {name: 'Friend Bot', friend: 2}
    })
    .then(friend1 => {
        console.log(friend1.name)
        return friend1.friend
    })
    .then(friend1Id => findUserInDB(friend1Id))
    .then(friend2 => console.log(friend2.name))
    .catch(error => alert(error))

async function run() {
    try {
        let user = await findUserInDB(1)
        console.log(user.name)
        let friend1;
        try {
            friend1 = await findUserInDB(user.friend)
        } catch {
            friend1 = {name: 'Friend Bot', friend: 2}
        }
        console.log(friend1.name)
        let friend2 = await findUserInDB(friend1.friend)
        console.log(friend2.name)
    } catch(error){
        alert(error)
    }

}
run()