 barger = document.querySelector('.barger');

logo = document.querySelector('.navbar')
 navBar = document.querySelector('.mid-nav');
 searchBar = document.querySelector('.left-nav');

barger.addEventListener('click', function(){
navBar.classList.toggle("v-class");
searchBar.classList.toggle("v-class");
logo.classList.toggle("h-class");
})