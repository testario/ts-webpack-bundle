class User{
    name : string;
    constructor(_name:string){
        this.name = _name;
    }
}
const tom : User = new User("Том");
const header = document.getElementById("app");

// @ts-ignore
header.textContent = "Привет " + tom.name;