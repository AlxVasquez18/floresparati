// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tan pronto yo te vi", time: 6 },
  { text: "No pude descubrir", time: 12 },
  { text: "El amor a primera vista no funciona en mi", time: 16 },
  { text: "Despues de amarte comprendi", time: 23 },
  { text: "Que no estaría tan mal", time: 27 },
  { text: "Probar tu otra mitad", time: 41 },
  { text: "No me importo si arruinariamos", time: 47 },
  { text: "Nuestra amistad", time: 54 },
  { text: "No me importó ya que mas dá", time: 59 },
  // coro
  { text: "Eramos tan buenos amigos hasta hoy...", time: 67 },
  { text: "Que yo probé tu desempeño en el amor", time: 72 },
  { text: "Me aproveche de que habiamos tomado tanto", time: 78 },
  { text: "Te fuiste dejando", time: 83 },
  { text: "Y te agarré", time: 91 },
  { text: "A pesar de saber que estaba todo mal", time: 97 },
  { text: "Lo continuamos hasta juntos terminar", time: 104 },
  { text: "Cuando caímos en lo que estaba pasando", time: 108 },
  { text: "Te seguí besando y fue", time: 144 },
  { text: "Solo tú <3", time: 148 },
  { text: "no necesito más", time: 153 },
  { text: "Te adoraría lo que dura la eternidad", time: 158 },
  { text: "Debes ser perfecta para", time: 164 },
  { text: "Perfecta para", time: 169 },
  { text: "Perfecta para mi", time: 176 },
  { text: "Mi amor<3", time: 183 },
  { text: "¿Cómo fue que de papel cambié?", time: 188 },
  { text: "Eras mi amiga y ahora eres mi mujer", time: 140 },
  { text: "Debe ser perfectamente", time: 78 },
  { text: "Exactamente", time: 83 },
  { text: "Lo que yo siempre soñe", time: 91 },
  // segunda estrofa
  { text: "El tiempo que pasó", time: 97 },
  { text: "Resultó aún mejor", time: 104 },
  { text: "Nos conocíamos de antes y sabíamos", time: 108 },
  { text: "Lo que queríamos los dos", time: 144 },
  { text: "Entonces el amor, uh-uh-uh", time: 153 },
  { text: "Nos tiene de rehén", time: 158 },
  { text: "Seré tu eterno enamorado y te aseguro que", time: 164 },
  { text: "Todas las noches, te amaré", time: 169 },
  // Segundo coro
  { text: "Eramos tan buenos amigos hasta hoy...", time: 67 },
  { text: "Que yo probé tu desempeño en el amor", time: 72 },
  { text: "Me aproveche de que habiamos tomado tanto", time: 78 },
  { text: "Te fuiste dejando", time: 83 },
  { text: "Y te agarré", time: 91 },
  { text: "A pesar de saber que estaba todo mal", time: 97 },
  { text: "Lo continuamos hasta juntos terminar", time: 104 },
  { text: "Cuando caímos en lo que estaba pasando", time: 108 },
  { text: "Te seguí besando y fue", time: 144 },
  { text: "Solo tú <3", time: 148 },
  { text: "no necesito más", time: 153 },
  { text: "Te adoraría lo que dura la eternidad", time: 158 },
  { text: "Debes ser perfecta para", time: 164 },
  { text: "Perfecta para", time: 169 },
  { text: "Perfecta para mi", time: 176 },
  { text: "Mi amor<3", time: 183 },
  { text: "¿Cómo fue que de papel cambié?", time: 188 },
  { text: "Eras mi amiga y ahora eres mi mujer", time: 140 },
  { text: "Debe ser perfectamente", time: 78 },
  { text: "Exactamente", time: 83 },
  { text: "Lo que yo siempre soñe", time: 91 },
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
