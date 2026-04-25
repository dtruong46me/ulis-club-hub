# 🚀 Hướng Dẫn Deploy Landing Page CLB Hub

## 📌 Các Phương Pháp Deploy

Landing page có thể deploy lên nhiều nền tảng khác nhau. Dưới đây là những cách phổ biến nhất:

---

## 1️⃣ **Deploy Lên Vercel (Dễ Nhất)**

### Ưu Điểm:
- ✅ Free tier khá generous
- ✅ Deploy tự động từ GitHub
- ✅ Domain tự động (yoursite.vercel.app)
- ✅ Performance tốt, CDN toàn cầu

### Bước 1: Chuẩn Bị GitHub Repository

```bash
# Clone repository (nếu chưa có)
git clone https://github.com/your-username/ulis-club-hub.git
cd ulis-club-hub/landing-page

# Initialize git nếu chưa có
git init

# Add files
git add .
git commit -m "Initial commit: CLB Hub landing page"

# Push to GitHub
git remote add origin https://github.com/your-username/ulis-club-hub.git
git push -u origin main
```

### Bước 2: Deploy Với Vercel

1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub account
3. Click "New Project"
4. Chọn repository `ulis-club-hub`
5. Cấu hình:
   - **Framework Preset:** Other (hoặc Next.js nếu muốn)
   - **Root Directory:** `landing-page`
   - **Build Command:** (để trống)
   - **Output Directory:** `.`
6. Click "Deploy"

### Bước 3: Custom Domain (Optional)

1. Vào project settings
2. Click "Domains"
3. Thêm domain custom:
   - `club-hub.ulis.edu.vn` (nếu có)

### Cập Nhật Content:
```bash
git add .
git commit -m "Update club data"
git push
# Vercel sẽ tự động deploy
```

---

## 2️⃣ **Deploy Lên Netlify**

### Ưu Điểm:
- ✅ Cũng free tier tốt
- ✅ Dễ cập nhật content
- ✅ Hỗ trợ form submission

### Bước 1: Chuẩn Bị

Đảm bảo code đã commit và push lên GitHub

### Bước 2: Deploy

1. Truy cập [netlify.com](https://netlify.com)
2. Đăng nhập bằng GitHub
3. Click "New site from Git"
4. Chọn repository
5. Cấu hình:
   - **Base directory:** `landing-page`
   - **Build command:** (để trống)
   - **Publish directory:** `.`
6. Click "Deploy site"

### Cập Nhật:
```bash
git add .
git commit -m "Update content"
git push
# Netlify sẽ tự động deploy
```

---

## 3️⃣ **Deploy Lên GitHub Pages**

### Ưu Điểm:
- ✅ Miễn phí, tích hợp GitHub
- ✅ Không cần card tín dụng
- ✅ Deploy đơn giản

### Bước 1: Cấu Hình Repository

1. Vào GitHub repository
2. Settings → Pages
3. Chọn "Deploy from a branch"
4. Chọn branch: `main`
5. Chọn folder: `/landing-page`

### Bước 2: Cập Nhật Code

```bash
git add .
git commit -m "Update landing page"
git push origin main
# GitHub Pages sẽ tự động deploy trong vài phút
```

### Truy Cập:
- URL: `https://your-username.github.io/ulis-club-hub/landing-page`

---

## 4️⃣ **Deploy Lên Server (VPS/Hosting)**

### Phù Hợp Cho:
- Các trường đại học có hosting riêng
- Domain của trường (club-hub.ulis.edu.vn)

### Yêu Cầu:
- SSH access tới server
- Web server (Nginx/Apache)

### Cách Deploy:

#### Cách 1: Upload FTP

1. Kết nối FTP với server
2. Upload thư mục `landing-page` lên thư mục public
3. Truy cập qua domain

#### Cách 2: Git Deploy

```bash
# SSH vào server
ssh user@server.com

# Clone repository
cd /var/www
git clone https://github.com/your-username/ulis-club-hub.git

# Tạo symbolic link
ln -s /var/www/ulis-club-hub/landing-page /var/www/html/club-hub

# Cấu hình Nginx (nếu cần)
# Thêm config vào /etc/nginx/sites-available/default
```

#### Cấu Hình Nginx:
```nginx
server {
    listen 80;
    server_name club-hub.ulis.edu.vn;
    root /var/www/html/club-hub;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

#### Khởi động lại Nginx:
```bash
sudo systemctl restart nginx
```

---

## 5️⃣ **Deploy Lên Firebase Hosting**

### Ưu Điểm:
- ✅ CDN nhanh
- ✅ Free tier tốt
- ✅ Có SSL tự động

### Bước 1: Cài Đặt Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

### Bước 2: Khởi Tạo Firebase

```bash
cd landing-page
firebase init hosting
```

Chọn cấu hình:
- **Select default Firebase project:** (Tạo project mới hoặc chọn cái cũ)
- **Public directory:** `.` (hoặc `./`)
- **Configure as single-page app:** `Y` (Yes)

### Bước 3: Deploy

```bash
firebase deploy
```

URL sẽ như: `https://your-project.web.app`

### Cập Nhật:
```bash
firebase deploy
```

---

## 6️⃣ **Deploy Lên AWS S3 + CloudFront**

### Cho Những Dự Án Lớn:

```bash
# Cài AWS CLI
pip install awscli

# Configure
aws configure

# Tạo S3 bucket
aws s3 mb s3://club-hub-ulis

# Upload files
aws s3 sync . s3://club-hub-ulis --delete

# CloudFront distribution
# (Cần cấu hình qua AWS console)
```

---

## 🔒 HTTPS & SSL Certificate

### Vercel/Netlify/Firebase:
- ✅ Tự động SSL (MIỄN PHÍ)

### Server Riêng:
Dùng **Let's Encrypt**:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d club-hub.ulis.edu.vn
```

---

## 🌍 Custom Domain Mapping

### Bước 1: Mua Domain (Nếu Cần)
- GoDaddy, Namecheap, Google Domains, ...

### Bước 2: Cấu Hình DNS

#### Trỏ Tên Miền Sang Vercel:
1. Vào Vercel dashboard → Project Settings → Domains
2. Thêm domain
3. Copy nameservers mà Vercel cung cấp
4. Vào DNS provider, sửa nameservers thành của Vercel

#### Trỏ Tên Miền Sang Netlify:
Tương tự như Vercel

#### Trỏ Tên Miền Sang Server:
Thêm A record:
```
Type: A
Host: @
Value: [IP của server]
TTL: 3600
```

---

## 📊 SEO & Analytics

### 1. Google Analytics

Thêm vào `index.html` (trước `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Thay `G-XXXXXXXXXX` bằng tracking ID của bạn

### 2. Google Search Console

1. Truy cập [search.google.com/search-console](https://search.google.com/search-console)
2. Add property với domain
3. Xác thực domain
4. Submit sitemap

### 3. Open Graph (Social Share)

Thêm vào `<head>`:

```html
<meta property="og:title" content="CLB Hub - Tìm Kiếm Câu Lạc Bộ">
<meta property="og:description" content="Hệ thống tìm kiếm và đăng ký câu lạc bộ cho sinh viên ULIS">
<meta property="og:image" content="https://example.com/og-image.png">
<meta property="og:url" content="https://club-hub.ulis.edu.vn">
<meta property="og:type" content="website">
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions (Tự động Deploy)

Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: landing-page
```

---

## 📈 Performance Optimization

### 1. Image Optimization

```javascript
// Lazy loading (đã có sẵn trong main.js)
// Nhưng để bảo đảm, có thể thêm:
<img src="..." loading="lazy" alt="...">
```

### 2. Cache Busting

Thêm version query string:
```html
<script src="assets/js/main.js?v=1.0"></script>
<link rel="stylesheet" href="assets/css/styles.css?v=1.0">
```

### 3. Minify Files

```bash
# Install minifiers
npm install -g terser csso-cli

# Minify JS
terser assets/js/main.js -o assets/js/main.min.js

# Minify CSS
csso assets/css/styles.css -o assets/css/styles.min.css
```

---

## 🧪 Testing Trước Deploy

### 1. Lighthouse Audit (Chrome DevTools)
- F12 → Lighthouse → Analyze page load

### 2. Mobile Test
- Dùng Chrome DevTools device mode
- Test trên iPhone/Android thực tế

### 3. Cross-browser Test
- Chrome, Firefox, Safari, Edge

### 4. Performance Check
- Lighthouse score ≥ 90 (Performance)
- Page load time < 3 giây

---

## 📝 Troubleshooting Deploy

| Vấn Đề | Giải Pháp |
|--------|---------|
| Build failed | Kiểm tra error message, đảm bảo file paths đúng |
| 404 Not Found | Kiểm tra root directory và index.html |
| Images not loading | Sửa đường dẫn ảnh, dùng absolute path |
| Domain not resolving | Đợi DNS propagate (24-48h), kiểm tra DNS settings |
| HTTPS error | Let's Encrypt cert, check SSL configuration |

---

## 📋 Deployment Checklist

### Trước Deploy:
- [ ] Tất cả ảnh đã được thêm
- [ ] Links Google Form đúng
- [ ] Social media links cập nhật
- [ ] Không có console errors (F12)
- [ ] Responsive design ok trên mobile
- [ ] Performance ok (Lighthouse ≥ 80)

### Sau Deploy:
- [ ] Website load được qua domain
- [ ] Tất cả functionality hoạt động
- [ ] Images hiển thị đúng
- [ ] Forms submit được
- [ ] Mobile view ok
- [ ] Analytics được ghi nhận

---

## 🎯 Recommendation

**Cho dự án này, khuyến nghị dùng:**
1. **Vercel** hoặc **Netlify** - Nhanh, dễ, free
2. **GitHub Pages** - Nếu domain có sẵn
3. **Firebase Hosting** - Nếu cần tích hợp Firebase backend

---

## 📞 Support

Nếu gặp vấn đề:
1. Kiểm tra lại documentation
2. Xem lại error message
3. Liên hệ deployment provider support

---

**Xong! Landing page của bạn đã sẵn sàng deploy! 🎉**
