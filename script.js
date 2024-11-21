let nomeTurista = prompt("Qual o seu nome?");
let cidadesVisitadas = [];
let cidade;

do {
  cidade = prompt("Você já visitou alguma cidade? (sim/não)").toLowerCase();
  
  if (cidade === "sim") {
    cidade = prompt("Qual cidade você visitou?");
    cidadesVisitadas.push(cidade);
  } else if (cidade !== "não") {
    alert("Por favor, responda com 'sim' ou 'não'.");
  }
} while (cidade !== "não");

console.log(`Olá, ${nomeTurista}! Você visitou ${cidadesVisitadas.length} cidade(s):`);
if (cidadesVisitadas.length > 0) {
  for (let i = 0; i < cidadesVisitadas.length; i++) {
    console.log(`${i + 1}. ${cidadesVisitadas[i]}`);
  }
} else {
  console.log("Nenhuma cidade foi registrada.");
}
