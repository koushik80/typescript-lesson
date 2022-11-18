import { isPerson } from "../interfaces/isPerson.js";
export class Person implements isPerson {
    public name: string;
    public age: number;
    readonly country: string;

    constructor(n: string, a: number, c: string) {
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