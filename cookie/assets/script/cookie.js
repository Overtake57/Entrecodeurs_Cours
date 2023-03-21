// Définition de la classe Cookie
class Cookie {
    constructor(name, value, expiration) {
      this.name = name;
      this.value = value;
      this.expiration = expiration;
    }
  }
  
  // Définition de la classe CookiesService
  class CookiesService {
    // Méthode pour créer un nouveau cookie
    create(name, value, expiration) {
      const cookie = new Cookie(name, value, expiration);
      const serializedCookie = JSON.stringify(cookie);
      document.cookie = `cookie_${name}=${serializedCookie}`;
    }
  
    // Méthode pour lire un cookie existant
    read(name) {
      const cookies = this.list();
      const cookie = cookies.find(c => c.name === name);
      if (cookie) {
        return cookie.value;
      } else {
        return null;
      }
    }
  
    // Méthode pour récupérer tous les cookies stockés
    list() {
      const cookies = document.cookie.split(';')
        .map(c => c.trim())
        .filter(c => c.startsWith('cookie_'))
        .map(c => {
          const serializedCookie = c.substring(7);
          return JSON.parse(serializedCookie);
        });
      return cookies;
    }
  
    // Méthode pour supprimer un cookie existant
    delete(name) {
      document.cookie = `cookie_${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  }
  
  // Instanciation de la classe CookiesService
  const cookieService = new CookiesService();
  
  // Création d'un cookie au clic sur le bouton "Créer un cookie"
  const createCookieButton = document.getElementById('createCookie');
  createCookieButton.addEventListener('click', () => {
    const cookieNameInput = document.getElementById('cookieName');
    const cookieValueInput = document.getElementById('cookieValue');
    const cookieExpirationInput = document.getElementById('cookieExpiration');
    const cookieName = cookieNameInput.value;
    const cookieValue = cookieValueInput.value;
    const cookieExpiration = cookieExpirationInput.value;
    cookieService.create(cookieName, cookieValue, cookieExpiration);
    cookieNameInput.value = '';
    cookieValueInput.value = '';
    cookieExpirationInput.value = '';
    showCookieList();
  });
  
  // Suppression d'un cookie au clic sur le bouton "Supprimer"
  const cookieListElement = document.getElementById('cookieList');
  cookieListElement.addEventListener('click', event => {
    const deleteButton = event.target.closest('.delete');
    if (deleteButton) {
      const cookieName = deleteButton.dataset.name;
      cookieService.delete(cookieName);
      showCookieList();
    }
  });
  
  // Affichage de la liste des cookies stockés
  function showCookieList() {
    const cookies = cookieService.list();
    const cookieListHtml = cookies.map(cookie => {
      const date = new Date(cookie.expiration);
      const dateString = date.toLocaleString();
      return `<li>${cookie.name}: ${cookie.value} (exp: ${dateString}) <button class="delete" data-name="${cookie.name}">Supprimer</button></li>`;
    }).join('');
    cookieListElement.innerHTML = cookieListHtml;
  }
  