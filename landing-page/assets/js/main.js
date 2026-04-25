// ============================================
// INITIALIZATION
// ============================================

let currentFilter = 'all';
let currentCarouselIndex = 0;
let currentGalleryIndex = 0;
let selectedClub = null;
let currentPage = 1;
let clubsPerPage = window.innerWidth <= 480 ? 3 : 9; // 3x3 grid or 3x1 on mobile

let clubsData = [];
let reviewsData = [];
let tipsData = [];

// Load JSON data
async function loadData() {
    try {
        const [clubsRes, reviewsRes, tipsRes] = await Promise.all([
            fetch('assets/data/clubs.json'),
            fetch('assets/data/reviews.json'),
            fetch('assets/data/tips.json')
        ]);
        
        clubsData = await clubsRes.json();
        reviewsData = await reviewsRes.json();
        tipsData = await tipsRes.json();
        
        filterClubs('all');
        renderTopClubs();
        renderReviews();
        renderAccordion();
        setupEventListeners();
        setupBackToTopButton();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderClubs(category, page = 1) {
    const clubsGrid = document.getElementById('clubsGrid');
    clubsGrid.innerHTML = '';

    let filteredClubs = clubsData;
    if (category !== 'all') {
        filteredClubs = clubsData.filter(club => club.category && club.category.includes(category));
    }

    // Pagination
    const totalPages = Math.ceil(filteredClubs.length / clubsPerPage);
    const startIndex = (page - 1) * clubsPerPage;
    const endIndex = startIndex + clubsPerPage;
    const paginatedClubs = filteredClubs.slice(startIndex, endIndex);

    paginatedClubs.forEach(club => {
        const clubCard = createClubCard(club);
        clubsGrid.appendChild(clubCard);
    });

    // Render pagination controls
    renderPaginationControls(filteredClubs.length, page);
}

function createClubCard(club) {
    const card = document.createElement('a');
    card.href = 'javascript:void(0)';
    card.className = 'club-card';
    card.onclick = (e) => {
        e.preventDefault();
        openClubModal(club.id);
    };

    // Truncate club name if too long
    const maxNameLength = 30;
    const displayName = club.club_name.length > maxNameLength 
        ? club.club_name.substring(0, maxNameLength) + '...' 
        : club.club_name;
        
    const firstTag = (club.tags && club.tags.length > 0) ? club.tags[0] : '';

    card.innerHTML = `
        <img src="${club.bg_image}" alt="${club.club_name}" class="club-card-image">
        <div class="club-card-body">
            <h3 class="club-card-title" title="${club.club_name}">${displayName}</h3>
            <div class="club-card-footer">
                <span class="club-card-tag">#${firstTag}</span>
            </div>
        </div>
    `;

    return card;
}

function renderPaginationControls(totalClubs, currentPage) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(totalClubs / clubsPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');

    pageNumbers.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => {
            currentPage = i;
            filterClubs(currentFilter, i);
        };
        pageNumbers.appendChild(pageBtn);
    }

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            filterClubs(currentFilter, currentPage);
        }
    };
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            filterClubs(currentFilter, currentPage);
        }
    };
}

function renderTopClubs() {
    const topClubs = clubsData.filter(club => club.category && club.category.includes('Nổi bật')).slice(0, 6);
    const carouselTrack = document.getElementById('carouselTrack');
    carouselTrack.innerHTML = '';

    topClubs.forEach(club => {
        const card = document.createElement('div');
        card.className = 'top-club-card';
        card.innerHTML = `
            <img src="${club.bg_image}" alt="${club.club_name}" class="top-club-card-image">
            <div class="top-club-card-overlay">
                <div class="top-club-card-badge">⭐ Featured</div>
                <h3 class="top-club-card-title">${club.club_name}</h3>
            </div>
        `;
        card.onclick = () => openClubModal(club.id);
        carouselTrack.appendChild(card);
    });
}

function renderReviews() {
    const reviewsMasonry = document.getElementById('reviewsMasonry');
    reviewsMasonry.innerHTML = '';

    reviewsData.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.style.cursor = 'pointer';

        const stars = '⭐'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        card.innerHTML = `
            <div class="review-header">
                <div class="review-avatar">😊</div>
                <div class="review-author">
                    <div class="review-name">${review.author}</div>
                    <div class="review-rating">${stars}</div>
                </div>
            </div>
            <div class="review-text">${review.text}</div>
        `;

        // Click to open review modal
        card.addEventListener('click', () => openReviewModal(review.id));

        reviewsMasonry.appendChild(card);
    });
}

function renderAccordion() {
    const accordionContainer = document.querySelector('.accordion-container');
    accordionContainer.innerHTML = '';

    tipsData.forEach((tip, index) => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion(this)">
                <span>${tip.title}</span>
                <span class="accordion-icon">+</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-content-text">${tip.content.split('\n').map(line => `<p>${line}</p>`).join('')}</div>
            </div>
        `;
        accordionContainer.appendChild(item);
    });
}

// ============================================
// FILTER & SEARCH FUNCTIONS
// ============================================

function filterClubs(category, page = 1) {
    currentFilter = category;
    currentPage = page;

    // Update active filter chip
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
        if (chip.getAttribute('data-category') === category) {
            chip.classList.add('active');
        }
    });

    // Render filtered clubs
    renderClubs(category, currentPage);
}

function nextPage() {
    const clubsGrid = document.getElementById('clubsGrid');
    if (clubsGrid.children.length === clubsPerPage || clubsGrid.children.length > 0) {
        currentPage++;
        filterClubs(currentFilter);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        filterClubs(currentFilter);
    }
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function openClubModal(clubId) {
    const club = clubsData.find(c => c.id == clubId);
    if (!club) return;

    selectedClub = club;
    currentGalleryIndex = 0;

    // Helper to toggle section visibility
    const setSection = (id, text, contentId = null) => {
        const section = document.getElementById(id);
        const contentEl = contentId ? document.getElementById(contentId) : null;
        if (text && text.trim() !== '') {
            section.style.display = 'block';
            if (contentEl) contentEl.innerHTML = text.replace(/\n/g, '<br>');
        } else {
            section.style.display = 'none';
        }
    };

    // Populate modal with club data
    document.getElementById('modalClubImage').src = club.bg_image || '';
    document.getElementById('modalClubName').textContent = club.club_name;
    
    setSection('sectionIntroduction', club.introduction, 'modalClubDescription');
    setSection('sectionContact', club.contact, 'modalClubContact');
    setSection('sectionStructure', club.structure, 'modalClubStructure');
    setSection('sectionSchedule', club.meeting_schedule, 'modalClubSchedule');
    setSection('sectionActivities', club.key_activities, 'modalClubActivities');
    setSection('sectionAdditional', club.additional_info, 'modalClubAdditional');
    setSection('sectionRecruitment', club.recruitment, 'modalClubRecruitment');
    setSection('sectionRequirements', club.requirements, 'modalClubRequirements');
    setSection('sectionBenefits', club.benefits, 'modalClubBenefits');

    const formSection = document.getElementById('sectionFormLink');
    if (club.formlink && club.formlink.trim() !== '') {
        formSection.style.display = 'block';
        document.getElementById('modalFormLink').href = club.formlink;
    } else {
        formSection.style.display = 'none';
    }

    // Render gallery
    renderClubGallery(club);

    // Show modal
    const modal = document.getElementById('clubModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset scroll
    const scrollContent = document.getElementById('modalContentScroll');
    if (scrollContent) scrollContent.scrollTop = 0;
}


function closeClubModal() {
    const modal = document.getElementById('clubModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function renderClubGallery(club) {
    const carouselImages = document.getElementById('carouselImages');
    const carouselDots = document.getElementById('carouselDots');
    const imageCarousel = document.getElementById('imageCarousel');

    carouselImages.innerHTML = '';
    carouselDots.innerHTML = '';

    if (!club.images || club.images.length === 0) {
        // Hide gallery carousel section when no images
        document.getElementById('sectionGallery').style.display = 'none';
    } else {
        // Show gallery images
        document.getElementById('sectionGallery').style.display = 'block';
        club.images.forEach((imgUrl, index) => {
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = `${club.club_name} ${index + 1}`;
            img.className = 'carousel-image';
            img.style.display = index === 0 ? 'block' : 'none';
            img.onclick = () => showFullScreenImage(index);
            carouselImages.appendChild(img);

            const dot = document.createElement('div');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.onclick = () => selectGalleryImage(index);
            carouselDots.appendChild(dot);
        });
        
        // Add swipe gesture support
        setupSwipeGestures(carouselImages);
    }
}

let touchStartX = 0;
let touchEndX = 0;

function setupSwipeGestures(element) {
    element.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    element.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    }, {passive: true});
}

function handleSwipeGesture() {
    if (touchEndX < touchStartX - 50) nextGalleryImage();
    if (touchEndX > touchStartX + 50) prevGalleryImage();
}

let fullscreenCurrentIndex = 0;

function showFullScreenImage(index) {
    if (!selectedClub || !selectedClub.images || selectedClub.images.length === 0) return;
    fullscreenCurrentIndex = index;
    
    let overlay = document.getElementById('fullscreenImageOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'fullscreenImageOverlay';
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;';
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = 'position:absolute;top:20px;right:20px;background:none;border:none;color:white;font-size:2rem;cursor:pointer;z-index:10001;';
        closeBtn.onclick = () => document.body.removeChild(overlay);
        
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '❮';
        prevBtn.style.cssText = 'position:absolute;left:20px;background:rgba(255,255,255,0.2);border:none;color:white;font-size:3rem;cursor:pointer;border-radius:50%;width:60px;height:60px;display:flex;align-items:center;justify-content:center;z-index:10001;';
        prevBtn.onclick = (e) => { e.stopPropagation(); navigateFullscreen(-1); };
        
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '❯';
        nextBtn.style.cssText = 'position:absolute;right:20px;background:rgba(255,255,255,0.2);border:none;color:white;font-size:3rem;cursor:pointer;border-radius:50%;width:60px;height:60px;display:flex;align-items:center;justify-content:center;z-index:10001;';
        nextBtn.onclick = (e) => { e.stopPropagation(); navigateFullscreen(1); };
        
        const imgContainer = document.createElement('div');
        imgContainer.id = 'fullscreenImageContainer';
        imgContainer.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;';
        imgContainer.onclick = () => document.body.removeChild(overlay);
        
        overlay.appendChild(closeBtn);
        overlay.appendChild(prevBtn);
        overlay.appendChild(nextBtn);
        overlay.appendChild(imgContainer);
        document.body.appendChild(overlay);
    }
    
    updateFullscreenImage();
}

function navigateFullscreen(direction) {
    if (!selectedClub || !selectedClub.images) return;
    fullscreenCurrentIndex = (fullscreenCurrentIndex + direction + selectedClub.images.length) % selectedClub.images.length;
    updateFullscreenImage();
}

function updateFullscreenImage() {
    const imgContainer = document.getElementById('fullscreenImageContainer');
    if (imgContainer && selectedClub && selectedClub.images) {
        const src = selectedClub.images[fullscreenCurrentIndex];
        imgContainer.innerHTML = `<img src="${src}" style="max-width:90%;max-height:90%;object-fit:contain;cursor:default;" onclick="event.stopPropagation()">`;
    }
}

function selectGalleryImage(index) {
    currentGalleryIndex = index;
    updateGalleryDisplay();
}

function nextGalleryImage() {
    if (!selectedClub || !selectedClub.images || selectedClub.images.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % selectedClub.images.length;
    updateGalleryDisplay();
}

function prevGalleryImage() {
    if (!selectedClub || !selectedClub.images || selectedClub.images.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + selectedClub.images.length) % selectedClub.images.length;
    updateGalleryDisplay();
}

function updateGalleryDisplay() {
    const carouselImages = document.getElementById('carouselImages');
    const carouselDots = document.getElementById('carouselDots');

    if (!carouselImages || !carouselImages.children) return;

    Array.from(carouselImages.children).forEach((img, index) => {
        img.style.display = index === currentGalleryIndex ? 'block' : 'none';
    });

    Array.from(carouselDots.children).forEach((dot, index) => {
        dot.classList.toggle('active', index === currentGalleryIndex);
    });
}

function openReviewModal(reviewId) {
    const review = reviewsData.find(r => r.id === reviewId);
    if (!review) return;

    const stars = '⭐'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

    document.getElementById('reviewModalAuthor').textContent = review.author;
    document.getElementById('reviewModalRating').textContent = stars;
    document.getElementById('reviewModalText').textContent = review.text;

    const modal = document.getElementById('reviewModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReviewModal() {
    const modal = document.getElementById('reviewModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openQuizModal() {
    const modal = document.getElementById('quizModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuizModal() {
    const modal = document.getElementById('quizModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    // Reset form
    document.querySelectorAll('.quiz-options input[type="radio"]').forEach(input => {
        input.checked = false;
    });
}

function submitQuiz() {
    const interest = document.querySelector('input[name="interest"]:checked');
    if (!interest) {
        alert('Vui lòng chọn một lựa chọn');
        return;
    }

    // Filter clubs by selected interest
    const filteredClubs = clubsData.filter(club => club.category && club.category.includes(interest.value));
    
    // Close quiz modal
    closeQuizModal();

    // Scroll to categories section
    smoothScroll('categories');

    // Highlight and filter clubs
    setTimeout(() => {
        filterClubs(interest.value);
        // Show notification
        showNotification(`Đã lọc ${filteredClubs.length} câu lạc bộ theo sở thích của bạn!`);
    }, 500);
}

// ============================================
// BACK-TO-TOP BUTTON
// ============================================

function setupBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
}

function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// MOBILE MENU
// ============================================

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

// ============================================
// CAROUSEL FUNCTIONS
// ============================================

function getVisibleCardsCount() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
}

function nextTopClub() {
    const track = document.getElementById('carouselTrack');
    const cards = track.querySelectorAll('.top-club-card');
    if (cards.length === 0) return;

    const maxIndex = Math.max(0, cards.length - getVisibleCardsCount());
    currentCarouselIndex = currentCarouselIndex >= maxIndex ? 0 : currentCarouselIndex + 1;
    updateCarouselPosition();
}

function prevTopClub() {
    const track = document.getElementById('carouselTrack');
    const cards = track.querySelectorAll('.top-club-card');
    if (cards.length === 0) return;

    const maxIndex = Math.max(0, cards.length - getVisibleCardsCount());
    currentCarouselIndex = currentCarouselIndex <= 0 ? maxIndex : currentCarouselIndex - 1;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const track = document.getElementById('carouselTrack');
    const cards = track.querySelectorAll('.top-club-card');
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = 24; // From CSS gap
    const offset = -(currentCarouselIndex * (cardWidth + gap));
    track.style.transform = `translateX(${offset}px)`;
}

// ============================================
// ACCORDION FUNCTIONS
// ============================================

function toggleAccordion(header) {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    // Close all other accordion items
    document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
    });

    // Toggle current item
    if (!isActive) {
        item.classList.add('active');
    }
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function smoothScroll(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleLogin() {
    showNotification('Tính năng Đăng nhập sẽ ra mắt trong Phase tiếp theo. Vui lòng quay lại sau!');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #0066cc, #6c63ff);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 999;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ============================================
// EVENT LISTENERS & SETUP
// ============================================

function setupEventListeners() {
    // Close modals when clicking outside
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal.querySelector('.modal-overlay')) {
                if (modal.id === 'clubModal') {
                    closeClubModal();
                } else if (modal.id === 'reviewModal') {
                    closeReviewModal();
                } else if (modal.id === 'quizModal') {
                    closeQuizModal();
                }
            }
        });
    });

    // Close modals and menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeClubModal();
            closeReviewModal();
            closeQuizModal();
            closeMobileMenu();
        }
    });

    // Parallax effect for modal background
    const modalBody = document.querySelector('#modalContentScroll .modal-body');
    const modalBg = document.getElementById('modalParallaxBg');
    const modalBgImage = document.getElementById('modalClubImage');
    
    if (modalBody && modalBg && modalBgImage) {
        modalBody.addEventListener('scroll', () => {
            const scrollTop = modalBody.scrollTop;
            
            // Adjust height (min 150px, max 300px)
            const newHeight = Math.max(150, 300 - scrollTop);
            modalBg.style.height = newHeight + 'px';
            
            // Adjust zoom: stop zooming when height stops decreasing (scrollTop >= 150)
            const zoomScrollTop = Math.min(150, scrollTop);
            const scale = Math.max(1, 1 + (zoomScrollTop / 800));
            modalBgImage.style.transform = `scale(${scale})`;
        });
    }

    // Close mobile menu when clicking on nav links
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Add scroll behavior to navbar
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.pageYOffset > 100) {
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        }
        lastScrollTop = window.pageYOffset;
    });

    // Lazy loading for images (if needed)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// UTILITY: Initialize with hero section
// ============================================

// Add smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
