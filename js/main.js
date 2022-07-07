const tabItem = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab Content Item Function
function selectItem() {
    removeBorder();
    removeShow();
    // Add border
    this.classList.add('tab-border');
    // // Grab Content Item
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // // Add show class
    tabContentItem.classList.add('show');
}


function removeBorder() {
    tabItem.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// Listen for user click on tabs
tabItem.forEach(item => item.addEventListener('click', selectItem));



