const { createApp } = Vue

createApp({
    data() {
        return {
            // Data has been moved to index.html directly for performance and static structuring.
        }
    },
    mounted() {
        // Block right click
        document.addEventListener('contextmenu', event => {
            event.preventDefault();
            console.log("hayo mau ngapain");
        });

        // Javascript-based infinite scroll
        const container = this.$refs.scrollContainer;
        if (container) {
            let scrollAmount = 0;
            const speed = 1; 

            setInterval(() => {
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 1;
                }
            }, 20);
        }

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        setTimeout(() => {
            document.querySelectorAll('.scroll-animate').forEach((el) => {
                observer.observe(el);
            });
        }, 100); // Small delay to ensure DOM is ready

        // Mouse follow effect for cursor glow (Desktop Only)
        if (window.matchMedia("(min-width: 768px)").matches) {
            const cursorGlow = document.getElementById('cursor-glow');
            if (cursorGlow) {
                document.addEventListener('mousemove', (e) => {
                    cursorGlow.style.left = e.clientX + 'px';
                    cursorGlow.style.top = e.clientY + 'px';
                    cursorGlow.style.opacity = '1';
                });

                document.addEventListener('mouseleave', () => {
                     cursorGlow.style.opacity = '0';
                });
            }

            // 3D Tilt Effect for Desktop Cards
            document.querySelectorAll('.tilt-card').forEach(card => {
                const inner = card.querySelector('.transform-gpu');
                if(!inner) return;

                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
                    const rotateY = ((x - centerX) / centerX) * 10;
                    
                    inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });

                card.addEventListener('mouseleave', () => {
                    inner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                });
            });
        }
    }
}).mount('#app')
