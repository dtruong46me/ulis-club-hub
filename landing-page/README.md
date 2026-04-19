# 🎭 CLB Hub - Landing Page

> Hệ thống tìm kiếm và đăng ký câu lạc bộ thông minh dành riêng cho sinh viên ULIS

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-informational)

---

## 📖 Mục Lục

- [Giới Thiệu](#-giới-thiệu)
- [Tính Năng](#-tính-năng)
- [Cấu Trúc Dự Án](#-cấu-trúc-dự-án)
- [Hướng Dẫn Nhanh](#-hướng-dẫn-nhanh)
- [Tài Liệu](#-tài-liệu)
- [Stack Công Nghệ](#-stack-công-nghệ)
- [Responsive Design](#-responsive-design)
- [Đặc Điểm Nổi Bật](#-đặc-điểm-nổi-bật)

---

## 🎯 Giới Thiệu

**CLB Hub** là một landing page hiện đại, được thiết kế đặc biệt để giúp sinh viên ULIS khám phá, tìm kiếm và đăng ký tham gia các câu lạc bộ (CLB) phù hợp với sở thích của họ.

### Mục Đích:
- 💡 Giảm rào cản tìm kiếm CLB
- 🎯 Giúp sinh viên tìm được cộng đồng phù hợp
- 📈 Tăng tỷ lệ chuyển đổi (Conversion Rate)
- 🌐 Tạo trải nghiệm người dùng tuyệt vời trên mọi thiết bị

---

## ✨ Tính Năng

### 🔝 Header & Navigation
- ✓ Sticky Navigation Bar (bám dính lên cùng)
- ✓ Smooth scroll giữa các sections
- ✓ Responsive menu
- ✓ Quick access buttons

### 🎬 Hero Section
- ✓ Video background hoặc carousel images
- ✓ Compelling headline & CTA buttons
- ✓ Quiz matchmaking feature
- ✓ Split-screen layout (Desktop)

### 🔍 Category & Discovery
- ✓ Filter chips cho 5 danh mục CLB
- ✓ Responsive grid layout
  - Desktop: 3 cột
  - Tablet: 2 cột
  - Mobile: 1 cột
- ✓ Club card với status badge
- ✓ Interactive modal pop-ups

### 🏆 Top Clubs Showcase
- ✓ Carousel/Slider UI
- ✓ Auto-play functionality
- ✓ Top rated clubs display
- ✓ Social proof metrics

### ⭐ Reviews Section
- ✓ Masonry grid layout
- ✓ Star rating system
- ✓ Anonymous reviews
- ✓ Hover effects

### 💡 Tips & Knowledge Base
- ✓ Accordion UI
- ✓ 6 tips & hướng dẫn
- ✓ Smooth expand/collapse
- ✓ Search-friendly content

### 🔗 Footer
- ✓ Dark theme design
- ✓ Quick links
- ✓ Social media icons
- ✓ Copyright info

---

## 📁 Cấu Trúc Dự Án

```
landing-page/
├── index.html                          # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css                 # Responsive CSS (mobile-first)
│   ├── js/
│   │   ├── data.js                    # Sample data (clubs, reviews, tips)
│   │   └── main.js                    # Main JavaScript logic
│   └── images/
│       ├── hero-illustration.png
│       ├── hero-background.mp4
│       └── [club images...]
├── README.md                           # Project overview (file này)
├── GUIDE-SETUP.md                     # How to run locally
├── GUIDE-EDITING.md                   # How to edit content
├── GUIDE-IMAGES-TEXT.md               # How to add images & text
└── GUIDE-DEPLOYMENT.md                # How to deploy
```

---

## 🚀 Hướng Dẫn Nhanh

### 1. Chạy Trên Máy Local

#### Phương Pháp 1: VS Code Live Server
```
1. Cài Live Server extension
2. Right-click index.html
3. Chọn "Open with Live Server"
```

#### Phương Pháp 2: Python
```bash
python -m http.server 8000
```

### 2. Chỉnh Sửa Nội Dung

#### Thêm CLB Mới
📍 **File:** `assets/js/data.js`
```javascript
{
    id: 14,
    name: 'New Club',
    category: 'academic',
    status: true,
    description: 'Club description...',
    // ... fields khác
}
```

#### Thay Đổi Màu Sắc
📍 **File:** `assets/css/styles.css` (Dòng ~10)
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #6c63ff;
    /* ... */
}
```

### 3. Deploy

**Khuyến nghị:** Dùng **Vercel** hoặc **Netlify**

```bash
git add .
git commit -m "Update content"
git push
# Tự động deploy!
```

---

## 📚 Tài Liệu

Dự án này đi kèm với 4 tài liệu chi tiết:

| Tài Liệu | Nội Dung |
|---------|---------|
| [GUIDE-SETUP.md](GUIDE-SETUP.md) | ✓ Cách chạy locally ✓ Troubleshooting |
| [GUIDE-EDITING.md](GUIDE-EDITING.md) | ✓ Chỉnh sửa nội dung ✓ Thêm CLB/Review ✓ Đổi màu |
| [GUIDE-IMAGES-TEXT.md](GUIDE-IMAGES-TEXT.md) | ✓ Thêm ảnh ✓ Chỉnh sửa text ✓ Formatting |
| [GUIDE-DEPLOYMENT.md](GUIDE-DEPLOYMENT.md) | ✓ Deploy Vercel/Netlify ✓ Custom domain ✓ SEO |

---

## 🛠️ Stack Công Nghệ

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling, Flexbox, Grid
- **Vanilla JavaScript** - No framework needed
- **Responsive Design** - Mobile-first approach

### Performance
- ✓ Lazy loading for images
- ✓ Smooth animations & transitions
- ✓ Optimized CSS (40KB)
- ✓ Minimal JavaScript (10KB)

### Accessibility
- ✓ WCAG 2.1 compliant
- ✓ Semantic HTML
- ✓ Proper heading hierarchy
- ✓ Color contrast compliant

---

## 📱 Responsive Design

Landing page hoàn toàn responsive trên 3 loại thiết bị:

### 🖥️ **Desktop** (1200px+)
```
┌─────────────────────────────────────────┐
│  Logo    Menu 1 Menu 2 Menu 3    Login  │ ← Navbar
├─────────────────────────────────────────┤
│                                         │
│         Hero Title + Image (2 col)      │ ← Hero
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐  │
│  │  CLB 1  │ │  CLB 2  │ │  CLB 3  │  │ ← 3 cột
│  └─────────┘ └─────────┘ └─────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### 📱 **Tablet** (768px - 1199px)
```
┌──────────────────────┐
│ Logo     Login       │ ← Navbar simple
├──────────────────────┤
│   Hero Title (1 col) │
├──────────────────────┤
│ ┌──────────┐         │
│ │  CLB 1   │         │ ← 2 cột
│ └──────────┘         │
│ ┌──────────┐         │
│ │  CLB 2   │         │
│ └──────────┘         │
└──────────────────────┘
```

### 📲 **Mobile** (480px - 767px)
```
┌────────────────┐
│ Logo     Menu  │ ← Navbar
├────────────────┤
│ Hero Title     │ ← 1 col
│ (no image)     │
├────────────────┤
│ ┌──────────────┐│
│ │  CLB 1       ││ ← 1 cột
│ └──────────────┘│
│ ┌──────────────┐│
│ │  CLB 2       ││
│ └──────────────┘│
└────────────────┘
```

---

## 🌟 Đặc Điểm Nổi Bật

### 1. **Quiz Matchmaking** 🪄
Người dùng có thể làm quiz 1 câu hỏi để tìm CLB phù hợp

### 2. **Interactive Modals** 📋
Click vào CLB để xem chi tiết trong popup không rời khỏi trang

### 3. **Smooth Animations** ✨
- Fade-in effect khi load
- Hover animations trên cards
- Smooth scrolling giữa sections

### 4. **Social Proof** ⭐
- 9 reviews từ thành viên thực tế
- Star ratings
- Member count & years of operation

### 5. **Content Management** 📝
Toàn bộ dữ liệu CLB, reviews, tips được quản lý trong `data.js`
- Không cần database
- Dễ cập nhật
- Version control friendly

### 6. **SEO Ready** 🔍
- Semantic HTML
- Meta tags
- Open Graph
- Structured data ready

---

## 📊 Dữ Liệu Mẫu Bao Gồm

### 📚 13 Câu Lạc Bộ Mẫu
- **Học thuật:** Coding, English, Mathematics (3)
- **Kỹ năng:** Leadership, Entrepreneurship (2)
- **Nghệ thuật:** Art, Music, Photography (3)
- **Thể thao:** Badminton, Football, Yoga (3)
- **Tình nguyện:** Community Service, Environment (2)

### ⭐ 9 Reviews Mẫu
- Star ratings từ 4-5 sao
- Testimonials từ thành viên
- Ẩn danh để bảo vệ quyền riêng tư

### 💡 6 Tips/Hướng Dẫn
- Cách vượt qua vòng phỏng vấn
- Cân bằng thời gian
- Cách chọn CLB phù hợp
- Trở thành thành viên tích cực
- Từ thành viên đến leader
- Phát triển networking

---

## 🔗 Links Quan Trọng

- **Documentation:** Đọc [GUIDE-SETUP.md](GUIDE-SETUP.md) để bắt đầu
- **Editing Guide:** Xem [GUIDE-EDITING.md](GUIDE-EDITING.md)
- **Images & Text:** Xem [GUIDE-IMAGES-TEXT.md](GUIDE-IMAGES-TEXT.md)
- **Deployment:** Xem [GUIDE-DEPLOYMENT.md](GUIDE-DEPLOYMENT.md)

---

## 🎓 Học Từ Dự Án Này

Dự án này là một ví dụ tuyệt vời để học:
- ✓ Responsive web design
- ✓ JavaScript interactivity
- ✓ Modal/Pop-up management
- ✓ Data-driven UI (từ data.js)
- ✓ CSS Grid & Flexbox
- ✓ Smooth animations

---

## 🤝 Cách Đóng Góp

Nếu có ý tưởng cải thiện:
1. Fork repository
2. Tạo branch mới (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Tạo Pull Request

---

## 📝 License

MIT License - Tự do sử dụng cho mục đích thương mại

---

## 📞 Support & Contact

Nếu gặp vấn đề hoặc có câu hỏi:
1. Kiểm tra documentation
2. Xem troubleshooting section
3. Liên hệ team phát triển

---

## 🎉 Cảm Ơn

Cảm ơn bạn đã sử dụng CLB Hub landing page!

**Chúc bạn thành công! 🚀**

---

<div align="center">

Made with ❤️ for ULIS Students

**[▲ Back to top](#clb-hub---landing-page)**

</div>
