// document.body.innerText = "";

function Cat(catName, url) {
  this.catName = catName,
    this.url = url,
    this.fullcat = function () {
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const img = document.createElement("img");
      h3.innerText = catName
      img.src = url;
      div.appendChild(h3);
      div.appendChild(img);
      return document.body.appendChild(div);
    }
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
document.body.appendChild(menu);
menu.classList.add("cat-menu");
// let count = 0;

for (let [key, value] of cats) {
  let count = 0;
  const item = document.createElement("div");
  const cName = document.createElement("h3");
  const clickCount = document.createElement("h3")
  const image = document.createElement("img");
  clickCount.innerText = "Number of clicks: 0"
  item.setAttribute("id", key)
  cName.classList.add("cat-name");
  clickCount.classList.add("click-count");
  cName.innerText = key;
  image.src = value;
  image.classList.add("responsive");

  item.appendChild(cName);
  item.appendChild(clickCount);
  item.appendChild(image);
  item.addEventListener("click", function (e) {
    count ++;
    console.log(e);
    console.log(this);
    // `#${cat1} > h3.click-count`
    //  #cat2 > h3.click-count
    document.querySelector(`#${key} > h3.click-count`).innerText = `Number of clicks: ${count}`
  })
  menu.appendChild(item);
}
