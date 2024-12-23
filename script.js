const searchInput = document.querySelector('input');
const searchIcon = document.getElementById('search-icon');

searchInput.addEventListener('input', () => {

if (searchInput.value.length > 0) {
    searchIcon.style.display = 'none';
} else {
     searchIcon.style.display = 'block';
    }

});

const heartIcons = document.querySelectorAll('.fa-heart');

heartIcons.forEach((heart) => {
    heart.addEventListener('click', () => {
         let liked = heart.classList.toggle('liked');
        
        if(liked){
            alert("Thank you for liking this project!");
        } else {
            alert("Sorry you did not like this project! I'll try better next time!");
        }
    });
});