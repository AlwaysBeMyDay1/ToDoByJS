const player ={
    name:"DY",
    points:10,
    fat:true,
};
// name, points ,,, : key && "DY", 10 ,,, : value
console.log(player);

player.height=10;
player.points+=5;

console.log(player);

console.log(player.name);
console.log(player["name"]);