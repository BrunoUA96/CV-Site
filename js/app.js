addEventListener('DOMContentLoaded', () => {
   if (screen.width < 780) {
      document.querySelector('.img_box_prifile').classList.add('tab_content');

      let mobileTabImg = document.createElement('div');
      mobileTabImg.classList.add('item', 'tabs_nav_item');
      mobileTabImg.innerHTML =
         '<i class="fa fa-picture-o" aria-hidden="true"></i><span class="tabs_nav_item-text"> Info </span>';

      // Получаем ссылку на элемент, перед которым мы хотим вставить sp1
      let firstElementTabHTML = document.getElementsByClassName('tabs_nav_item')[0];
      //Получаем ссылку на родителя sp2
      let parentDiv = firstElementTabHTML.parentNode;

      // Вставляем sp1 перед sp2
      parentDiv.insertBefore(mobileTabImg, firstElementTabHTML);
   }

   let tabsNav = document.querySelectorAll('.tabs_nav_item'),
      tabsContent = document.querySelectorAll('.tab_content');
   console.log(tabsNav);

   // On load page first nav & first content active
   tabsNav[0].classList.add('tabs_nav_item--active');
   document.querySelectorAll('.tab_content')[0].classList.add('tab_content--show');
   // Loop all tabsNav
   tabsNav.forEach((tab, index) => {
      // On tabNav item Click
      tab.addEventListener('click', () => {
         // Loop Content
         tabsContent.forEach((content, contentIndex) => {
            // Remove Active class on all items
            content.classList.remove('tab_content--show');
            tabsNav[contentIndex].classList.remove('tabs_nav_item--active');
         });

         // TimeOut on show Active items
         setTimeout(function () {
            // Add Active class on clicked Items
            tab.classList.add('tabs_nav_item--active');
            tabsContent[index].classList.add('tab_content--show');
         }, 500);
      });
   });
});
