// Función para autenticar al usuario
function loginUser() {
    const loginIdentifier = document.getElementById('loginIdentifier').value;
    const password = document.getElementById('loginPassword').value;
  
    // Lógica de autenticación
    const users = getStoredUsers();
    const authenticatedUser = users.find(
      user => (user.username === loginIdentifier || user.email === loginIdentifier) && user.password === password
    );
   if (authenticatedUser) {
      // Redirigir a la aplicación principal después del inicio de sesión
      window.location.href = 'app.html';
    } else {
      alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
function getStoredUsers() {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
}

// Función para guardar usuarios en el almacenamiento local
function storeUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Función para validar el registro
function isValidRegistration(username, email, password, birthdate) {
    // Implementa tu lógica de validación aquí
    // En este ejemplo, simplemente verifica que todos los campos estén completos
    return username && email && password && birthdate;
}

// Función para registrar al usuario
function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthdate = document.getElementById('birthdate').value;
  
    // Lógica para registrar al usuario
    if (isValidRegistration(username, email, password, birthdate)) {
      try {
        // Obtener usuarios almacenados
        const users = getStoredUsers();
  
        // Verificar si el usuario ya existe
        const userExists = users.some(user => user.username === username || user.email === email);
  
        if (!userExists) {
          // Agregar el nuevo usuario
          users.push({ username, email, password, birthdate });
  
          // Guardar la lista actualizada de usuarios
          storeUsers(users);
  
          // Redirigir a la página de inicio de sesión después del registro
          window.location.href = 'index.html';
        } else {
          alert('El usuario ya existe. Por favor, elige otro nombre de usuario o correo electrónico.');
        }
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        alert('Ocurrió un error. Por favor, inténtalo de nuevo.');
      }
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
  
// Resto del código según sea necesario...
