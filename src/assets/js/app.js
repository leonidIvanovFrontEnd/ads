const headerService = document.querySelector('.header__service'),
      burger = document.querySelector('.burger'),
      header = document.querySelector('.header'),
      headerLanguage = document.querySelector('.header__language'),
      body = document.querySelector('body'),
      closeDrop = document.querySelector('.close-drop'),
      headerListDrop = document.querySelector('.header__list-drop');
      

headerService.addEventListener('click', function(e){
  headerListDrop.classList.toggle('active');
  this.classList.toggle('active')
});
closeDrop.addEventListener('click', function(){
  headerListDrop.classList.remove('active');
});
burger.addEventListener('click', function(){
  headerListDrop.classList.remove('active');
  headerService.classList.remove('active');
  header.classList.toggle('active');
  this.classList.toggle('active');
  body.classList.toggle('fixed'); 
});

headerLanguage.addEventListener('click', function(){
  this.classList.toggle('active');
})
window.onscroll = function showHeader(){  
  if (window.pageYOffset > 500){
    body.classList.add('header__fixed');
  } else if (window.pageYOffset < 500){
    body.classList.remove('header__fixed');
  }  
}
