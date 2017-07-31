var app = function() {

  var ul = document.createElement('ul');
  ul.classList.add('cat');

  var nameli = document.createElement('li');
  nameli.innerText = 'Name: Witches';

  var foodli = document.createElement('li');
  foodli.innerText = 'Favourite Food: Toast';

  var imgli = document.createElement('li');

  var img = document.createElement('img');
  img.src = "http://static.tumblr.com/f5a863b930ea6f3e1df6b538f8954c48/irceql1/RbCn2eqsj/tumblr_static_tumblr-cat-pics.jpg";
  img.width = "500";

  ul.appendChild(nameli);
  ul.appendChild(foodli);
  ul.appendChild(imgli);
  imgli.appendChild(img);

  var cats = document.querySelector('#cats');
  cats.appendChild(ul);
}

window.addEventListener('load', app);