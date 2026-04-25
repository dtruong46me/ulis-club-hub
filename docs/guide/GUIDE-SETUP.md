# 📖 Hướng Dẫn Thiết Lập và Chạy Landing Page CLB Hub

## 📋 Yêu Cầu Hệ Thống

- **Web Browser:** Chrome, Firefox, Safari, Edge (phiên bản gần đây)
- **Server:** Cần một web server để chạy locally (hoặc deploy trực tiếp)
- **Text Editor:** VS Code hoặc editor khác để chỉnh sửa code

## 🚀 Cách Chạy Trên Máy Local

### Phương Pháp 1: Sử dụng Live Server (VS Code)

1. **Cài đặt Live Server extension:**
   - Mở VS Code
   - Vào Extensions (Ctrl+Shift+X)
   - Tìm "Live Server" của Ritwick Dey
   - Click Install

2. **Chạy landing page:**
   - Mở thư mục `landing-page` trong VS Code
   - Right-click vào file `index.html`
   - Chọn "Open with Live Server"
   - Trang web sẽ tự động mở trong trình duyệt tại `http://127.0.0.1:5500`

### Phương Pháp 2: Sử dụng Python (HTTP Server)

#### Trên Windows:
```bash
cd d:\Projects\ulis-club-hub\landing-page
python -m http.server 8000
```

Sau đó truy cập: `http://localhost:8000`

#### Trên macOS/Linux:
```bash
cd ~/Projects/ulis-club-hub/landing-page
python3 -m http.server 8000
```

### Phương Pháp 3: Sử dụng Node.js (http-server)

1. **Cài đặt http-server:**
   ```bash
   npm install -g http-server
   ```

2. **Chạy server:**
   ```bash
   cd landing-page
   http-server
   ```

3. Truy cập: `http://localhost:8080`

## 📁 Cấu Trúc Thư Mục

```
landing-page/
├── index.html                 # File HTML chính
├── assets/
│   ├── css/
│   │   └── styles.css        # CSS responsive cho cả 3 thiết bị
│   ├── js/
│   │   ├── data.js           # Dữ liệu CLB, reviews, tips
│   │   └── main.js           # Logic JavaScript chính
│   └── images/               # Thư mục chứa hình ảnh
│       ├── hero-illustration.png
│       ├── hero-background.mp4
│       └── [club images...]
├── README.md                  # Giới thiệu về dự án
├── GUIDE-SETUP.md            # Hướng dẫn này
├── GUIDE-EDITING.md          # Hướng dẫn chỉnh sửa nội dung
├── GUIDE-IMAGES-TEXT.md      # Hướng dẫn thêm ảnh và text
└── GUIDE-DEPLOYMENT.md       # Hướng dẫn deploy
```

## 🎯 Kiểm Tra Responsive Design

Landing page được thiết kế responsive cho:

### 🖥️ **Desktop** (1200px+)
- Hiển thị đầy đủ 3 cột grid cho CLB cards
- Navbar đầy đủ với menu center
- Hero section 2 cột

### 📱 **Tablet** (768px - 1199px)
- Grid 2 cột cho CLB cards
- Navbar center ẩn
- Hero section 1 cột

### 📲 **Mobile** (480px - 767px)
- Grid 1 cột cho CLB cards
- Navbar đơn giản, responsive
- Hero section 1 cột, không hiển thị hình

### Cách kiểm tra:
1. Mở browser, nhấn **F12** để mở DevTools
2. Nhấn **Ctrl+Shift+M** để toggle device mode
3. Chọn các thiết bị khác nhau để xem giao diện

## 🔍 Các Tính Năng Chính

### ✅ Hoàn chỉnh
- ✓ Sticky Navigation Bar
- ✓ Hero Section với CTA buttons
- ✓ Category Filter System
- ✓ Club Cards Grid (Responsive)
- ✓ Club Detail Modal Pop-ups
- ✓ Top Rated Carousel
- ✓ Reviews Masonry Grid
- ✓ Tips Accordion
- ✓ Footer với Social Links
- ✓ Quiz Modal cho Matchmaking
- ✓ Smooth Scrolling
- ✓ Responsive Design (Mobile/Tablet/Desktop)

### 📋 Danh Sách CLB Mẫu
Landing page đi kèm với **13 câu lạc bộ mẫu** từ 5 danh mục:
- 📚 Học thuật: 3 CLB
- 🎯 Kỹ năng: 2 CLB
- 🎨 Nghệ thuật: 3 CLB
- ⚽ Thể thao: 3 CLB
- 🤝 Tình nguyện: 2 CLB

### 📝 Review & Tips
- 9 reviews từ thành viên
- 6 tips & hướng dẫn từ cộng đồng

## 🐛 Troubleshooting

### Trang không load hình ảnh
**Vấn đề:** Hình ảnh hiển thị placeholder
**Giải pháp:** Thêm hình ảnh vào thư mục `assets/images/` và cập nhật đường dẫn trong `data.js`

### Video hero không phát
**Vấn đề:** Hero background video không hiển thị
**Giải pháp:** 
- Thêm file `hero-background.mp4` vào `assets/images/`
- Hoặc bỏ video và dùng ảnh nền: xoá tag `<video>` và dùng `background-image` CSS

### Modal không hoạt động
**Vấn đề:** Click "Xem chi tiết" không mở modal
**Giải pháp:** 
- Kiểm tra browser console (F12) có error không
- Đảm bảo tất cả JS files đã được import đúng

### Responsive bị lỗi
**Vấn đề:** Giao diện không hiển thị đúng trên mobile
**Giải pháp:**
- Kiểm tra thẻ `<meta name="viewport">` trong HTML
- Xóa cache browser (Ctrl+Shift+Delete)

## 📞 Hỗ Trợ & Liên Hệ

Nếu có vấn đề, hãy:
1. Kiểm tra browser console (F12 → Console)
2. Xem lại các file như đã hướng dẫn
3. Liên hệ team phát triển

---

**Tiếp theo:** Xem [GUIDE-EDITING.md](GUIDE-EDITING.md) để học cách chỉnh sửa nội dung!
