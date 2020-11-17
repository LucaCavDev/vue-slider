// facciamo funzionare i bottoni next e prev
// e mettiamo in pagina i pallini

//lavoriamo su un unico vue ( div con id app)
var app = new Vue({
  el: "#app",
  data: {
    pic: [
      "img/image1.jpg",
      "img/image2.jpg",
      "img/image3.jpg",
      "img/image4.jpg",
    ],
    indexPic: 0  //serve per fare un'ancora intorno al quale lavorare
  },
  methods: {
    nextPic: function () {
      // attivando la funzione(con @click in html sulla freccia avanti) l'indice assegnato alle immagini (che di default è 0) aumenta di uno, cambiando l'immagine in quella successiva
      this.indexPic = this.indexPic + 1;
      //se però questo indice supera la lunghezza dell'arrey pic, ovvero prova a passare all'immagine 5 in questo array da quattro
      if(this.indexPic > (this.pic.length - 1)){
        //allora si torna all'immagine di partenza, con indice0
        this.indexPic = 0;
      }
      console.log('right', this.indexPic);
    },

    prevPic: function () {
      //la funzione diminuisce l'indice al click di uno, prendendo dunque l'immagine precedente
      this.indexPic = this.indexPic - 1;
      //se però questo indice vuole trasformare l'indice minore presente nell'array, che è 0
      if (this.indexPic < 0){
        //in tal caso l'indice viene eguagliato alla lunghezza dell'array -1 ( dato che l'array è lungo 4 ma gli indici partono da 0) prendendo l'ultima immagine dell'array
        this.indexPic = this.pic.length - 1;
      }
      console.log('left', this.indexPic);
    }
  },
  // mounted mi permette di inserire laddeventlistener a vue
  mounted() {
    window.addEventListener("keydown", function(e) {
      if (e.keyCode === 37) {app.prevPic()};
      if (e.keyCode === 39) {app.nextPic()};
    });
  }
})
