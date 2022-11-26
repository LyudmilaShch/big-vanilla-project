// const resolvedPromise = Promise.resolve([{}])
// resolvedPromise
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))

// const rejectedPromise = Promise.reject({message: 'Some error'})
// rejectedPromise
// .then(data => console.log(data))
// .catch(error => console.warn(error))


const usersAPI = {
    gerAllUsers() {
        return Promise.resolve([{name: 'D', name: 'N'}])
    },
    login(login, password) {
        if (login !== '123' && password != '123') {
            return Promise.reject({message: 'inccorect Login and password'})
        } else {
            return Promise.resolve({name: 'Dime', id: 12, avatarUrl: ''})
        }
    }
}

const pr = usersAPI.gerAllUsers()
pr.then(users => console.log(users))
usersAPI.login('123', '44142')
    .then((data) => {
        //makeRedirect
    })
    .catch(error => {
        //show error
    })