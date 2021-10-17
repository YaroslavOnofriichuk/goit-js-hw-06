const itemEl = document.querySelectorAll('.item');
const titleEl = document.querySelectorAll('h2');

console.log("Number of categories:", itemEl.length);

titleEl.forEach(element => {
    console.log("Category:", element.textContent);

    console.log("Elements:", element.nextElementSibling.children.length);
} );

