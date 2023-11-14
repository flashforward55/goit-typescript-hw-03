// Клас Key
class Key {
    private signature: number = Math.random()

    getSignature(): number {
        return this.signature;
    }
}

// Клас Person
class Person {
    constructor(private key: Key) { }

    getKey(): Key {
        return this.key;
    }
}

// Абстрактний клас House
abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];
    constructor(protected key: Key) { }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log(`${person.getKey().getSignature()} entered the house.`);
        } else {
            console.log('The door is closed. Cannot enter.');
        }
    }
}

// Клас MyHouse, який успадковується від House
class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is open.');
        } else {
            console.log('Wrong key. The door remains closed.');
        }
    }
}

// Сценарій
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person)

export { };