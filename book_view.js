const coverContainer = document.getElementById('cover-container');
const readerContainer = document.getElementById('reader-container');
const readNowBtn = document.getElementById('read-now-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageNumberInput = document.getElementById('page-number');
const pageText = document.getElementById('page-text');
const ratioSelect = document.getElementById('ratio');
const totalPages = 10; // Example total pages
let currentPage = 1;

// Example book pages content
const pagesContent = Array.from({ length: totalPages }, (_, i) => `This is the content of page ${i + 1}.`);

// Show the reader when "Read Now" is clicked
readNowBtn.addEventListener('click', () => {
    coverContainer.classList.add('hidden');
    readerContainer.classList.remove('hidden');
    loadPage(currentPage);
});

// Load the page content
function loadPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    pageNumberInput.value = currentPage;
    pageText.innerText = pagesContent[page - 1];
    // Add a flip effect
    pageText.classList.add('transform', 'rotate-y-180');
    setTimeout(() => pageText.classList.remove('transform', 'rotate-y-180'), 300);
}

// Change the text size based on ratio selection
ratioSelect.addEventListener('change', () => {
    pageText.className = `transition-transform duration-500 ease-in-out bg-gray-100 p-4 rounded-lg ${ratioSelect.value}`;
});

// Handle next and previous buttons
nextBtn.addEventListener('click', () => loadPage(currentPage + 1));
prevBtn.addEventListener('click', () => loadPage(currentPage - 1));

// Handle direct page input
pageNumberInput.addEventListener('change', () => {
    const page = parseInt(pageNumberInput.value);
    loadPage(page);
});