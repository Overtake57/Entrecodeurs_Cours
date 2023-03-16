const cookiesService = new CookiesService();

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const cookieName = document.getElementById('cookie-name').value;
  const cookieValue = document.getElementById('cookie-value').value;
  const cookieDays = document.getElementById('cookie-days').value;
  cookiesService.create(cookieName, cookieValue, cookieDays);
});