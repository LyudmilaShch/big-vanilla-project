import {
    addNewBooksToUser, addNewCompany,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";

test("reference type test", () => {
    let user: UserType = {
        name: 'Lyuda',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)
    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})


test("change address", () => {
    let user: UserWithLaptopType = {
        name: 'Lyuda',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        }
    }


    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})


test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: 'Lyuda',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        }
    }


    const upgradeUser = upgradeUserLaptop(user, 'macbook')

    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.laptop).not.toBe(upgradeUser.laptop)
    expect(upgradeUser.laptop.title).toBe('macbook')
    expect(user.laptop.title).toBe('lenovo')
})

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Lyuda',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        books: [
            'css', 'html', 'js', 'react'
        ]
    }


    const upgradeUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(upgradeUser)
    expect(user.books).toBe(upgradeUser.books)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(user.address).not.toBe(upgradeUser.address)
    expect(upgradeUser.address.house).toBe(99)
})

test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Lyuda',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        books: [
            'css', 'html', 'js', 'react'
        ]
    }


    const upgradeUser = addNewBooksToUser(user, ['ts', 'rest'])

    expect(user).not.toBe(upgradeUser)
    expect(user.books).not.toBe(upgradeUser.books)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.books).not.toBe(upgradeUser.books)
    expect(upgradeUser.books[4]).toBe('ts')
    expect(upgradeUser.books[5]).toBe('rest')
})

test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Lyuda',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        books: [
            'css', 'html', 'js', 'react'
        ]
    }


    const upgradeUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(upgradeUser)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.books).not.toBe(upgradeUser.books)
    expect(upgradeUser.books[2]).toBe('ts')
})

test("remove js book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Lyuda',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        books: [
            'css', 'html', 'js', 'react'
        ],

    }


    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test("add new company", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Lyuda',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'it-incubator'}
        ]
    }

    const userCopy = addNewCompany(user, {id: 3, title:'tinkoff'})

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[2].title).toBe('tinkoff')
})

test("update company", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Lyuda',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'lenovo'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'it-incubator'}
        ]
    }

    const userCopy = updateCompanyTitle(user, 1, 'tiss') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('tiss')
})

test("update company", () => {
    let companies = {
        'Lyuda':[
            {id: 1, title: 'Tiss'},
            {id: 2, title: 'Tinkoff'}
        ],
        'Dimych': [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'it-incubator'}
        ]
    }

   const copy =  updateCompanyTitle2(companies, 'Dimych', 1, 'EPAM')


    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Lyuda']).toBe(companies['Lyuda'])
    expect(copy['Dimych'][0].title).toBe('EPAM')
})