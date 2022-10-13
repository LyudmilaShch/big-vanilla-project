function icreaseAge(u: UserType) {
    u.age = u.age + 1;
}

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

test("big reference type test", () => {

    var user = {
        name: 'Lyuda',
        age: 23,
        address: {
            title: 'Minsk'
        }
    }

    icreaseAge(user)


    expect(user.age).toBe(24)

    const superman = user
    superman.age = 1000;
    expect(user.age).toBe(1000)
})

test("array reference test", () => {

    var users = [
        {
            name: 'Lyuda',
            age: 23
        },
        {
            name: 'Lyuda',
            age: 23
        }
    ]
    var admins = users
    admins.push({name: 'Bandyagan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyagan', age: 10})

})

test("value type test", () => {

    let usersCount = 100
    let adminsCount = usersCount
    adminsCount = adminsCount + 1

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)

})

test("big reference type test", () => {
    let address = {
        title: 'Minsk'
    }
    let user = {
        name: 'Lyuda',
        age: 23,
        address: {
            title: address
        }
    }
    let addr = user.address
    let user2 = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Minsk City'

    expect(user.address.title.title).toBe('Minsk City')
})

test("reference type array test", () => {
    let address = {
        title: 'Minsk'
    }
    let user = {
        name: 'Lyuda',
        age: 23,
        address: {
            title: address
        }
    }
    let user2 = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}]
    const admins = [user, user2]
    admins[0].name = 'Lyudmila'

    expect(users[0].name).toBe('Lyudmila')
    expect(user.name).toBe('Lyudmila')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']
    passportist(letters);
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'] )
});

function passportist(letters:any) {
const copy = [...letters, letters.sort()];
    console.log(copy)
}
