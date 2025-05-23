let herois = [
  ['Arthas', 7321],
  ['Zafira', 9322],
  ['Thalor', 197],
  ['Morgana', 5412],
  ['Draven', 8900],
  ['Selene', 7042],
  ['Kael', 4789],
  ['Lyanna', 1045],
  ['Darius', 6210],
  ['Freya', 11567],
]

for (let i = 0; i < herois.length; i++) {
  let nivelHeroi

  if (herois[i][1] <= 1000) {
    nivelHeroi = 'Ferro'
  } else if (herois[i][1] <= 2000) {
    nivelHeroi = 'Bronze'
  } else if (herois[i][1] <= 5000) {
    nivelHeroi = 'Prata'
  } else if (herois[i][1] <= 7000) {
    nivelHeroi = 'Ouro'
  } else if (herois[i][1] <= 8000) {
    nivelHeroi = 'Platina'
  } else if (herois[i][1] <= 9000) {
    nivelHeroi = 'Ascendente'
  } else if (herois[i][1] <= 10000) {
    nivelHeroi = 'Imortal'
  } else {
    nivelHeroi = 'Radiante'
  }
  console.log(
    'O Herói de nome ' + herois[i][0] + ' está no nível ' + nivelHeroi
  )
}
