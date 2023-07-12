const Team = {
    RED: "red",
    BLUE: "blue",
};

//object에 함수 추가하는 방법
const player = {
    name: "mimi",
    team: Team.RED,
    point: 1200,
    sayHello: function (age) {
        console.log("age is " + age);
    }
};

console.log(player);
player.sayHello(20)

function sayHello(name) {
    console.log("hello i'm " + name);
}

sayHello("mimi")