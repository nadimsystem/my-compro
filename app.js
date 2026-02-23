const { createApp } = Vue

createApp({
    data() {
        return {
            hero: {
                name: 'A. Syauli Nadima, S.Kom',
                headline: 'Nadima Ahmad',
                subheadline: 'Software Engineer, UI/UX Designer, <br class="lg:block max-md:hidden"> Digital Strategist, Problem Solver.',
                floatingImage: 'images/fotosaya.png'
            },
            statsSection: {
                bgImage: 'images/bg-kelasbaru.png',
                title: 'Sebuah kelas baru.',
                subtitle: 'UI/UX Designer & Engineer dengan <br> total 8 tahun pengalaman.'
            },
            stats: [
                { value: '3+', label: 'Tahun Desain UI/UX', description: 'Termasuk peran kepemimpinan sebagai VP of Product dan mentor UI/UX.', bgColor: 'bg-blue-600', textColor: 'text-blue-100' },
                { value: '5+', label: 'Tahun Development', description: 'Aktif terlibat dalam pengembangan fullstack sejak akhir 2019.', bgColor: 'bg-gray-900', textColor: 'text-gray-400' },
                { value: '820+', label: 'Anggota Komunitas', description: 'Mendirikan komunitas IT "Forum Studi Informatika UPI YPTK" sejak 2019.', bgColor: 'bg-purple-600', textColor: 'text-purple-200' }
            ],
            scrollImages: [
                'images/nadima01.png', 'images/nadima02.png', 'images/nadima03.png', 'images/nadima04.png', 'images/nadima05.png',
                'images/nadima06.png', 'images/nadima07.png', 'images/nadima08.png', 'images/nadima09.png', 'images/nadima10.png'
            ],
            skills: [
                {
                    title: 'Design & UX',
                    icon: 'bi-palette-fill',
                    iconColor: 'text-blue-500',
                    items: ['UI/UX Design', 'Design Thinking', 'Journey Mapping', 'UX Research & Wireframing', 'Figma & Adobe XD', 'Adobe Creative Suite', 'Blender 3D']
                },
                {
                    title: 'Development',
                    icon: 'bi-code-slash',
                    iconColor: 'text-green-500',
                    items: ['Vue.js & Flutter', 'JavaScript, HTML & CSS', 'Bootstrap 5 & Tailwind', 'Laravel & PHP Native', 'MySQL, MariaDB, MongoDB']
                },
                {
                    title: 'Tools & Business',
                    icon: 'bi-briefcase-fill',
                    iconColor: 'text-purple-500',
                    items: ['CRM', 'Kanban', 'KPI Design', 'Brand Strategy', 'Digital Marketing', 'Cross-functional Collaboration']
                },
            ],
            experiences: [
                {
                    period: 'Okt 2025 – Jan 2026 (Contract)',
                    company: 'Bildung Mit Wirkung <br> (BMW e.V.)',
                    role: 'Fullstack Developer (Remote), Jerman',
                    description: ['Membangun dan mengembangkan website profil dan sistem fundraising internasional dengan integrasi pembayaran.']
                },
                {
                    period: 'Nov 2025 – Sekarang (Full-time)',
                    company: 'PT Fajar Wisata Langgeng <br> (Sutan Raya)',
                    role: 'Fullstack Developer, Indonesia',
                    description: ['Mengembangkan website company profile perusahaan.', 'Membangun sistem internal untuk pengelolaan data, pemesanan tiket, dan bank data perusahaan.']
                },
                {
                    period: 'Jul 2025 – Okt 2025 (Contract)',
                    company: 'UPI YPTK Padang',
                    role: 'Frontend Developer (Remote), Indonesia',
                    description: ['Merancang dan mengembangkan antarmuka aplikasi Lembaga Penjamin Mutu dan e-Office kampus.', 'Berkolaborasi dengan tim backend untuk integrasi API dan dashboard administrasi internal.']
                },
                {
                    period: 'Jun 2023 – Des 2024 (Full Time)',
                    company: 'PT Minang Teknologi Indonesia',
                    role: 'Vice President of Product, Indonesia',
                    description: ['Berperan sebagai Lead (PM) dalam desain dan riset UI/UX untuk proyek digital, termasuk super app \'Rumah Gadang UIN IB\' dan aplikasi MVP katering.', 'Mendesain ulang kurikulum bootcamp Co-mentor menjadi tiga fokus: Product (UI/UX), Front End (Flutter), dan Backend (Python & Go).', 'Bertindak sebagai mentor di kelas product design bootcamp.', 'Mengembangkan strategi produk dan konten media sosial.']
                },
                {
                    period: 'Okt 2023 – Apr 2025 (Full Time)',
                    company: 'Bolu MalinKundang',
                    role: 'Product dev, Brand Strategist & Tech Development, Indonesia',
                    description: ['Mendesain dan mengembangkan sistem digital internal (POS, absensi geo-tagged, manajemen inventaris, pelacakan B2B).', 'Melakukan riset UX (Design Thinking) untuk desain sistem dan kemasan.', 'Mengimplementasikan Kanban, KPI, dan sistem onboarding.', 'Memimpin rebranding "Uda Lin" menjadi "Uni Lin".', 'Mengamankan kemitraan strategis dengan Transmart dan Suzuya.', 'Mengintegrasikan E-commerce dan mengelola CRM & iklan digital.']
                }
            ],
            otherExperiences: [
                { company: 'PT Koding Pro Indonesia', role: 'COO - Full Time (Okt 2022 – Mei 2023)', description: 'Menyelesaikan 21 kelas pemrograman (81% dari total) dan membangun frontend modular (PHP, JS).' },
                { company: 'Nadima System', role: 'Freelance (Jan 2020 – Sekarang)', description: 'Mengelola proyek end-to-end (riset, UI/UX, dev) untuk beragam klien.' },
                { company: 'CV Sobat Karya Persada', role: 'Digital Marketing Director - Contract (Okt 2021 – Okt 2022)', description: 'Membuat desain sosmed, foto produk, dan video promosi.' },
                { company: 'PT. Semen Padang (Classy Corp)', role: '2D Animator & Designer - Contract (Jun 2023 – Jan 2024)', description: 'Memproduksi video animasi 2D edukasi mitigasi bencana (proyek BNPB).' },
                { company: 'Furgetech Startup', role: 'Junior UI/UX Designer - Full Time (Des 2017 – Agu 2018)', description: 'Mendesain MVP aplikasi e-Qurban (Adobe XD) dan melakukan riset UX awal.' }
            ],
            education: {
                degree: 'Sarjana Komputer (S.Kom)',
                major: 'Teknik Informatika',
                university: 'Universitas Putra Indonesia YPTK Padang (2016 – 2022)',
                award: 'Runner-Up - Hackathon, Politeknik Negeri Padang (2019)'
            },
            certifications: [
                '<b>UI/UX Design</b> – Talent Hub, Kementerian Ketenagakerjaan RI (2021)',
                '<b>Programming with Dart</b> – Dicoding Indonesia (2023)',
                '<b>Speaker: Artificial Intelligence</b> – Universitas Andalas (2023)',
                '<b>Speaker: Flutter Front-End Workshop</b> – Universitas Andalas (2024)',
                '<b>Speaker: Seminar Entrepreneurship</b> – Politeknik Aisyiyah Sumbar (2025)'
            ],
            community: [
                { role: 'Founder', organization: 'Forum Studi Informatika UPI YPTK (2019)', description: 'Mendirikan komunitas belajar teknologi dengan 800+ anggota, mengorganisir kelas coding dan workshop rutin.' },
                { role: 'Humas Wilayah Sumbar', organization: 'Masyarakat Relawan Indonesia (MRI) (2018)', description: 'Mengelola komunikasi eksternal dan mengkoordinasikan kolaborasi kemanusiaan di tingkat provinsi.' },
                { role: 'Koordinator Wilayah 2', organization: 'Permikomnas (2017-2019)', description: 'Mewakili 5 provinsi (Sumbar, Riau, Kepri, Jambi, Bengkulu) dalam koordinasi kegiatan mahasiswa informatika nasional.' }
            ],
            contact: {
                email: 'ahmadsyaulinadima@gmail.com',
                phoneRaw: '+6282282425862',
                phoneFormatted: '+62 822 8242 5862',
                location: 'Padang, Sumatera Barat, Indonesia',
                linkedin: 'https://linkedin.com/in/nadima-ahmad',
                website: 'https://nadima-ahmad.my.id/'
            }
        }
    },
    computed: {
        displayImages() {
            // Duplicate images 4 times to ensure we have enough content for scrolling
            return [...this.scrollImages, ...this.scrollImages, ...this.scrollImages, ...this.scrollImages];
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
