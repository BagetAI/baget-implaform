document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('waitlist-form');
    const formMessage = document.getElementById('form-message');
    const dbId = '3a76e5e0-ac80-4ac8-ad3d-fe827f8ea526';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button');
        const originalBtnText = submitBtn.innerText;
        
        submitBtn.disabled = true;
        submitBtn.innerText = 'Processing...';

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            practice_name: document.getElementById('practice_name').value,
            role: document.getElementById('role').value
        };

        try {
            const response = await fetch(`https://baget.ai/api/public/databases/${dbId}/rows`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: formData })
            });

            if (response.ok) {
                formMessage.innerText = 'Successfully joined! We will be in touch soon.';
                formMessage.classList.remove('hidden', 'text-red-600');
                formMessage.classList.add('text-green-600');
                form.reset();
                submitBtn.innerText = 'Welcome Aboard';
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            formMessage.innerText = 'Something went wrong. Please try again or contact us.';
            formMessage.classList.remove('hidden', 'text-green-600');
            formMessage.classList.add('text-red-600');
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
        }
    });

    // Simple scroll reveal
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
