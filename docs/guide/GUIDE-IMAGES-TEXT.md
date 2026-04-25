# 🖼️ Hướng Dẫn Thêm Ảnh & Text Cho CLB

## 📸 Hướng Dẫn Thêm Ảnh

### 1. Chuẩn Bị Ảnh

#### Yêu Cầu Kỹ Thuật:
- **Định dạng:** JPG, PNG, WebP
- **Kích thước đề xuất:**
  - Club card image: 400x300px (tỉ lệ 4:3)
  - Hero image: 500x500px trở lên
  - Cover/Hero video: 1920x1080px (Full HD)
  - Social media: 1200x630px

- **Dung lượng:**
  - Tối đa 2MB mỗi ảnh
  - Nên nén ảnh trước (dùng TinyPNG, ImageOptim)

- **Chất lượng:** Tối thiểu 300 DPI cho in ấn, 72 DPI cho web

### 2. Tổ Chức Thư Mục Ảnh

```
landing-page/assets/images/
├── hero-illustration.png      # Ảnh hero section
├── hero-background.mp4        # Video background hero
├── club-images/
│   ├── coding-club.jpg
│   ├── english-club.jpg
│   ├── art-club.jpg
│   └── ... (tất cả ảnh CLB)
└── social-images/
    └── og-image.png           # Ảnh cho social share
```

### 3. Cách Thêm Ảnh Cho CLB

#### Bước 1: Upload ảnh
1. Lưu ảnh vào `assets/images/club-images/` hoặc thư mục khác
2. Đặt tên file có ý nghĩa (vd: `ulis-coding-club.jpg`)

#### Bước 2: Cập Nhật Đường Dẫn Trong Data
📍 **File:** `assets/js/data.js`

Tìm CLB cần thêm ảnh và sửa trường `image`:

```javascript
{
    id: 1,
    name: 'ULIS Coding Club',
    // ... các trường khác ...
    image: 'assets/images/club-images/ulis-coding-club.jpg',  // ← Sửa đây
    // ...
}
```

#### Ví dụ Đường Dẫn:
- **Local file:** `assets/images/club-images/robotics-club.jpg`
- **URL online:** `https://example.com/images/robotics-club.jpg`
- **Placeholder:** `https://via.placeholder.com/400x300?text=CLB+Name`

### 4. Thêm Ảnh Hero Section

#### Thay Ảnh Minh Họa
📍 **File:** `index.html` (dòng ~105)

```html
<div class="hero-image">
    <img src="assets/images/hero-illustration.png" alt="CLB Activities Illustration" class="hero-img">
</div>
```

Sửa đường dẫn `src` thành ảnh của bạn:
```html
<img src="assets/images/my-hero-image.png" alt="..." class="hero-img">
```

#### Thay Video Hero Background
📍 **File:** `index.html` (dòng ~63)

```html
<video autoplay muted loop class="hero-video">
    <source src="assets/images/hero-background.mp4" type="video/mp4">
</video>
```

Sửa đường dẫn `src` thành video của bạn:
```html
<source src="assets/images/my-hero-video.mp4" type="video/mp4">
```

### 5. Sử Dụng URL Ảnh Online

Thay vì lưu ảnh locally, bạn có thể dùng URL từ internet:

```javascript
image: 'https://images.unsplash.com/photo-example',
```

#### Nguồn Ảnh Miễn Phí:
- [Unsplash](https://unsplash.com) - Ảnh high quality miễn phí
- [Pexels](https://pexels.com) - Kho ảnh đa dạng
- [Pixabay](https://pixabay.com) - Ảnh royalty-free
- [Lorem Picsum](https://picsum.photos) - Placeholder ảnh

### 6. Placeholder Ảnh Tạm Thời

Dùng URL này khi chưa có ảnh thực:
```javascript
image: 'https://via.placeholder.com/400x300?text=CLB+Name'
```

---

## 📝 Hướng Dẫn Thêm & Sửa Text

### 1. Thêm CLB Mới Với Text Đầy Đủ

📍 **File:** `assets/js/data.js`

```javascript
{
    id: 15,
    name: 'Digital Marketing Club',
    category: 'skill',
    status: true,
    description: 'Câu lạc bộ marketing kỹ thuật số - học SEO, SEM, Social Media Marketing.',
    schedule: 'Thứ 3 hàng tuần, 17:00-18:30 tại nhà B',
    activities: `• SEO Workshop
• Social Media Strategy
• Analytics Tutorial
• Case Study Analysis
• Real Project Campaign`,
    requirements: 'Quan tâm marketing, không cần kinh nghiệm trước',
    benefits: 'Kỹ năng digital marketing, portfolio thực tế, job opportunity',
    formLink: 'https://forms.gle/digital-marketing-form',
    image: 'assets/images/club-images/digital-marketing.jpg',
    rating: 4.7,
    members: 85,
    years: 2
}
```

### 2. Định Dạng Text Trong Activities & Content

#### Xuống Dòng
Dùng `\n` để tạo line break:
```javascript
activities: `• Activity 1\n• Activity 2\n• Activity 3`
```

#### Bullet Points
```javascript
requirements: `• Passion for coding\n• Open to learning\n• Committed to projects`
```

#### Emoji & Ký Tự Đặc Biệt
```javascript
schedule: '⏰ Thứ 5 hàng tuần, 18:30-20:00 tại nhà D'
activities: `✓ Weekly workshops\n✓ Hackathon events`
```

### 3. Chỉnh Sửa Review & Tips

#### Thêm Review Mới
📍 **File:** `assets/js/data.js`

```javascript
{
    id: 11,
    author: 'Ẩn danh - Hiện tại ở Digital Marketing Club',
    rating: 5,
    text: 'Tôi học được rất nhiều kỹ năng marketing thực tế. Các project live giúp tôi hiểu rõ cách hoạt động của digital marketing trong thực tế.'
}
```

#### Lưu Ý Khi Viết Review:
- ✅ Viết ngắn gọn (2-3 câu)
- ✅ Chân thực, không quá lời khen
- ✅ Dùng "Ẩn danh" để bảo vệ quyền riêng tư
- ✅ Đánh giá từ 3-5 sao (realistic)

#### Thêm Tip/Hướng Dẫn Mới
```javascript
{
    id: 7,
    title: '🌐 Phát triển portfolio từ CLB activities',
    content: `• Lưu giữ tất cả project từ CLB
• Tạo GitHub repository cho code
• Viết blog post về learning experience
• Showcase portfolio trên LinkedIn
• Sử dụng testimonial từ CLB leaders`
}
```

### 4. Sửa Nội Dung Chính

#### Tiêu Đề Trang
📍 **File:** `index.html` (dòng ~7)
```html
<title>CLB Hub ULIS - Tìm Kiếm & Đăng Ký Câu Lạc Bộ</title>
```

#### Hero Title
📍 **File:** `index.html` (dòng ~85)
```html
<h1 class="hero-title">KHÁM PHÁ CỘNG ĐỒNG CỦA BẠN</h1>
```

#### Hero Subtitle
```html
<p class="hero-subtitle">Ghép đôi CLB: Bến đỖ thanh xuân của bạn</p>
```

#### Section Titles
```html
<h2 class="section-title">Khám phá hệ sinh thái CLB</h2>
```

#### Description Text
```html
<p class="section-subtitle">Tìm kiếm câu lạc bộ theo sở thích của bạn</p>
```

### 5. Thêm Nội Dung Mới (Sections)

#### Thêm Section Mới
1. Mở `index.html`
2. Tìm vị trí muốn thêm section (trước footer)
3. Thêm code mới:

```html
<!-- New Section -->
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">Tiêu đề Section</h2>
        <p class="section-subtitle">Mô tả ngắn</p>
        <!-- Nội dung của section -->
    </div>
</section>
```

4. Thêm CSS trong `assets/css/styles.css`:
```css
.new-section {
    background: var(--bg-light);
    padding: var(--spacing-2xl) 0;
}
```

### 6. Chỉnh Sửa Liên Kết

#### Thay Link Google Form
📍 **File:** `assets/js/data.js`

```javascript
formLink: 'https://forms.gle/your-form-id-here'
```

#### Thay Social Media Links
📍 **File:** `index.html` (dòng ~395)

```html
<a href="https://facebook.com/your-page" class="social-icon facebook">
<a href="https://tiktok.com/@your-account" class="social-icon tiktok">
<a href="https://instagram.com/your-account" class="social-icon instagram">
```

#### Thay Footer Links
```html
<li><a href="https://your-privacy-policy.com">Chính sách bảo mật</a></li>
<li><a href="mailto:contact@example.com">Liên hệ</a></li>
```

---

## 🎨 Mẹo Viết Content Tốt

### Tiêu Đề CLB
- ✅ Rõ ràng, ngắn gọn (3-4 từ)
- ✅ Có thể thêm emoji
- ❌ Không nên quá dài
- **Ví dụ tốt:** "ULIS Coding Club", "AC4U - Art Club"

### Mô Tả CLB
- ✅ 1-2 câu, mô tả chính xác
- ✅ Nêu lợi ích chính
- ❌ Không nên là quảng cáo quá lời
- **Ví dụ:** "Câu lạc bộ lập trình với các workshop về Web, Mobile, AI."

### Lịch & Địa Điểm
- ✅ Rõ ràng ngày giờ (vd: Thứ 5 hàng tuần, 18:30-20:00)
- ✅ Nêu địa điểm cụ thể
- **Ví dụ:** "Thứ 5 hàng tuần, 18:30-20:00 tại nhà D"

### Hoạt Động
- ✅ Dùng bullet points
- ✅ 3-5 hoạt động chính
- ✅ Cụ thể, dễ hình dung
- **Ví dụ:** "Weekly workshops • Hackathon events • Project collaboration"

---

## 📋 Checklist Trước Khi Deploy

- [ ] Kiểm tra tất cả ảnh đã load đúng
- [ ] Tất cả liên kết Google Form hoạt động
- [ ] Social media links chính xác
- [ ] Text không có typo
- [ ] Responsive design hoạt động trên mobile
- [ ] Video hero load được (hoặc ẩn nếu không có)
- [ ] Tất cả CLB có rating hợp lý (3-5 sao)

---

**Tiếp theo:** Xem [GUIDE-DEPLOYMENT.md](GUIDE-DEPLOYMENT.md) để deploy!
