// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// Function to remove the 'active' class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

// Add click event listeners to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove the 'active' class from all items and add it to the clicked item
        changeActiveItem();
        item.classList.add('active');

        // Notifications popup logic
        const notificationsPopup = document.querySelector('.notifications-popup');
        const notificationCount = document.querySelector('#notifications .notification-count');

        if (item.id !== 'notifications') {
            // Hide the notifications popup if the clicked item is not 'notifications'
            notificationsPopup.style.display = 'none';
        } else {
            // Show the notifications popup and hide the notification count
            notificationsPopup.style.display = 'block';
            notificationCount.style.display = 'none';
        }
    });
});
