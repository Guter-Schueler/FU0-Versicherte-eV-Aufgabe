const loginPage = document.getElementById('login-page');
const mainPage = document.getElementById('main-page');

mockUser = {
  mockUserName: 'Mockel',
  mockUserPassword: 'passwort',
};

// LOGIN PAGE

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = form.elements['username'].value;
  const password = form.elements['password'].value;

  if (
    username === mockUser.mockUserName &&
    password === mockUser.mockUserPassword
  ) {
    loginPage.style.display = 'none';
    mainPage.style.display = 'inherit';
  } else {
    alert('Benutzername oder Passwort ungültig!');
  }
});

// MAIN PAGE

const API_URL = 'https://yg3v4d.deta.dev/subscribers';
const contactForm = document.getElementById('contactForm');
const fetchSubsBtn = document.getElementById('fetchSubs');

async function fetchSubscribers() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
}

fetchSubsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetchSubscribers();
});

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const first_name = document.getElementById('firstName').value;
  const last_name = document.getElementById('lastName').value;
  const birthdate = document.getElementById('birthdate').value;
  const city = document.getElementById('city').value;
  const street_adress = document.getElementById('streetName').value;
  const postal_code = document.getElementById('postalCode').value;
  const noticed = document.getElementById('comment').value;
  const agreeToPrivacyPolicy = document.getElementById(
    'agreeToPrivacyPolicy'
  ).checked;

  if (!agreeToPrivacyPolicy) {
    alert('Please agree to out privacy policy.');
    return;
  }

  const formData = {
    first_name,
    last_name,
    birthdate,
    street_adress,
    postal_code,
    city,
    noticed,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.error(error);
  }
});
