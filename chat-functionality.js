const picker = document.getElementById('emojiPicker');
const emojiButton = document.getElementById('emojiButton');
const input = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messageArea = document.getElementById('messages');


const sectionsNavLinks = document.querySelectorAll('.nav-pills .nav-link');
let currentlySelectedNavLink = document.querySelectorAll('.nav-pills .nav-link.active');
const homeSection = sectionsNavLinks[0];

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

// make it so that on mobile ver, the user clicks a chat and the message container shows up
// also on desktop, so that the placeholder text showing the most recent chat, shows up in the message container

function mobileView() {
    chatHeaders.forEach(chatHeader => {
        chatHeader.addEventListener('click', () => {
            chatSidebar.style.display = 'none';

            chatContainer.style.display = 'flex';
            homeSection.classList.remove('active');
        });
    });
}

function desktopView() {
    function chatHeaderClicked(chatHeader) {
        chatHeaders.forEach(chatHeader => {
            chatHeader.classList.remove('active');
            chatHeader.removeAttribute('aria-current');
        });
        chatSidebar.style.display = 'flex';
        chatHeader.classList.add('active');
        chatHeader.setAttribute("aria-current", "true");
        currentlySelectedChatHeader = chatHeader;
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
        chatSidebar.style.display = '';
        homeSection.classList.remove('active');
    }
}
