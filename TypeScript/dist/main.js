function sayHello() {
    console.log("Hello, TypeScript !");
}
sayHello();
class Animal {
    makesound() {
        return "Meuuuuh";
    }
}
class Chat extends Animal {
    makesound() {
        return "Miaouuuu !";
    }
}
document.getElementById("btn").onclick = () => {
    alert(new Chat().makesound());
};
export {};
//# sourceMappingURL=main.js.map