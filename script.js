const searchInput = document.querySelector('input');
const searchIcon = document.getElementById('search-icon');

searchInput.addEventListener('input', () => {

if (searchInput.value.length > 0) {
    searchIcon.style.display = 'none';
} else {
     searchIcon.style.display = 'block';
    }

});