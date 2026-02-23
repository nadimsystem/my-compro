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

    }
}).mount('#app')
