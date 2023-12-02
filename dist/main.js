"use strict";
let dylanProfile = {
    id: 0,
    name: 'dylan k.'
};
const kgToLbs = (weight) => {
    if (typeof weight === 'string') {
        return parseInt(weight) * 2.2;
    }
    return weight * 2.2;
};
console.log(kgToLbs(95));
let quantity = 50;
let mph = 25;
mph = 53;
let ride = {
    currentSpeed: mph !== null && mph !== void 0 ? mph : null
};
console.log(ride);
class Cohort {
    constructor(cohortId, cohortName, cohortNumber) {
        this.printInfo = () => {
            return `This is cohort: ${this.name}-${this.number}`;
        };
        this.printName = () => {
            return this.name;
        };
        this.id = cohortId,
            this.name = cohortName,
            this.number = cohortNumber;
    }
}
const thieves = new Cohort(0, 'thieves', 133);
console.log(thieves.printInfo());
console.log(thieves.printName());
console.log(thieves instanceof Cohort);
class Team {
    constructor(id, _name, city) {
        this.id = id;
        this._name = _name;
        this.city = city;
        this.printInfo = () => {
            return `The ${this._name} are from ${this.city}`;
        };
    }
}
const eagles = new Team(1, 'eagles', 'philly');
console.log(eagles.printInfo());
class Team2 {
    constructor(id, _name, city, playerName) {
        this.id = id;
        this._name = _name;
        this.city = city;
        this.playerName = playerName;
        this.printInfo = () => {
            return `${this.playerName} plays for the ${this.city} ${this._name}`;
        };
    }
}
const bulls = new Team2(2, 'bulls', 'chicago', 'michael jordan');
console.log(bulls.printInfo());
