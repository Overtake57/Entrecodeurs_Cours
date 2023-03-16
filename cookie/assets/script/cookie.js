// 1. Ecrire un système de gestion de cookies en POO

class Cookie {
   constructor(name, value, days) {
    this.name = name;
    this.value = value;
    this.days = days;
  }
}

class CookiesService {
     // create();
    create(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
}
    // read();
    // update();
    // delete();
