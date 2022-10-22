export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}
export type CompanyType = {
    id: number
    title: string
}
export type LaptopType = {
     title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}
export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u, hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u, address: {...u.address, city: city}
    };
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u, laptop: {...u.laptop, title: laptop}
    };
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u, address: {...u.address, house: house}
    };
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    return {
        ...u, books: [...u.books.concat(books)]
    };
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, book: string, updateBook: string) => ({
        ...u, books: u.books.map(el => el === book ? updateBook : book)
    });

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) => ({
    ...u, books: u.books.filter(el => el !== bookForDelete)
});

export function addNewCompany(u: UserWithLaptopType & WithCompaniesType,
                              company: {id: number, title: string}) {
    return {
        ...u, companies: [...u.companies, company]
    };
}

export function updateCompanyTitle(u: WithCompaniesType, id: number, newTitleCompany: string) {
    return {
        ...u, companies: u.companies.map(el => el.id === id ? {...el, title: newTitleCompany} : el )
    };
}

export const updateCompanyTitle2 = (companies: { [key: string]: Array<CompanyType> }, userName: string, companyId: number, newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy
    };