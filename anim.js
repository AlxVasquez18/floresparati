// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tan pronto yo te vi", time: 5.5 },
  { text: "No pude descubrir", time: 11.5 },
  { text: "El amor a primera vista no funciona en mi", time: 15 },
  { text: "Despues de amarte comprendi", time: 22 },
  { text: "Que no estaría tan mal", time: 26.5 },
  { text: "Probar tu otra mitad", time: 31.5},
  { text: "No me importo si arruinariamos", time: 35.5},
  { text: "Nuestra amistad", time: 37.5 },
  { text: "No me importó ya que mas dá", time: 42 },
  // coro
  { text: "Eramos tan buenos amigos hasta hoy...", time: 45.5 },
  { text: "Que yo probé tu desempeño en el amor", time: 48 },
  { text: "Me aproveche de que habiamos tomado tanto", time: 51},
  { text: "Te fuiste dejando y te agarré", time: 54 },
  { text: "A pesar de saber que estaba todo mal", time: 57 },
  { text: "Lo continuamos hasta juntos terminar", time: 59},
  { text: "Cuando caímos en lo que estaba pasando", time: 62 },
  { text: "Te seguí besando y fue", time: 65 },
  { text: "Solo tú <3", time: 67 },
  { text: "no necesito más", time:  69},
  { text: "Te adoraría lo que dura la eternidad", time:  70},
  { text: "Debes ser perfecta para", time: 72.5 },
  { text: "Perfecta para", time: 74 },
  { text: "Perfecta para mi", time: 76 },
  { text: "Mi amor<3", time: 77.5},
  { text: "¿Cómo fue que de papel cambié?", time: 79 },
  { text: "Eras mi amiga y ahora eres mi mujer", time: 81 },
  { text: "Debe ser perfectamente", time: 83 },
  { text: "Exactamente", time: 84.8 },
  { text: "Lo que yo siempre soñe", time: 87 },
  // segunda estrofa
  { text: "El tiempo que pasó", time: 93 },
  { text: "Resultó aún mejor", time: 99 },
  { text: "Nos conocíamos de antes y sabíamos", time: 103 },
  { text: "Lo que queríamos los dos", time: 110 },
  { text: "Entonces el amor, uh-uh-uh", time: 113 },
  { text: "Nos tiene de rehén", time: 119 },
  { text: "Seré tu eterno enamorado y te aseguro que", time: 121.5 },
  { text: "Todas las noches, te amaré", time: 130 },
  // Segundo coro
  { text: "Eramos tan buenos amigos hasta hoy...", time: 133 },
  { text: "Que yo probé tu desempeño en el amor", time: 135.5 },
  { text: "Me aproveche de que habiamos tomado tanto", time: 138 },
  { text: "Te fuiste dejando y te agarre", time: 141 },
  { text: "A pesar de saber que estaba todo mal", time: 143.5 },
  { text: "Lo continuamos hasta juntos terminar", time: 146 },
  { text: "Cuando caímos en lo que estaba pasando", time: 150 },
  { text: "Te seguí besando y fue", time: 153 },
  { text: "Solo tú <3", time: 155 },
  { text: "no necesito más", time: 156 },
  { text: "Te adoraría lo que dura la eternidad", time: 157.5 },
  { text: "Debes ser perfecta para", time: 159 },
  { text: "Perfecta para", time: 161 },
  { text: "Perfecta para mi", time: 163 },
  { text: "Mi amor<3", time: 164.5 },
  { text: "¿Cómo fue que de papel cambié?", time: 166 },
  { text: "Eras mi amiga y ahora eres mi mujer", time: 168 },
  { text: "Debe ser perfectamente", time: 170 },
  { text: "Exactamente", time: 172.5 },
  { text: "Lo que yo siempre soñe", time: 175 },
// extras
  { text: "Llegaste hasta aquí?", time: 179 },
  { text: "Espero que te haya gustado <3", time: 184 },
  { text: "Te amo mi niña", time: 187 },
  { text: "No tienes idea cuanto te amo", time: 190 },
  { text: "Me obsesione contigo", time: 194 },
  { text: "Ya no quiero vender tus organos", time: 198 },
  { text: "XD", time: 202 },
  { text: "Te quieres casar conmigo?", time: 206 },
  { text: "Te hare café por las mañanas", time: 210},
  { text: "Te digo algo?", time: 214 },
  { text: "Tu siempre serás:", time: 217 },
  { text: "Lo que yo siempre soñe", time: 219.5 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
