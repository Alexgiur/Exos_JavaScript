"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello() {
    console.log("Hello, TypeScript !");
}
sayHello();
class Animal {
    makesound() {
        console.log("Meuuuuh");
    }
}
class Chat extends Animal {
    makesound() {
        console.log("Miaouuuu !");
    }
}
const animal = new Animal();
animal.makesound();
const chat = new Chat();
chat.makesound();
//# sourceMappingURL=main.js.map