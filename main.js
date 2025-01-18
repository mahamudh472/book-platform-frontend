

// sideBar Toggle handling
document.getElementById('menuToggle').addEventListener('click', function (event) {
    event.stopPropagation()
    const sideBar = document.getElementById('sidebar')
    const menuItems = document.getElementsByClassName('menu-item')
    const cardGrid = document.getElementById('content')

    if (halfMenu == true) {
        sideBar.classList.toggle('w-64')
        sideBar.classList.toggle('w-18')
        sideBar.classList.toggle('p-4')
        sideBar.classList.toggle('py-3')
        cardGrid.classList.toggle('ml-64')
        cardGrid.classList.toggle('ml-28')

        Array.from(menuItems).forEach(element => {
            element.classList.toggle('flex-col')
            element.classList.toggle('text-xs')
            element.classList.toggle('space-x-3')
            element.querySelector('span').classList.toggle('whitespace-normal')
        });
    }

    if (fullMenuHide == true) {
        sideBar.classList.toggle('left-[-100%]')
    }

})

document.addEventListener('click', (event) => {
    const sideBar = document.getElementById('sidebar')
    if (fullMenuHide==true){
        console.log(!sideBar.classList.contains('left-[-100%]'))
        if (!sideBar.classList.contains('left-[-100%]')) {
            sideBar.classList.add('left-[-100%]');
        }
    }
        
});



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

