addEventListener('DOMContentLoaded', () => {
   let tabsNav = document.querySelectorAll('.tabs_nav_item'),
      tabsContent = document.querySelectorAll('.tab_content');

   // On load page first nav & first content active
   tabsNav[0].classList.add('tabs_nav_item--active');
   tabsContent[0].classList.add('tab_content--show');

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
