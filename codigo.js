let comienzo = alert(
  "Quiz de fútbol. Inserte letras A, B o C dependiendo de las opciones"
);
let calificacion = 0;

function pregunta() {
  let pregunta1 = prompt(
    "¿En que equipo juega actualmente Lionel Messi? A-Barcelona, B-Liverpool, C-PSG"
  );
  if (pregunta1 == "C" || pregunta1 == "c") {
    calificacion = calificacion + 1;
  }
  let pregunta2 = prompt(
    "¿Que equipo gano más Champions League? A-Real Madrid, B-Bayern Munich, C-Juventus"
  );
  if (pregunta2 == "A" || pregunta2 == "a") {
    calificacion = calificacion + 1;
  }
  let pregunta3 = prompt(
    "¿Cuantos munidales ha ganado Argentina? A-1, B-3, C-2"
  );
  if (pregunta3 == "C" || pregunta3 == "c") {
    calificacion = calificacion + 1;
  }
  let pregunta4 = prompt(
    "¿Que equipo argentino ha ganado más copas libertadores? A-Boca Juniors, B-Independiente, C-River Plate"
  );
  if (pregunta4 == "B" || pregunta4 == "b") {
    calificacion = calificacion + 1;
  }
  let pregunta5 = prompt(
    "¿Cuantos balones de oro ha ganado Cristiano Ronaldo? A-3, B-5, C-2"
  );
  if (pregunta5 == "B" || pregunta5 == "b") {
    calificacion = calificacion + 1;
  }
  let pregunta6 = prompt(
    "¿Cual fue la selección que gano el primer mundial de fútbol? A-Argentina, B-Uruguay, C-Brasil"
  );
  if (pregunta6 == "B" || pregunta6 == "b") {
    calificacion = calificacion + 1;
  }
  let pregunta7 = prompt(
    "¿En que club dio sus primeros pasos Lionel Messi? A-Barcelona, B-River Plate, C-Newell's Old Boys"
  );
  if (pregunta7 == "C" || pregunta7 == "c") {
    calificacion = calificacion + 1;
  }
  let pregunta8 = prompt(
    "¿En que país se jugo el mundial de 1986 donde Argentina salió campeón? A-México, B-España, C-Brasil"
  );
  if (pregunta8 == "A" || pregunta8 == "a") {
    calificacion = calificacion + 1;
  }
  let pregunta9 = prompt(
    "¿Qué dos equipos protagonizaron el llamado “Maracanazo”? A-Argentina y Brasil, B-Uruguay y Brasil, C-Colombia y Brasil"
  );
  if (pregunta9 == "B" || pregunta9 == "b") {
    calificacion = calificacion + 1;
  }
  let pregunta10 = prompt(
    "¿Qué animal fue el escogido para ilustrar la mascota del mundial de Rusia (2018)? A-Lobo, B-Oso, C-Alce"
  );
  if (pregunta10 == "A" || pregunta10 == "a") {
    calificacion = calificacion + 1;
  }
  alert("Tu calificacion total es de " + calificacion + " puntos sobre 10");
}
pregunta();
