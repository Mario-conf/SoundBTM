
function logout() {
  // Puedes agregar lógica adicional aquí según sea necesario
  // En este ejemplo, simplemente redirigimos a la página de inicio de sesión
  window.location.href = 'index.html';
}

// Array de sonidos con sus rutas
const sounds = [
  { name: 'Sonido 1', path: './src/sound1.mp3' },
  { name: 'Sonido 2', path: './src/sound2.mp3' },
  { name: 'Sonido 3', path: './src/sound3.mp3' },
  { name: 'Sonido 4', path: './src/sound4.mp3' },
  { name: 'Sonido 5', path: './src/sound5.mp3' },

  { name: 'Sonido 6', path: './src/sound6.mp3' },
  { name: 'Sonido 7', path: './src/sound7.mp3' },
  { name: 'Sonido 8', path: './src/sound8.mp3' },
  { name: 'Sonido 9', path: './src/sound9.mp3' },
  { name: 'Sonido 10', path: './src/sound10.mp3' },

  { name: 'Sonido 11', path: './src/sound11.mp3' },
  { name: 'Sonido 12', path: './src/sound12.mp3' },
  { name: 'Sonido 13', path: './src/sound13.mp3' },
  { name: 'Sonido 14', path: './src/sound14.mp3' },
  { name: 'Sonido 15', path: './src/sound15.mp3' },

  { name: 'Sonido 16', path: './src/sound16.mp3' },
  { name: 'Sonido 17', path: './src/sound17.mp3' },
  { name: 'Sonido 18', path: './src/sound18.mp3' },
  { name: 'Sonido 19', path: './src/sound19.mp3' },
  { name: 'Sonido 20', path: './src/sound20.mp3' },

  { name: 'Sonido 21', path: './src/sound21.mp3' },
  { name: 'Sonido 22', path: './src/sound22.mp3' },
  { name: 'Sonido 23', path: './src/sound23.mp3' },
  { name: 'Sonido 24', path: './src/sound24.mp3' },
  { name: 'Sonido 25', path: './src/sound25.mp3' },

  { name: 'Sonido 26', path: './src/sound26.mp3' },
  { name: 'Sonido 27', path: './src/sound27.mp3' },
  { name: 'Sonido 28', path: './src/sound28.mp3' },
  { name: 'Sonido 29', path: './src/sound29.mp3' },
  { name: 'Sonido 30', path: './src/sound30.mp3' },

  { name: 'Sonido 31', path: './src/sound31.mp3' },
  { name: 'Sonido 32', path: './src/sound32.mp3' },
  { name: 'Sonido 33', path: './src/sound33.mp3' },
  { name: 'Sonido 34', path: './src/sound34.mp3' },
  { name: 'Sonido 35', path: './src/sound35.mp3' },

  { name: 'Sonido 36', path: './src/sound36.mp3' },
  { name: 'Sonido 37', path: './src/sound37.mp3' },
  { name: 'Sonido 38', path: './src/sound38.mp3' },
  { name: 'Sonido 39', path: './src/sound39.mp3' },
  { name: 'Sonido 40', path: './src/sound40.mp3' },

  { name: 'Sonido 41', path: './src/sound41.mp3' },
  { name: 'Sonido 42', path: './src/sound42.mp3' },
  { name: 'Sonido 43', path: './src/sound43.mp3' },
  { name: 'Sonido 44', path: './src/sound44.mp3' },
  { name: 'Sonido 45', path: './src/sound45.mp3' },

  { name: 'Sonido 46', path: './src/sound46.mp3' },
  { name: 'Sonido 47', path: './src/sound47.mp3' },
  { name: 'Sonido 48', path: './src/sound48.mp3' },
  { name: 'Sonido 49', path: './src/sound49.mp3' },
  { name: 'Sonido 50', path: './src/sound50.mp3' },
  // Agrega más sonidos según sea necesario
];

// Función para reproducir el sonido
function playSound(path) {
  const audio = new Audio(path);
  audio.play();
}

// Crear botones de sonido dinámicamente
const drumPadContainer = document.querySelector('.drum-pad');

sounds.forEach((sound) => {
  const button = document.createElement('button');
  button.className = 'sound-button';
  button.textContent = sound.name;

  // Asocia el evento de clic a la reproducción del sonido
  button.addEventListener('click', () => {
    playSound(sound.path);
  });

  drumPadContainer.appendChild(button);
});

// Función para reproducir un sonido por su ID
function playSound(soundId) {
  // Detener todos los sonidos antes de reproducir el nuevo
  stopAllSounds();

  // Obtener el elemento de audio por su ID
  const sound = document.getElementById(soundId);

  // Reproducir el sonido
  if (sound) {
    sound.play();
  }
}

// Función para detener todos los sonidos
function stopAllSounds() {
  // Obtener todos los elementos de audio y detenerlos
  const sounds = document.querySelectorAll('audio');
  sounds.forEach(sound => sound.pause());
}
