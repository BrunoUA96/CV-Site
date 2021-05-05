console.log('Olá');
addEventListener('DOMContentLoaded', () => {
   let tabsNav = document.querySelectorAll('.tabs_nav_item'),
      tabsContent = document.querySelectorAll('.tab_content');
   tabsContent[0].classList.add('show');

   tabsNav.forEach((tab, index) => {
      tab.addEventListener('click', () => {
         tabsContent.forEach((content, contentIndex) => {
            content.classList.remove('show');
            tabsNav[contentIndex].classList.remove('tabs_nav_item--active');
         });

         tab.classList.add('tabs_nav_item--active');
         tabsContent[index].classList.add('show');
      });
   });
});
