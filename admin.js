
// Left side menus 
document.getElementById("menuToggle").addEventListener('click', () => {
    // initializing the components
    const sidebar = document.getElementById('sidebar')
    const sidebarImg = document.getElementById('sidebar_profile_img')
    const mainContainer = document.querySelector('main')
    const sidebarItems = document.querySelector('#sidebarItems')
    const backText = document.getElementById('back_text')

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
    sidebarImg.classList.toggle('m-auto')

    if(backText){
        backText.classList.toggle('hidden')
    }

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



// active menu 
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");

    // Get the current page from the URL
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

    menuItems.forEach(item => {
        const page = item.getAttribute("data-page");

        if (page === currentPage) {
            item.classList.add("bg-gray-100", "font-bold");
            item.querySelector("span").classList.add("text-gray-700");
        } else {
            item.classList.remove("bg-gray-100", "font-bold");
            item.querySelector("span").classList.remove("text-gray-700");
        }
    });
});



// Get the context of the canvas
const ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
const myChart = new Chart(ctx, {
    type: 'line', // Chart type: bar, line, pie, doughnut, etc.
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'], // X-axis labels
        datasets: [{
            label: 'Views', // Chart legend
            data: [10, 20, 5, 7, 9, 8, 0, 20, 19, 6, 12, 5], // Data points
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1 // Border width for the bars
        }]
    },
    options: {
        responsive: true, // Makes the chart responsive
        scales: {
            y: {
                beginAtZero: true // Starts y-axis at zero
            }
        }
    }
});