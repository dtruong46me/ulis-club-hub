# 📝 Hướng Dẫn Chỉnh Sửa Nội Dung Landing Page

## 🎯 Các Phần Có Thể Chỉnh Sửa Dễ Dàng

### 1️⃣ **Thay Đổi Tiêu Đề & Mô Tả**

#### Thay đổi tiêu đề trang
📍 **File:** `index.html` (dòng 7)
```html
<title>CLB Hub - Ghép Đôi CLB: Bến ĐỖ Thanh Xuân Của Bạn</title>
```
🔧 Sửa thành tiêu đề mới của bạn

#### Thay đổi Hero Title
📍 **File:** `index.html` (dòng ~90)
```html
<h1 class="hero-title">CLB HUB - GHÉP ĐÔI CLB</h1>
<p class="hero-subtitle">Bến đỖ thanh xuân của bạn</p>
<p class="hero-description">
    Hệ thống đề xuất và tìm kiếm câu lạc bộ thông minh dành riêng cho sinh viên ULIS. 
    Khám phá cộng đồng phù hợp với bạn dựa trên sở thích, ngành học và thời gian của bạn.
</p>
```

#### Thay đổi Footer Message
📍 **File:** `index.html` (dòng ~380)
```html
<div class="footer-message">
    <h3>Một lời từ team CLB Hub</h3>
    <p>
        Chúng tôi tạo ra CLB Hub vì tin rằng mỗi sinh viên xứng đáng tìm thấy cộng đồng 
        của riêng mình - nơi họ có thể phát triển, học hỏi và tạo nên những kỷ niệm tuyệt vời.
    </p>
</div>
```

---

### 2️⃣ **Quản Lý Danh Sách Câu Lạc Bộ (CLB)**

#### Xem & Chỉnh Sửa Dữ Liệu CLB
📍 **File:** `assets/js/data.js`

Mỗi CLB là một object với các trường sau:
```javascript
{
    id: 1,                              // ID duy nhất
    name: 'ULIS Coding Club',           // Tên CLB
    category: 'academic',               // Danh mục: academic, skill, art, sport, volunteer
    status: true,                       // true = Đang tuyển, false = Đóng form
    description: 'Mô tả ngắn CLB',      // Mô tả 1-2 dòng
    schedule: 'Thứ 5 hàng tuần...',     // Lịch hoạt động
    activities: '• Activity 1\n• Activity 2',  // Hoạt động (dùng \n để xuống dòng)
    requirements: 'Yêu cầu...',         // Yêu cầu tham gia
    benefits: 'Quyền lợi...',           // Quyền lợi thành viên
    formLink: 'https://forms.gle/...',  // Link Google Form đăng ký
    image: 'https://via.placeholder.com/400x300?text=Club',  // URL ảnh
    rating: 4.8,                        // Đánh giá (0-5)
    members: 150,                       // Số thành viên
    years: 5                            // Số năm hoạt động
}
```

#### Thêm CLB Mới
1. Mở file `assets/js/data.js`
2. Cuộn xuống cuối mảng `clubsData`
3. Thêm object CLB mới trước dấu `]` cuối cùng

**Ví dụ:**
```javascript
{
    id: 14,
    name: 'Robotics Club',
    category: 'academic',
    status: true,
    description: 'Câu lạc bộ robot tập trung vào lập trình và xây dựng robot.',
    schedule: 'Thứ 4 hàng tuần, 18:00-20:00',
    activities: '• Robot design\n• Programming\n• Competition',
    requirements: 'Quan tâm công nghệ, không cần kinh nghiệm',
    benefits: 'Kỹ năng lập trình robot, cơ hội thi đấu',
    formLink: 'https://forms.gle/newform',
    image: 'https://via.placeholder.com/400x300?text=Robotics',
    rating: 4.9,
    members: 75,
    years: 2
}
```

#### Xóa CLB
Xóa object CLB từ mảng `clubsData`

#### Thay Đổi Trạng Thái Tuyển Dụng
```javascript
status: true,   // ✓ Đang tuyển TV
status: false,  // ✗ Đóng form
```

---

### 3️⃣ **Quản Lý Reviews & Testimonials**

#### Xem & Chỉnh Sửa Reviews
📍 **File:** `assets/js/data.js` (mảng `reviewsData`)

```javascript
{
    id: 1,
    author: 'Ẩn danh - Cựu thành viên Coding Club',
    rating: 5,  // 1-5 sao
    text: 'Tham gia Coding Club giúp tôi học được rất nhiều công nghệ mới...'
}
```

#### Thêm Review Mới
1. Mở file `assets/js/data.js`
2. Tìm mảng `reviewsData`
3. Thêm object review mới

**Ví dụ:**
```javascript
{
    id: 10,
    author: 'Ẩn danh - Hiện tại ở Database Club',
    rating: 5,
    text: 'CLB này giúp tôi hiểu rõ về database design và optimization.'
}
```

#### Xóa Review
Xóa object review từ mảng

#### Thay Đổi Số Sao
```javascript
rating: 5,  // Đẹp tuyệt
rating: 4,  // Tốt
rating: 3,  // Bình thường
```

---

### 4️⃣ **Quản Lý Tips & Hướng Dẫn**

#### Xem & Chỉnh Sửa Tips
📍 **File:** `assets/js/data.js` (mảng `tipsData`)

```javascript
{
    id: 1,
    title: '📌 Bí kíp vượt qua vòng phỏng vấn CLB',
    content: `• Hãy thật tự nhiên, không cần nạo nước quá
• Chuẩn bị câu hỏi về bản thân bạn...`
}
```

#### Thêm Tip Mới
```javascript
{
    id: 7,
    title: '🎓 Bài học từ các leader CLB',
    content: `• Lắng nghe ý kiến từ thành viên
• Quyết định dân chủ...`
}
```

---

### 5️⃣ **Thay Đổi Màu Sắc (Theme)**

#### Các Biến Màu Chính
📍 **File:** `assets/css/styles.css` (dòng ~10)

```css
:root {
    --primary-color: #0066cc;       /* Xanh dương chính */
    --primary-dark: #0052a3;        /* Xanh dương đậm */
    --secondary-color: #6c63ff;     /* Tím phụ */
    --success-color: #52c41a;       /* Xanh lá (thành công) */
    --warning-color: #faad14;       /* Vàng (cảnh báo) */
    --danger-color: #ff4d4f;        /* Đỏ (nguy hiểm) */
    --text-dark: #1f2937;           /* Chữ tối */
    --text-light: #6b7280;          /* Chữ nhạt */
    --bg-light: #f9fafb;            /* Nền nhạt */
    --bg-white: #ffffff;            /* Nền trắng */
    --border-color: #e5e7eb;        /* Màu viền */
}
```

#### Cách Thay Đổi Màu
1. Mở file `assets/css/styles.css`
2. Tìm phần `:root { ... }`
3. Thay đổi giá trị hex color

**Ví dụ:** Thay đổi màu chính từ xanh dương sang đỏ:
```css
--primary-color: #ff0000;  /* Đỏ thay vì xanh dương */
```

#### Các Công Cụ Chọn Màu
- [Colorpicker.com](https://www.colorpicker.com)
- [Coolors.co](https://coolors.co)
- DevTools của browser (F12)

---

### 6️⃣ **Thay Đổi Font & Typography**

#### Các Biến Font
📍 **File:** `assets/css/styles.css` (dòng ~30)

```css
--font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

#### Thay Font Family
```css
/* Thay bằng một font khác */
--font-family: 'Arial', sans-serif;

/* Hoặc import từ Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
--font-family: 'Inter', sans-serif;
```

#### Thay Đổi Kích Thước Font
```css
--font-size-base: 1rem;      /* 16px */
--font-size-lg: 1.125rem;    /* 18px */
--font-size-xl: 1.25rem;     /* 20px */
--font-size-2xl: 1.5rem;     /* 24px */
--font-size-3xl: 1.875rem;   /* 30px */
--font-size-4xl: 2.25rem;    /* 36px */
```

---

### 7️⃣ **Thay Đổi Navigation Bar**

#### Logo & Branding
📍 **File:** `index.html` (dòng ~30)

```html
<div class="logo">
    <span class="logo-icon">🎭</span>  <!-- Thay emoji này -->
    <span class="logo-text">CLB Hub</span>  <!-- Thay tên branding -->
</div>
```

#### Menu Links
📍 **File:** `index.html` (dòng ~40)

```html
<ul class="nav-links">
    <li><a href="#categories" class="nav-link">Danh mục</a></li>
    <li><a href="#top-clubs" class="nav-link">Top Clubs</a></li>
    <li><a href="#tips" class="nav-link">Cẩm nang</a></li>
    <li><a href="#reviews" class="nav-link">Review</a></li>
</ul>
```

#### Nút Action
📍 **File:** `index.html` (dòng ~50)

```html
<button class="btn-ghost" onclick="handleLogin()">Đăng nhập</button>
<button class="btn-primary" onclick="smoothScroll('categories')">Khám phá ngay</button>
```

---

### 8️⃣ **Thay Đổi Footer**

#### Footer Links
📍 **File:** `index.html` (dòng ~370)

```html
<div class="footer-column">
    <h4>Điều hướng</h4>
    <ul>
        <li><a href="#categories">Danh mục CLB</a></li>
        <li><a href="#top-clubs">Top Clubs</a></li>
        <li><a href="#tips">Cẩm nang</a></li>
        <li><a href="#reviews">Review</a></li>
    </ul>
</div>
```

#### Social Media Links
📍 **File:** `index.html` (dòng ~395)

```html
<div class="social-icons">
    <a href="https://facebook.com/yourpage" class="social-icon facebook" title="Facebook">
        <span>f</span>
    </a>
    <a href="https://tiktok.com/@yourpage" class="social-icon tiktok" title="TikTok">
        <span>♪</span>
    </a>
    <a href="https://instagram.com/yourpage" class="social-icon instagram" title="Instagram">
        <span>📷</span>
    </a>
</div>
```

#### Copyright Text
```html
<p>&copy; 2026 CLB Hub ULIS. All rights reserved.</p>
```

---

## 💾 Cách Lưu & Kiểm Tra Thay Đổi

1. **Chỉnh sửa file** trong VS Code
2. **Lưu file** (Ctrl+S)
3. **Refresh trang** trong browser (F5 hoặc Ctrl+R)
4. Nếu không thấy thay đổi → **Xóa cache** (Ctrl+Shift+Delete)

---

## 🚨 Những Lỗi Thường Gặp

| Lỗi | Nguyên Nhân | Cách Sửa |
|-----|-----------|---------|
| Trang không thay đổi sau chỉnh sửa | Cache cũ | Xóa cache browser |
| Text bị cắt hoặc lỗi hiển thị | Dấu ngoặc thiếu | Kiểm tra cú pháp HTML/JS |
| Màu không thay đổi | Typo trong hex color | Dùng colorpicker để verify |
| CLB mới không xuất hiện | Quên thêm ID hoặc dấu phẩy | Kiểm tra cấu trúc JSON |

---

## 📚 Tham Khảo Thêm

- [HTML Tutorial](https://www.w3schools.com/html/)
- [CSS Tutorial](https://www.w3schools.com/css/)
- [JavaScript Tutorial](https://www.w3schools.com/js/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Tiếp theo:** Xem [GUIDE-IMAGES-TEXT.md](GUIDE-IMAGES-TEXT.md) để học cách thêm ảnh và text!
