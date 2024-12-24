

// sideBar Toggle handling
document.getElementById('menuToggle').addEventListener('click', function(){
    const sideBar = document.getElementById('sidebar')
    const menuItems = document.getElementsByClassName('menu-item')
    const cardGrid = document.getElementById('card-grid')
    sideBar.classList.toggle('w-64')
    sideBar.classList.toggle('w-18')
    sideBar.classList.toggle('p-4')
    sideBar.classList.toggle('py-3')
    cardGrid.classList.toggle('ml-64')
    cardGrid.classList.toggle('ml-24')

    console.log(menuItems)
    Array.from(menuItems).forEach(element => {
        element.classList.toggle('flex-col')
        element.classList.toggle('text-xs')
        element.classList.toggle('space-x-3')
        

    });
})



// Get the elements
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Add click event listener to the button
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden'); // Show/Hide the menu
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});
