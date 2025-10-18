document.addEventListener('DOMContentLoaded', () => {
    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });

    // Form handling
    const form = document.getElementById('leadForm');
    const result = document.getElementById('formResult');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        result.textContent = '';

        const formData = new FormData(form);
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const phone = formData.get('phone') || '';
        const message = formData.get('message') || '';

        if (!name || !email || !phone || !message) {
            result.innerHTML = '<div class="error">Por favor, preencha todos os campos obrigatórios.</div>';
            return;
        }

        // Simulate form submission (in a real scenario, you'd send to a server)
        result.innerHTML = '<div class="success">Obrigado pelo seu interesse! Entraremos em contato em até 24h para agendar uma consultoria gratuita.</div>';
        form.reset();

        // In a real implementation, you would send the data to your server
        // Example with fetch:
        /*
        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    city: formData.get('city'),
                    projectType: formData.get('project-type'),
                    message: formData.get('message')
                })
            });
            
            if (response.ok) {
                result.innerHTML = '<div class="success">Obrigado pelo seu interesse! Entraremos em contato em até 24h para agendar uma consultoria gratuita.</div>';
                form.reset();
            } else {
                throw new Error('Erro no envio');
            }
        } catch (error) {
            result.innerHTML = '<div class="error">Houve um erro ao enviar sua mensagem. Tente novamente ou entre em contato por telefone.</div>';
        }
        */
    });
});