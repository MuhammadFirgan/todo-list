const ul = document.querySelector('ul');
const keyword = document.querySelector('.keyword');
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');



container.addEventListener('click', function(e) {
  if(e.target.className == 'fas fa-plus btn') {
    
    if(keyword.value == "") {
      return false;
    } else {
      keyword.removeAttribute('placeholder')
      ul.innerHTML += '<li>'+ keyword.value +'<span class="fas fa-check done"></span><span class="fas fa-trash delete"></span></li>';
      keyword.value = '';
      
      const li = document.querySelectorAll('li')
      li.forEach(function(el) {
  
        el.addEventListener('click', function(e) {
          
          const target = e.target;
          const targetParent = e.target.parentElement;
          
          if(target.className == 'fas fa-trash delete') {
            targetParent.style.display = 'none';
            //stopPropagation();
          } else if(target.className == 'fas fa-check done') {
            targetParent.classList.toggle('coret')
          }
        });
      });
    }
  } 
});

