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
      imSrc: "img/emre-gencer-228223-unsplash.jpg",
      imgAlt: "Photo by Emre Gencer on Unsplash"
    },

    {
      clickCount: 0,
      name: "Mimi",
      imSrc: "img/erik-jan-leusink-144775-unsplash.jpg",
      imgAlt: "Photo by Erik-Jan Leusink on Unsplash"
    },
    {
      clickCount: 0,
      name: "Shmushy",
      imSrc: "img/mikhail-vasilyev-34524-unsplash.jpg",
      imgAlt: "Photo by Mikhail Vasilyev on Unsplash"
    },
    {
      clickCount: 0,
      name: "Grumzy",
      imSrc: "img/mikhail-vasilyev-130018-unsplash.jpg",
      mimgAlt: "Photo by Mikhail Vasilyev on Unsplash"
    }
  ]
};

/* ======= Octopus ======= */

let octopus = {
  init: function () {
    model.currentCat = model.cats[0];
    catListVew.init();
    catView.init();
  },
  getCurrentCat: function () {
    return model.currentCat;
  },
  getCats: function () {
    return model.cats;
  },
  setCurrentCat: function (cat) {
    model.currentCat = cat;
  },
  incrementCatCounter: function () {
    model.currentCat.clickCount++;
    catView.render();
  }
}

/* ======= View ======= */

let catView = {
  init: function () {
    this.catElem = document.getElementById("cat");
    this.catNameElem = document.getElementById("cat-name");
    this.catImageElem = document.getElementById("cat-img");
    this.countElem = document.getElementById("cat-count");

    this.catImageElem.addEventListener("click", function (e) {
      octopus.incrementCatCounter();
    });
    this.render();
  },
  render: function () {
    let currentCat = octopus.getCurrentCat();
    this.countElem.innerText = currentCat.clickCount;
    this.catNameElem.innerText = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  }
};

let catListView = {
  init: function () {
    this.catListElem = document.getElementById("cat-list");
    this.redner();
  },
  render: function () {
    let cats = octopus.getCats();
    this.catListElem.innerHTML = "";

    for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));
            this.catListElem.appendChild(elem);

  }
}
};

octopus.init();

function Cat(catName, url) {
  (this.catName = catName),
    (this.url = url),
    (this.fullcat = function() {
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const img = document.createElement("img");
      h3.innerText = catName;
      img.src = url;
      div.appendChild(h3);
      div.appendChild(img);
      return document.body.appendChild(div);
    });
}
// Photo by Mikhail Vasilyev on Unsplash
// Photo by Emre Gencer on Unsplash
// Photo by Alexander Possingham on Unsplash
// Photo by Erik-Jan Leusink on Unsplash
let cats = new Map([
  ["cat1", "img/alexander-possingham-209285-unsplash.jpg"],
  ["cat2", "img/emre-gencer-228223-unsplash.jpg"],
  ["cat3", "img/erik-jan-leusink-144775-unsplash.jpg"],
  ["cat4", "img/mikhail-vasilyev-34524-unsplash.jpg"],
  ["cat5", "img/mikhail-vasilyev-130018-unsplash.jpg"]
]);

// const cat1 = new Cat("cat1", "https://images.pexels.com/photos/122437/cat-animal-cat-portrait-cat-s-eyes-122437.jpeg");
//
// cats.push(cat1);
//
// const cat2 = new Cat("cat2", "https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
//
// cats.push(cat2);
//
// const cat3 = new Cat("cat3", "https://images.pexels.com/photos/272124/pexels-photo-272124.jpeg");
//
// cats.push(cat3);
//
// const cat4 = new Cat("cat4", "https://images.pexels.com/photos/87413/animal-cat-domestic-eye-87413.jpeg");
//
// cats.push(cat4);
//
// const cat5 = new Cat("cat5", "https://images.pexels.com/photos/357141/pexels-photo-357141.jpeg");
//
// cats.push(cat5);

const menu = document.createElement("div");
menu.classList.add("cat-menu");
document.body.appendChild(menu);
// let count = 0;
const catHero = document.createElement("div");
catHero.classList.add("cat-hero");
document.body.appendChild(catHero);

for (let [key, value] of cats) {
  let count = 0;
  const item = document.createElement("div");
  const cName = document.createElement("h3");
  const clickCount = document.createElement("h3");
  const image = document.createElement("img");
  clickCount.innerText = "Number of clicks: 0";
  item.setAttribute("id", key);
  cName.classList.add("cat-name");
  clickCount.classList.add("click-count");
  cName.innerText = key;
  image.src = value;
  image.classList.add("responsive");

  // item.appendChild(cName);
  item.appendChild(clickCount);
  item.appendChild(image);
  item.addEventListener("click", function(e) {
    count++;
    console.log(e);
    console.log(this);
    // `#${cat1} > h3.click-count`
    //  #cat2 > h3.click-count
    document.querySelector(
      `#${key} > h3.click-count`
    ).innerText = `Number of clicks: ${count}`;
    document.querySelector(".cat-hero").innerText = "";
    document.querySelector(".cat-hero").appendChild(this.cloneNode(true));
  });
  menu.appendChild(item);
}
