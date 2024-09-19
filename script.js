let nomeTurista = prompt("Qual o seu nome?");
let cidadesVisitadas = [];
let cidade;

do {
  cidade = prompt("Você já visitou alguma cidade? (sim/não)");
  if (cidade.toLowerCase() === "sim") {
    cidade = prompt("Qual cidade você visitou?");
    cidadesVisitadas.push(cidade);
  }
} while (cidade.toLowerCase() === "sim");

console.log(`Olá, ${nomeTurista}! Você visitou ${cidadesVisitadas.length} cidades:`);
for (let i = 0; i < cidadesVisitadas.length; i++) {
  console.log(cidadesVisitadas[i]);
}

