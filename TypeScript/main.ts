function sayHello(): void {
  console.log("Hello, TypeScript !")
}

sayHello()

class Animal {
    makesound(): void {
        console.log("Meuuuuh")
    }
}

class Chat extends Animal {
    makesound(): void {
        console.log("Miaouuuu !")
    } 
}

const animal = new Animal();
animal.makesound();

const chat = new Chat();
chat.makesound();