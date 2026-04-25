# ⚡ Quick Start Guide - CLB Hub Landing Page

> Hướng dẫn nhanh để bắt đầu trong 5 phút

---

## 🎯 5 Bước Để Chạy Landing Page

### 1️⃣ **Mở Thư Mục Dự Án**
```
landing-page/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/data.js
│   ├── js/main.js
│   └── images/
```

### 2️⃣ **Chạy Server Cục Bộ** (Chọn 1 trong 3)

#### Option A: Live Server (VS Code) - ✨ **Dễ nhất**
- Cài [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Right-click `index.html` → "Open with Live Server"
- ✅ Xong! Trang sẽ tự động mở

#### Option B: Python
```bash
cd landing-page
python -m http.server 8000
```
Truy cập: `http://localhost:8000`

#### Option C: Node.js
```bash
npm install -g http-server
http-server landing-page
```

### 3️⃣ **Xem Trang Web**
- 🖥️ Desktop: `http://localhost:8000`
- 📱 Mobile: Nhấn F12 → Device mode
- Thử filter CLB, click "Xem chi tiết", v.v.

### 4️⃣ **Chỉnh Sửa Nội Dung**
📍 Chỉ cần sửa file `assets/js/data.js`:

```javascript
// Thêm CLB mới
{
    id: 15,
    name: 'Your New Club',
    category: 'academic',
    status: true,
    description: 'Add description here...',
    schedule: 'Thứ 5 hàng tuần, 18:30-20:00',
    activities: '• Activity 1\n• Activity 2',
    requirements: 'Requirements here',
    benefits: 'Benefits here',
    formLink: 'https://forms.gle/...',
    image: 'assets/images/club.jpg',
    rating: 4.8,
    members: 100,
    years: 2
}
```

### 5️⃣ **Deploy (Optional)**
Khi sẵn sàng, deploy lên Vercel:
```bash
# Cần có git và GitHub account
git add .
git commit -m "Update clubs"
git push
# Deploy tự động! ✨
```

---

## 📝 Chỉnh Sửa Nhanh (Top 5)

| Mục | File | Dòng | Thay Đổi |
|-----|------|------|---------|
| **Tiêu đề trang** | `index.html` | 7 | `<title>...` |
| **Hero Title** | `index.html` | 85 | `<h1>...` |
| **Thêm CLB** | `assets/js/data.js` | 80+ | Thêm object CLB |
| **Đổi màu** | `assets/css/styles.css` | 12 | `--primary-color: ...` |
| **Footer text** | `index.html` | 370 | `<p>...` |

---

## 🎨 Các Danh Mục CLB

```javascript
category: 'academic'   // 📚 Học thuật
category: 'skill'      // 🎯 Kỹ năng
category: 'art'        // 🎨 Nghệ thuật
category: 'sport'      // ⚽ Thể thao
category: 'volunteer'  // 🤝 Tình nguyện
```

---

## 🖼️ Thêm Ảnh CLB

### 1. Upload ảnh vào thư mục:
```
assets/images/club-images/my-club.jpg
```

### 2. Cập nhật trong `data.js`:
```javascript
image: 'assets/images/club-images/my-club.jpg'
```

### 3. Hoặc dùng URL:
```javascript
image: 'https://via.placeholder.com/400x300?text=My+Club'
```

---

## ✨ Tính Năng Có Sẵn

- ✅ Responsive design (Desktop/Tablet/Mobile)
- ✅ Filter CLB theo danh mục
- ✅ Modal chi tiết CLB
- ✅ Quiz matchmaking
- ✅ Top clubs carousel
- ✅ Reviews section
- ✅ Tips accordion
- ✅ Smooth animations

---

## 🧪 Kiểm Tra Responsive

Nhấn **F12** trong browser:
1. Click device icon (📱)
2. Chọn các thiết bị:
   - iPhone 12
   - iPad
   - Desktop

Giao diện phải thích ứng tự động ✨

---

## 🐛 Vấn Đề Thường Gặp

| Vấn Đề | Giải Pháp |
|--------|---------|
| Trang không update | Ctrl+Shift+Delete (xóa cache) |
| Ảnh không hiển thị | Kiểm tra đường dẫn file ảnh |
| Modal không mở | Kiểm tra console (F12) có error không |
| Responsive bị lỗi | Reload page (Ctrl+R) |

---

## 📚 Tài Liệu Chi Tiết

Để tìm hiểu sâu hơn:

| Tài Liệu | Mục Đích |
|---------|---------|
| [README.md](README.md) | Giới thiệu dự án |
| [GUIDE-SETUP.md](GUIDE-SETUP.md) | Cách chạy & troubleshooting |
| [GUIDE-EDITING.md](GUIDE-EDITING.md) | Chỉnh sửa tất cả nội dung |
| [GUIDE-IMAGES-TEXT.md](GUIDE-IMAGES-TEXT.md) | Thêm ảnh & text |
| [GUIDE-DEPLOYMENT.md](GUIDE-DEPLOYMENT.md) | Deploy lên web |

---

## 🚀 Deploy Cực Nhanh

### Vercel (Khuyến nghị)
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập GitHub
3. Import repository
4. Xong! 🎉

### Netlify
1. Truy cập [netlify.com](https://netlify.com)
2. Đăng nhập GitHub
3. Drop & drop thư mục
4. Xong! 🎉

---

## 📞 Cần Giúp?

1. **Lỗi trong browser:** Nhấn F12 → Console tab
2. **Tìm trong documentation:** [Xem các guide](README.md)
3. **Liên hệ:** Team phát triển

---

## 🎉 Tiếp Theo

- ✅ Chạy landing page thành công
- 📝 Chỉnh sửa nội dung theo ý
- 🖼️ Thêm ảnh CLB thực tế
- 🚀 Deploy lên web

**Xong! Bây giờ bạn có một landing page chuyên nghiệp cho CLB Hub! 🎉**

---

<div align="center">

**Cần chi tiết hơn? Xem [README.md](README.md) 📚**

</div>
