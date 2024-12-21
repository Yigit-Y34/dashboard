const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        menuItems.forEach(i => i.classList.remove('bg-blue-700'));

        item.classList.add('bg-blue-700');

        const content = document.getElementById('content');
        const pageName = item.textContent.trim();
        content.innerHTML = `
            <h1 class="text-3xl font-bold mb-4">${pageName}</h1>
            <p class="text-gray-700 text-lg">You are now viewing the ${pageName} page.</p>
        `;
    });
});