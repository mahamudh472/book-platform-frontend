
// Left side menus 
document.getElementById("menuToggle").addEventListener('click', ()=>{
    // initializing the components
    const sidebar = document.getElementById('sidebar')
    const sidebarImg = document.getElementById('sidebar_profile_img')
    const mainContainer = document.querySelector('main')
    const sidebarItems = document.querySelector('#sidebarItems')
    
    // sidebar and content box sizing
    sidebar.classList.toggle('w-64')
    sidebar.classList.toggle('w-12')
    sidebar.classList.toggle('p-4')
    sidebar.classList.toggle('p-0')


    mainContainer.classList.toggle('ml-64')
    mainContainer.classList.toggle('ml-16')

    // sidebar profile image sizing
    sidebarImg.classList.toggle('h-24')
    sidebarImg.classList.toggle('w-24')
    sidebarImg.classList.toggle('h-10')
    sidebarImg.classList.toggle('w-10')

    // sidebar image bottom text toggle 
    sidebarImg.parentElement.querySelectorAll('div').forEach(element => {
       element.classList.toggle('hidden') 
    })
    // sidebar menu text toggle 
    sidebarItems.querySelectorAll('li > span').forEach(element => {
        element.classList.toggle('hidden')
    })
    // sidebar menu icons resize 
    sidebarItems.querySelectorAll('li > i').forEach(element => {
        element.classList.toggle('w-6')
    })
    sidebarItems.querySelectorAll('li').forEach(element => {
        element.classList.toggle('justify-center')
    })


})



// --------------------------------------------------
// ----------------- Dropdown menu-------------------
// --------------------------------------------------

// Handle dropdown toggle
document.querySelectorAll('.dropdownButton').forEach(button => {
    console.log(button)
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the event from propagating to the document
        const menu = this.nextElementSibling; // Get the corresponding dropdown menu
        menu.classList.toggle('hidden');
        // Close other open dropdowns
        document.querySelectorAll('.dropdownMenu').forEach(otherMenu => {
            if (otherMenu !== menu) {
                otherMenu.classList.add('hidden');
            }
        });
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdownMenu').forEach(menu => {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    });
  });