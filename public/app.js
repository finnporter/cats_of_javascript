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
  addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
  addCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
};

window.addEventListener('load', app);