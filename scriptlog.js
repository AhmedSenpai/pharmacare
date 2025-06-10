document.addEventListener('DOMContentLoaded', function() {
    // Form switching functionality
    const switchFormLinks = document.querySelectorAll('.switch-form');
    const authForms = document.querySelectorAll('.auth-form');
    
    switchFormLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetFormId = this.getAttribute('data-target');
            const currentForm = document.querySelector('.auth-form.active');
            const targetForm = document.getElementById(targetFormId);
            
            if (currentForm && targetForm && currentForm !== targetForm) {
                // Animate out current form
                currentForm.classList.add('slide-out-left');
                currentForm.classList.remove('active');
                
                // Animate in target form after a delay
                setTimeout(() => {
                    targetForm.classList.add('active', 'slide-in-right');
                    currentForm.classList.remove('slide-out-left');
                    targetForm.classList.remove('slide-in-right');
                }, 250);
            }
        });
    });

    // Password visibility toggle
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Form validation and submission
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const button = this.querySelector('.btn-primary');
        const buttonText = button.querySelector('span');
        const buttonIcon = button.querySelector('i');
        
        // Add loading state
        button.style.opacity = '0.7';
        button.style.pointerEvents = 'none';
        buttonText.textContent = 'Connexion...';
        buttonIcon.className = 'fas fa-spinner fa-spin';
        
        // Simulate API call
        setTimeout(() => {
            // Reset button state
            button.style.opacity = '1';
            button.style.pointerEvents = 'auto';
            buttonText.textContent = 'Se connecter';
            buttonIcon.className = 'fas fa-arrow-right';
            
            // Show success message (you can replace this with actual logic)
            showNotification('Connexion réussie !', 'success');
        }, 2000);
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = this.querySelector('input[type="password"]').value;
        const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
        
        if (password !== confirmPassword) {
            showNotification('Les mots de passe ne correspondent pas.', 'error');
            return;
        }
        
        const button = this.querySelector('.btn-primary');
        const buttonText = button.querySelector('span');
        const buttonIcon = button.querySelector('i');
        
        // Add loading state
        button.style.opacity = '0.7';
        button.style.pointerEvents = 'none';
        buttonText.textContent = 'Création...';
        buttonIcon.className = 'fas fa-spinner fa-spin';
        
        // Simulate API call
        setTimeout(() => {
            // Reset button state
            button.style.opacity = '1';
            button.style.pointerEvents = 'auto';
            buttonText.textContent = 'Créer mon compte';
            buttonIcon.className = 'fas fa-arrow-right';
            
            // Show success message
            showNotification('Compte créé avec succès !', 'success');
        }, 2000);
    });

    // Input animation on focus
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    // Floating labels effect
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.style.paddingTop = '20px';
                this.style.paddingBottom = '12px';
            } else {
                this.style.paddingTop = '16px';
                this.style.paddingBottom = '16px';
            }
        });
    });
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : '#f56565'};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add dynamic pill animation
function createRandomPill() {
    const pill = document.createElement('div');
    pill.className = 'pill';
    
    const width = Math.random() * 60 + 30;
    const height = width * 0.3;
    const leftPos = Math.random() * 100;
    const animationDuration = Math.random() * 10 + 10;
    
    pill.style.cssText = `
        width: ${width}px;
        height: ${height}px;
        left: ${leftPos}%;
        top: 100%;
        animation: float ${animationDuration}s linear;
        background: rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05});
    `;
    
    document.querySelector('.floating-pills').appendChild(pill);
    
    // Remove pill after animation
    setTimeout(() => {
        if (pill.parentElement) {
            pill.parentElement.removeChild(pill);
        }
    }, animationDuration * 1000);
}

// Create new pills periodically
setInterval(createRandomPill, 3000);

