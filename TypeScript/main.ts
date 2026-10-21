function sayHello(): void {
  console.log("Hello, TypeScript !")
}

sayHello()

class Animal {
    makesound(): string {
        return "Meuuuuh"
    }
}

class Chat extends Animal {
    makesound(): string {
        return "Miaouuuu !"
    } 
}

document.getElementById("btn")!.onclick = () => {
  alert(new Chat().makesound());
};