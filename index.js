let readlineSync = require("readline-sync");
let nome = readlineSync.question("Digite o nome do herói: ");
let quantidadeExperiencia = Number(
  readlineSync.question("Digite os pontos de experiência: ")
);
let nivel = "";

if (quantidadeExperiencia <= 1000) {
  nivel = "Ferro";
} else if (quantidadeExperiencia >= 1001 && quantidadeExperiencia <= 2000) {
  nivel = "Bronze";
} else if (quantidadeExperiencia >= 2001 && quantidadeExperiencia <= 5000) {
  nivel = "Prata";
} else if (quantidadeExperiencia >= 5001 && quantidadeExperiencia <= 7000) {
  nivel = "Ouro";
} else if (quantidadeExperiencia >= 7001 && quantidadeExperiencia <= 8000) {
  nivel = "Platina";
} else if (quantidadeExperiencia >= 8001 && quantidadeExperiencia <= 9000) {
  nivel = "Ascendente";
} else if (quantidadeExperiencia >= 9001 && quantidadeExperiencia <= 10000) {
  nivel = "Imortal";
} else if (quantidadeExperiencia >= 10001) {
  nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel} e sua quantidade de XP é igual a
    ${quantidadeExperiencia}XP!
`);
