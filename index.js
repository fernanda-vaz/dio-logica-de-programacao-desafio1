let herois = [
  ['Arthas', 7321],
  ['Zafira', 14322],
  ['Thalor', 12897],
  ['Morgana', 5412],
  ['Draven', 8900],
  ['Selene', 15000],
  ['Kael', 4789],
  ['Lyanna', 13345],
  ['Darius', 6210],
  ['Freya', 11567],
]

for (let i = 0; i < herois.length; i++) {
  if (herois[i][1] <= 1000) {
    let nivelHeroi = 'Ferro'
    console.log(
      'O Herói de nome ' + herois[i][0] + ' está no nível ' + nivelHeroi
    )
  } else if (herois[i][1] <= 2000) {
    let nivelHeroi = 'Bronze'
    console.log(
      'O Herói de nome ' + herois[i][0] + ' está no nível ' + nivelHeroi
    )
  } else if (herois[i][1] <= 5000) {
    let nivelHeroi = 'Prata'
    console.log(
      'O Herói de nome ' + herois[i][0] + ' está no nível ' + nivelHeroi
    )
  } else if (herois[i][1] <= 7000) {
    let nivelHeroi = 'Ouro'
    console.log(
      'O Herói de nome ' + herois[i][0] + ' está no nível ' + nivelHeroi
    )
  } else if (herois[i][1] <= 8000) {
    let nivelHeroi = 'Platina'
    console.log(
      'O Herói de nome ' + herois[i][0] + ' está no nível ' + nivelHeroi
    )
  } else if (herois[i][1] <= 9000) {
    let nivelHeroi = 'Ascendente'
    console.log(
      'O Herói de nome ' + herois[i][0] + ' está no nível ' + nivelHeroi
    )
  } else if (herois[i][1] <= 10000) {
    let nivelHeroi = 'Imortal'
    console.log(
      'O Herói de nome ' + herois[i][0] + ' está no nível ' + nivelHeroi
    )
  } else {
    let nivelHeroi = 'Radiante'
    console.log(
      'O Herói de nome ' + herois[i][0] + ' está no nível ' + nivelHeroi
    )
  }
}
