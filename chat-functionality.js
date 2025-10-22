const picker = document.getElementById('emojiPicker');
const emojiButton = document.getElementById('emojiButton');
const input = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messageArea = document.getElementById('messages');

const sectionsNavbar = document.querySelector('.main-sidebar');
const sectionsNavbarMobile = document.querySelector('.main-sidebar-mobile');

const sectionsNavLinks = document.querySelectorAll('.nav-pills .nav-link');
let currentlySelectedNavLink = document.querySelectorAll('.nav-pills .nav-link.active');
const homeSection = sectionsNavLinks[0];
const homeSectionMobile = sectionsNavLinks[5];

const chatSidebar = document.querySelector('.chat-sidebar');
const chatHeaders = document.querySelectorAll('.list-group-item');
let currentlySelectedChatHeader = document.querySelector('.list-group-item.active');

const chatContainer = document.querySelector('.chat-container');

emojiButton.addEventListener('click', () => {
    picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
});

picker.addEventListener('emoji-click', event => {
    input.value += event.detail.unicode;
    picker.style.display = 'none';
});

sendButton.addEventListener('click', () => {
    const newText = document.createElement('p');
    newText.textContent = input.value
    messageArea.append(newText);
    input.value = ''
});

function navLinkClicked(navLink) {   
    sectionsNavLinks.forEach(navLink => {
        navLink.classList.remove('active');
        navLink.removeAttribute('aria-current');
    });
    navLink.classList.add('active')
    navLink.setAttribute("aria-current", "page");
    currentlySelectedNavLink = navLink;
}

sectionsNavLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => navLinkClicked(navLink));
});

homeSection.addEventListener('click', () => {
    chatSidebar.style.display = 'flex';

    chatContainer.style.display = 'none';
})

homeSectionMobile.addEventListener('click', () => {
    chatSidebar.style.display = 'flex';

    chatContainer.style.display = 'none';

    sectionsNavbar.style.display = 'flex';
    sectionsNavbarMobile.style.display = 'none';
})

// make it so that on mobile ver, the user clicks a chat and the message container shows up
// also on desktop, so that the placeholder text showing the most recent chat, shows up in the message container

function mobileView() {

    if (chatSidebar.style.display === 'flex') {
        chatContainer.style.display = 'none';
    }

    chatHeaders.forEach(chatHeader => {
        chatHeader.addEventListener('click', () => {
            chatSidebar.style.display = 'none';

            chatContainer.style.display = 'flex';
            homeSection.classList.remove('active');

            sectionsNavbar.style.display = 'none';
            sectionsNavbarMobile.style.display = 'flex';
        });
    });
}

function desktopView() {
    sectionsNavbar.style.display = 'flex';
    sectionsNavbarMobile.style.display = 'none';

    function chatHeaderClicked(chatHeader) {
        chatHeaders.forEach(chatHeader => {
            chatHeader.classList.remove('active');
            chatHeader.removeAttribute('aria-current');
        });
        chatSidebar.style.display = 'flex';
        chatHeader.classList.add('active');
        chatHeader.setAttribute("aria-current", "true");
        currentlySelectedChatHeader = chatHeader;
        
        sectionsNavbar.style.display = 'flex';
        sectionsNavbarMobile.style.display = 'none';
    }

    chatHeaders.forEach((chatHeader) => {
        chatHeader.addEventListener('click', () => chatHeaderClicked(chatHeader));
    });
}

window.addEventListener('resize', handleViewChange);
handleViewChange()

function handleViewChange() {
    if (window.innerWidth < 768) {
        mobileView();
    } else {
        desktopView();
        chatSidebar.style.display = 'flex';
        homeSection.classList.remove('active');
    }
}
