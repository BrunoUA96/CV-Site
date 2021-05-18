addEventListener('DOMContentLoaded', () => {
   mobileAddTabImage();

   // All Tabs Buttons and Tabs Content
   let tabsNav = document.querySelectorAll('.tabs_nav_item'),
      tabsContent = document.querySelectorAll('.tab_content');

   // On load page first nav & first content active
   tabsNav[0].classList.add('tabs_nav_item--active');
   tabsContent[0].classList.add('tab_content--show');
   document.querySelector('.right_side').classList.add('open-side');

   // Loop all tabsNav
   tabsNav.forEach((tab, index) => {
      iosDevices(tabsContent, index);

      // On tabNav item Click
      tab.addEventListener('click', () => {
         // Loop Content
         tabsContent.forEach((content, contentIndex) => {
            // Remove Active class on all items
            content.classList.remove('tab_content--show');
            tabsNav[contentIndex].classList.remove('tabs_nav_item--active');
            document.querySelector('.right_side').classList.remove('open-side');
         });

         // TimeOut on show Active items
         setTimeout(function () {
            // Add Active class on clicked Items
            tab.classList.add('tabs_nav_item--active');
            tabsContent[index].classList.add('tab_content--show');
            document.querySelector('.right_side').classList.add('open-side');
         }, 500);

         setTimeout(function () {
            if (document.querySelector('.resume_box').classList.contains('tab_content--show')) {
               setTimeout(function () {
                  let progressBar = document.querySelectorAll('.progress_bar');
                  progressBar.forEach((item) => {
                     item.classList.add('action_height');
                  });
               }, 750);
            } else {
               let progressBar = document.querySelectorAll('.progress_bar');
               progressBar.forEach((item) => {
                  item.classList.remove('action_height');
               });
            }
         }, 950);
      });
   });
});

// On mobile Add more one tab for image
function mobileAddTabImage() {
   if (screen.width < 992) {
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
}

// Height site if IOS small devise
function iosDevices(tabsContent, tabId) {
   if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
      tabsContent[tabId].style.height = 'calc(100vh - 195px)';
      tabsContent[tabId].style.minHeight = 'auto';
      document.querySelector('body').style.height = 'calc(100vh - 175px)';
   }
}
