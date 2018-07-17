'use strict';
/* ======= Model ======= */
let model = {
  currentCat: null,
  cats: [
    {
      clickCount: 0,
      name: "Smoky",
      imgSrc: "img/alexander-possingham-209285-unsplash.jpg",
      imgAlt: "Photo by Alexander Possingham on Unsplash"
    },
    {
      clickCount: 0,
      name: "Mumo",
      imgSrc: "img/emre-gencer-228223-unsplash.jpg",
      imgAlt: "Photo by Emre Gencer on Unsplash"
    },

    {
      clickCount: 0,
      name: "Mimi",
      imgSrc: "img/erik-jan-leusink-144775-unsplash.jpg",
      imgAlt: "Photo by Erik-Jan Leusink on Unsplash"
    },
    {
      clickCount: 0,
      name: "Shmushy",
      imgSrc: "img/mikhail-vasilyev-34524-unsplash.jpg",
      imgAlt: "Photo by Mikhail Vasilyev on Unsplash"
    },
    {
      clickCount: 0,
      name: "Grumzy",
      imgSrc: "img/mikhail-vasilyev-130018-unsplash.jpg",
      mimgAlt: "Photo by Mikhail Vasilyev on Unsplash"
    }
  ]
};

/* ======= Octopus ======= */

let octopus = {
  init: function() {
    model.currentCat = model.cats[0];

    catListView.init();
    catView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  }
};

/* ======= View ======= */

let catView = {
  init: function() {
    this.catElem = document.getElementById("cat-hero");
    this.catNameElem = document.getElementById("cat-name");
    this.catImageElem = document.getElementById("cat-img");
    this.countElem = document.getElementById("cat-count");

    this.catImageElem.addEventListener("click", function() {
      octopus.incrementCounter();
    });

    this.render();
  },

  render: function() {
    let currentCat = octopus.getCurrentCat();
    // console.log(currentCat);
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    // console.log(this.catImageElem);
    // console.log(currentCat.imgSrc);
    this.catImageElem.src = currentCat.imgSrc;
  }
};

let catListView = {
  init: function() {
    this.catListElem = document.getElementById("cat-menu");

    this.render();
  },

  render: function() {
    let cat;
    let option;
    let cats = octopus.getCats();

    this.catListElem.innerHTML = "";

    for (let i = 0; i < cats.length; i++) {
      cat = cats[i];

      option = document.createElement("option");
      option.value = cat.name;
      option.text = cat.name;

      this.catListElem.appendChild(option);
    }

    this.catListElem.addEventListener( "change", function(event) {
      const value = event.target.value
      const obj = model.cats.forEach(function (element) {
        if (element.name === value) {
          return element
        }
      })
          octopus.setCurrentCat(obj);
          catView.render();
        }
    );
    // this.catListElem.addEventListener(
    //   "change",
    //   (function(catCopy) {
    //     return function() {
    //       octopus.setCurrentCat(catCopy);
    //       catView.render();
    //     };
    //   })(cat)
    // );
  }
};

octopus.init();
