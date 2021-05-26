addEventListener('DOMContentLoaded', () => {
   // On mobile Add more one tab for image
   if (screen.width < 992) {
      mobileAddTabImage();
   }

   // -- All elements

   // All Tabs Buttons and Tabs Content
   const tabsNav = document.querySelectorAll('.tabs_nav_item'),
      tabsContent = document.querySelectorAll('.tab_content'),
      rightSideSite = document.querySelector('.right_side'),
      resumeSlide = document.querySelector('.resume_box'),
      progressBarResume = document.querySelectorAll('.progress_bar');

   // Show Right side
   addClassElement(rightSideSite, 'add', 'open-side');

   // On load page first nav & first content active
   addClassElement(tabsNav[0], 'add', 'tabs_nav_item--active');
   addClassElement(tabsContent[0], 'add', 'tab_content--show');

   // Loop all tabsNav
   tabsNav.forEach((tab, index) => {
      // On tabNav item Click
      tab.addEventListener('click', () => {
         // Loop Content
         tabsContent.forEach((content, contentIndex) => {
            // Remove Active class on all items
            addClassElement(content, 'remove', 'tab_content--show');
            addClassElement(tabsNav[contentIndex], 'remove', 'tabs_nav_item--active');
            addClassElement(rightSideSite, 'remove', 'open-side');
         });

         // TimeOut on show Active items
         setTimeout(function () {
            // Add Active class on clicked Items
            addClassElement(tab, 'add', 'tabs_nav_item--active');
            addClassElement(tabsContent[index], 'add', 'tab_content--show');
            addClassElement(rightSideSite, 'add', 'open-side');
         }, 500);

         setTimeout(function () {
            if (resumeSlide.classList.contains('tab_content--show')) {
               setTimeout(function () {
                  progressBarResume.forEach((item) => {
                     addClassElement(item, 'add', 'action_height');
                  });
               }, 750);
            } else {
               progressBarResume.forEach((item) => {
                  addClassElement(item, 'remove', 'action_height');
               });
            }
         }, 950);
      });
   });
});

// On mobile Add more one tab for image
function mobileAddTabImage() {
   addClassElement(document.querySelector('.img_box_prifile'), 'add', 'tab_content');

   // Create Div
   const mobileTabImg = document.createElement('div');
   mobileTabImg.classList.add('item', 'tabs_nav_item');

   // Add Icon for tabItem
   mobileTabImg.innerHTML =
      '<i class="fa fa-picture-o" aria-hidden="true"></i><span class="tabs_nav_item-text"> Info </span>';

   // Get a link to the element before which we want to insert
   const firstElementTabHTML = document.getElementsByClassName('tabs_nav_item')[0];

   // add element before first
   firstElementTabHTML.parentNode.insertBefore(mobileTabImg, firstElementTabHTML);
}

// Add or remove aclass
function addClassElement(element, operation, classElement) {
   if (operation == 'add') {
      element.classList.add(classElement);
   } else {
      element.classList.remove(classElement);
   }
}

const appHeight = () => {
   const doc = document.documentElement;
   doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};
window.addEventListener('resize', appHeight);
appHeight();
