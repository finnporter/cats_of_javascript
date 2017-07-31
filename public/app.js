var app = function() {

  var addCat = function(name, food, url) {
    var catUl = createCat();
    var catNameLi = createCatNameLi(name);
    var catFoodLi = createCatFoodLi(food);
    var catImgLi = createCatImgLi(url);

    appendElements(cats, catUl, catNameLi, catFoodLi, catImgLi);
  };

  var createCat = function() {
    var catUl = document.createElement('ul');
    catUl.classList.add('cat');
    return catUl;
  };

  var createCatNameLi = function(name) {
    var catNameLi = document.createElement('li');
    catNameLi.innerText = "Name: " + name;
    return catNameLi;
  };

  var createCatFoodLi = function(food) {
    var catFoodLi = document.createElement('li');
    catFoodLi.innerText = "Favourite food: " + food;
    return catFoodLi;
  };

  var createCatImgLi = function(url) {
    var catImgLi = document.createElement('li');
    var img = document.createElement('img');
    img.src = url;
    img.width = "500";
    catImgLi.appendChild(img);
    return catImgLi;
  };

  var appendElements = function(cats, catUl, catNameLi, catFoodLi, catImgLi) {
    catUl.appendChild(catNameLi);
    catUl.appendChild(catFoodLi);
    catUl.appendChild(catImgLi);
    var cats = document.getElementById('cats')
    cats.appendChild(catUl); 
  };

  addCat("Witches", "Toast", "https://static.tumblr.com/f5a863b930ea6f3e1df6b538f8954c48/irceql1/RbCn2eqsj/tumblr_static_tumblr-cat-pics.jpg");
};

window.addEventListener('load', app);