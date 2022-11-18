export class Person {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    my_detail() {
        console.log(`I am ${this.name} from ${this.country} and I am ${this.age} years old.`);
    }
    getProperty() {
        return this.age;
    }
}
