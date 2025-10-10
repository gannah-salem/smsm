// Birthday Messages Website JavaScript

// Global variables
let messages = JSON.parse(localStorage.getItem('birthdayMessages')) || [];
let isAdminAuthenticated = false;
const ADMIN_PASSWORD = 'birthday2024';
const CORRECT_PASSWORD = '672025'; // 6-digit passcode
let enteredPassword = '';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializePasswordPage();
    loadSampleMessages();
    displayMessages();
});

function initializePasswordPage() {
    // Keypad event listeners
    document.querySelectorAll('.key[data-number]').forEach(key => {
        key.addEventListener('click', function() {
            const number = this.getAttribute('data-number');
            enterNumber(number);
        });
    });
    
    // Clear button
    document.querySelector('.key[data-action="clear"]').addEventListener('click', function() {
        clearPassword();
    });
    
    // Enter button
    document.querySelector('.key[data-action="enter"]').addEventListener('click', function() {
        checkPassword();
    });
    
    // Hide error message initially
    document.getElementById('errorMessage').style.display = 'none';
}

function enterNumber(number) {
    if (enteredPassword.length < 6) { // Limit to 6 digits
        enteredPassword += number;
        updatePasswordDisplay();
        updateDots();
    }
}

function clearPassword() {
    enteredPassword = '';
    updatePasswordDisplay();
    hideErrorMessage();
    updateDots();
}

function updatePasswordDisplay() {
    const passwordInput = document.getElementById('passwordInput');
    passwordInput.value = '*'.repeat(enteredPassword.length);
}

function updateDots() {
    const dots = document.querySelectorAll('#passcodeDots .dot');
    dots.forEach((d, idx) => {
        if (idx < enteredPassword.length) d.classList.add('filled');
        else d.classList.remove('filled');
    });
}

function checkPassword() {
    console.log('Entered password:', enteredPassword);
    console.log('Correct password:', CORRECT_PASSWORD);
    
    const msg = document.getElementById('passcodeMessage');
    if (enteredPassword.length !== 6) {
        showPasswordErrorMessage();
        clearPassword();
        return;
    }
    if (enteredPassword === CORRECT_PASSWORD) {
        // Correct password - show main page
        msg.style.display = 'block';
        msg.className = 'passcode-message success';
        msg.innerHTML = '<div style="font-weight: 600; color: #2BB673;">proud smsm!</div><div style="color: #666; font-size: 0.9rem;">Welcome! ❤️</div>';
        setTimeout(() => {
            showMainPage();
            msg.style.display = 'none';
        }, 1500);
    } else {
        // Wrong password - show error
        showPasswordErrorMessage();
        clearPassword();
        document.getElementById('errorMessage').style.display = 'block';

    }
}

function showMainPage() {
    document.getElementById('passwordPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
    
    // Add entrance animation
    const mainPage = document.getElementById('mainPage');
    mainPage.style.opacity = '0';
    mainPage.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        mainPage.style.transition = 'all 0.8s ease-out';
        mainPage.style.opacity = '1';
        mainPage.style.transform = 'translateY(0)';
    }, 100);
}

// Navigation functions
function openProfile() {
    // Hide other sections
    document.getElementById('twentyTwoContent').style.display = 'none';
    document.getElementById('readMeContent').style.display = 'none';
    
    // Show profile section
    const mainCard = document.getElementById('mainCard');
    const profileContent = document.getElementById('profileContent');
    
    mainCard.classList.add('shrunk');
    profileContent.style.display = 'block';
}

function openTwentyTwo() {
    // Hide other sections
    document.getElementById('profileContent').style.display = 'none';
    document.getElementById('readMeContent').style.display = 'none';
    
    // Show twenty two section
    const mainCard = document.getElementById('mainCard');
    const twentyTwoContent = document.getElementById('twentyTwoContent');
    
    mainCard.classList.add('shrunk');
    twentyTwoContent.style.display = 'block';
    
    // Hide film strips initially
    const filmStripsContainer = document.getElementById('filmStripsContainer');
    if (filmStripsContainer) {
        filmStripsContainer.style.display = 'none';
    }
}

function showFilmStrip() {
    const filmStripsContainer = document.getElementById('filmStripsContainer');
    if (filmStripsContainer) {
        filmStripsContainer.style.display = 'flex';
        filmStripsContainer.style.animation = 'slideInUp 0.5s ease-out';
    }
}

function openReadMe() {
    // Hide other sections
    document.getElementById('profileContent').style.display = 'none';
    document.getElementById('twentyTwoContent').style.display = 'none';
    
    // Show read me section
    const mainCard = document.getElementById('mainCard');
    const readMeContent = document.getElementById('readMeContent');
    
    mainCard.classList.add('shrunk');
    readMeContent.style.display = 'block';
}

function goBackToMain() {
    // Hide all expanded content
    document.getElementById('profileContent').style.display = 'none';
    document.getElementById('twentyTwoContent').style.display = 'none';
    document.getElementById('readMeContent').style.display = 'none';
    
    // Remove shrunk class from main card
    const mainCard = document.getElementById('mainCard');
    mainCard.classList.remove('shrunk');
}

function openEnvelope() {
    // Add animation when envelope is clicked
    const envelope = document.querySelector('.envelope');
    envelope.style.animation = 'pulse 0.5s ease-in-out';
    
    setTimeout(() => {
        envelope.style.animation = '';
    }, 500);
    
    // Show message in the same page
    const messageDiv = document.createElement('div');
    messageDiv.className = 'envelope-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <h3>💖 Love Letter 💖</h3>
            <p>I hope you reach 22222 smsmty, and that we are together, your place in my heart is great, I can't find words to describe.🩷</p>
            <p>I hope that your presence will last a blessing in my life, and that I wake up every day to check on you, and I don't know how to sleep unless you are at home, and I prefer to be delirious with you all day and worry about my son who was out.</p>
            <p>You are the best who forced me to respect him and talk to you.</p>
            <p>I hope a beautiful memory remains in your mind, and that you always think of me gently, and I always think of you gently.🩷</p>
            <button class="close-message-btn" onclick="closeEnvelopeMessage()">Close</button>
        </div>
    `;
    
    document.querySelector('.envelope-container').appendChild(messageDiv);
}

function closeEnvelopeMessage() {
    const messageDiv = document.querySelector('.envelope-message');
    if (messageDiv) {
        messageDiv.remove();
    }
}

function showPasswordErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.style.display = 'block';
        errorMessage.style.animation = 'slideInRight 0.3s ease-out';
        
        // Hide error message after 3 seconds
        setTimeout(() => {
            hideErrorMessage();
        }, 3000);
    }
}

function hideErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';
}

function displayReadMeMessages() {
    // Personal message is now static in HTML
    // No need to generate dynamic content
}

// Add some sample messages for demonstration (remove this in production)
function loadSampleMessages() {
    if (messages.length === 0) {
        const sampleMessages = [
            {
                id: '1',
                senderName: 'Emma Johnson',
                relation: 'Best Friend',
                messageText: 'Happy Birthday, beautiful! 🎉 I hope your day is filled with endless joy, laughter, and all the love you deserve. You make the world a brighter place just by being in it!',
                mediaFile: null,
                mediaType: null,
                timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
                likes: 8,
                likedBy: ['user1', 'user2', 'user3', 'user4']
            },
            {
                id: '2',
                senderName: 'Michael Chen',
                relation: 'Brother',
                messageText: 'Another year older, another year more amazing! Wishing you the happiest of birthdays, sis! 🎂✨ You continue to inspire me every single day.',
                mediaFile: null,
                mediaType: null,
                timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
                likes: 12,
                likedBy: ['user1', 'user5', 'user6', 'user7']
            },
            {
                id: '3',
                senderName: 'Sophie Davis',
                relation: 'Colleague',
                messageText: 'Happy Birthday! 🎈 May this new year bring you endless opportunities, success in everything you do, and all the happiness your heart can hold!',
                mediaFile: null,
                mediaType: null,
                timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
                likes: 5,
                likedBy: ['user2', 'user8']
            }
        ];
        
        messages = sampleMessages;
        localStorage.setItem('birthdayMessages', JSON.stringify(messages));
    }
}

// Utility Functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
        return 'Just now';
    } else if (diffInHours < 24) {
        return `${Math.floor(diffInHours)} hours ago`;
    } else if (diffInHours < 48) {
        return 'Yesterday';
    } else {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

function getUserIdentifier() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = 'user_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('userId', userId);
    }
    return userId;
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to message cards
    const messageCards = document.querySelectorAll('.message-card');
    messageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            function showPasswordErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    const msg = document.getElementById('passcodeMessage');

    // أخفي رسالة النجاح لو كانت ظاهرة
    msg.style.display = 'none';

    // أظهر رسالة الخطأ
    errorMessage.style.display = 'block';
    errorMessage.style.opacity = 1;

    // بعد 1.5 ثانية اخفيها تاني (اختياري)
    setTimeout(() => {
        errorMessage.style.opacity = 0;
        errorMessage.style.display = 'none';
    }, 1500);
    document.addEventListener('click', function() {
    const video = document.getElementById('bg-video');
    if (video.paused) {
        video.play();
    }
});

}



        });
    });
});
