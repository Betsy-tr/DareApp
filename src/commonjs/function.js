// Générer un nombre aléatoire entre min et max

const getRandomInt = (min , max) => {

    min = Math.ceil(min) ;
    max = Math.floor(max) ;
  
    return Math.floor(Math.random()*(max - min)) + min
  
  }