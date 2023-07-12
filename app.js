const Team = {
    RED: "red",
    BLUE: "blue",
};

//object는 property를 가진 데이터를 저장, { } 를 사용

const player = {
    name: "mimi",
    team: Team.RED,
    point: 1200,
};

console.log(player);

// property를 불러오는 방법
// 1. console.log(player.name); => tomato
// 2. console.log(player["name"]); => tomato

// property를 추가하는 방법
player.lastName = "kim"

console.log(player);