const readline = require("readline-sync");
let nomeHeroi = readline.question("Digite o nome do herói: ");
let nivelXp = Number(readline.question("Digite a quantidade de XP do herói: "));
let nivel;

if (nivelXp < 1000) {
  nivel = "Ferro";
} else if (nivelXp <= 2000) {
  nivel = "Bronze";
} else if (nivelXp <= 5000) {
  nivel = "Prata";
} else if (nivelXp <= 7000) {
  nivel = "Ouro";
} else if (nivelXp <= 8000) {
  nivel = "Platina";
} else if (nivelXp <= 9000) {
  nivel = "Ascendente";
} else if (nivelXp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}
console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel}.`);
