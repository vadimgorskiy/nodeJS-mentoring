export class City {
    constructor(city) {
        this.name = city.name;
        this.country = city.country;
        this.capital = city.capital;
        this.location = {
            lat: city.location.lat,
            long: city.location.long,
        };
    }
}