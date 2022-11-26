var axios = {
    _fake(url, data){
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                };
                if (url.indexOf('it-kamasutra') > 0){
                    responseData = {
                        requectedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if (url.indexOf('google') > 0){
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0){
                    responseData = {
                        vacancies: 21
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1, 5)*1000);
        });
    },
    post(url, data){
        return this._fake(url, data)
    },
    get(url, data){
        return this._fake(url, data)
    }
}

const findUserInDB = (id) => {
    const users = [
        {id: 1, name: 'Lyuda', friend: 3},
        {id: 2, name: 'Katya', friend: 3},
        {id: 3, name: 'Tanya', friend: 3},
        {id: 4, name: 'Vasya', friend: 3}
    ]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (users.find(u => u.id === id)) {
                resolve(users.find(u => u.id === id))
            } else {
                reject('User not find')
            }
        }, randomIntFromInterval(500, 1500));
    })
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const promise2 = findUserInDB(2)
console.log(promise2)