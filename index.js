const popupMenu = document.getElementById('MobilePopupMenu');
const menuTrigger = document.querySelector('.menu-img');
const menuItems = document.querySelectorAll('.menu_items');
const closeIcon = document.querySelector('.Xmenu img');

function closePopupMenu() {
  popupMenu.classList.remove('active');
}

menuTrigger.addEventListener('click', function() {
  popupMenu.classList.toggle('active');
});

closeIcon.addEventListener('click', closePopupMenu);

menuItems.forEach(function(item) {
  item.addEventListener('click', closePopupMenu);
});



function togglePopupMenu() {
  popupMenu.classList.toggle('active');
}

// jQuery example
$('#MobilePopupMenu').click(function() {
  $(this).toggleClass('active');
});

