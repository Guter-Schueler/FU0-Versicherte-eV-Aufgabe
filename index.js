const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = form.elements['username'].value;
  const password = form.elements['password'].value;

  if (username === 'mockUser' && password === 'pw') {
    alert('Login erfolgreich!');
    // Hier können Sie Ihre gewünschte Aktion ausführen, z.B. zur Startseite weiterleiten
  } else {
    alert('Benutzername oder Passwort ungültig!');
  }
});
