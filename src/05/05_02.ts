import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings =
    (buildings: Array<GovernmentBuildingType>) => {
        return buildings.map(b => b.address.street.title)
    }

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(s => s.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {

    return  houses.map(m => "Hello guys from " + m.address.street.title)
}

/*
export const createMessages = (houses: Array<HouseType>) => {

    let callbackfn = (m: HouseType) => {
        return (
            "Hello guys from " + m.address.street.title
        )
    }
    let newArray = houses.map;
    return newArray(callbackfn)
}*/
