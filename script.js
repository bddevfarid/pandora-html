// Select all the items
const items = document.querySelectorAll('.bdt-item');

// Add event listeners to each item
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Remove the 'active' class from all items
        items.forEach(i => i.classList.remove('active'));

        // Add 'active' class to the currently hovered item
        item.classList.add('active');

    });
});
