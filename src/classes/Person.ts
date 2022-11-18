export class Person {
    public name: string;
    private age: number;
    readonly country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    my_detail() {
        console.log(`I am ${this.name} from ${this.country} and I am ${this.age} years old.`)
    }
}