# ĐẶC TẢ CHI TIẾT UI/UX LANDING PAGE "CLB HUB"

## 0. HỆ THỐNG NÚT BẤM CƠ BẢN (BUTTON DESIGN SYSTEM)
Trước khi đi vào chi tiết, toàn bộ trang web sẽ dùng 3 cấp độ nút bấm sau để định hướng hành vi người dùng:
1.  **Primary Button (Nút chính):** Nút quan trọng nhất. Dùng màu chủ đạo của thương hiệu (VD: Xanh dương ULIS hoặc màu Gradient nổi bật). Chữ màu trắng, bo góc tròn (border-radius: 8px). Trạng thái Hover (khi trỏ chuột) sẽ sáng lên và có hiệu ứng nhịp đập (Pulse effect).
2.  **Secondary/Outline Button (Nút phụ):** Nút viền màu, nền trong suốt. Dành cho các hành động ít quan trọng hơn.
3.  **Ghost/Text Button (Nút ẩn):** Chỉ là dòng chữ hoặc có nền xám nhạt, không viền.

---

## 1. HEADER (Thanh điều hướng cố định) & HERO SECTION (Màn hình chính)

### A. Thanh Navigation (Top Bar)
*   **Giao diện:** Nền trắng (hoặc Glassmorphism - hiệu ứng kính mờ trong suốt), bám dính trên cùng khi cuộn trang (Sticky).
*   **Hệ thống nút bấm (Góc phải):**
    *   `[ Đăng nhập ]`: **Text Button**. Khi hover, chữ đổi màu và gạch chân.
    *   `[ Trải nghiệm Guest Mode ]`: **Primary Button**. Nổi bật nhất trên thanh menu để khuyến khích sinh viên xem ngay mà không cần tạo tài khoản.

### B. Hero Section (Khu vực Banner)
*   **Giao diện:** Cấu trúc chia 2 cột (Split-screen). Bên trái là Text (Tiêu đề), bên phải là hình ảnh minh họa (hoặc ảnh cắt ghép 3D các hoạt động sinh viên năng động).
*   **Hệ thống nút bấm (Nằm dưới đoạn mô tả Text):**
    *   `[ 🔍 Khám phá CLB ngay ]` **(Primary Button):** Nhấn vào sẽ tự động cuộn (Smooth scroll) mượt mà xuống Section 2.
    *   `[ 🪄 Làm Quiz Ghép đôi ]` **(Secondary Button):** Nút viền nổi. Nhấn vào sẽ mở ra một Pop-up nhỏ hỏi 3 câu trắc nghiệm nhanh để hệ thống gợi ý CLB.

---

## 2. CATEGORY SECTION (Khu vực lõi: Lọc & Tìm kiếm CLB)

Đây là khu vực quan trọng nhất. Thay vì load sang một trang mới mỗi khi bấm vào CLB, chúng ta sẽ **sử dụng hoàn toàn cơ chế Pop-up (Modal)** để giữ chân người dùng ở lại luồng tìm kiếm.

### Bước 1: Giao diện Bộ lọc (Filter UI)
*   Sử dụng **Filter Chips (Các viên thuốc)** nằm ngang: `[ Tất cả ]` `[ Học thuật ]` `[ Nghệ thuật ]` `[ Kỹ năng ]` `[ Thể thao ]` `[ Tình nguyện ]`.
*   **Tương tác:** Khi chọn danh mục nào, nút đó sẽ đổi màu nền sang màu Primary (Active state), các nút khác giữ màu xám nhạt (Inactive state). Danh sách CLB bên dưới lập tức filter mượt mà (Fade in/out).

### Bước 2: Giao diện Thẻ CLB (Club Card UI)
*   Hiển thị dạng Lưới (Grid): 3 thẻ/hàng trên Desktop, 1 thẻ/hàng trên Mobile.
*   **Thành phần của 1 Card:**
    *   Ảnh Cover (tỉ lệ 16:9).
    *   Tag trạng thái: `🟢 Đang tuyển TV` (Màu xanh) hoặc `🔴 Đóng form` (Màu đỏ).
    *   Tên CLB & Mô tả rút gọn (2 dòng chữ, phần thừa hiển thị dấu "...").
*   **Nút bấm trên Card:**
    *   `[ 📄 Xem chi tiết ]` **(Ghost Button):** Nút màu xám nhạt nằm trải dài ở đáy Card. Khi hover, nút chuyển sang màu xanh. Bấm vào nút này sẽ **KÍCH HOẠT POP-UP**.

### Bước 3: GIAO DIỆN POP-UP CHI TIẾT CLB (The Detail Modal) 🔥
Đây là điểm chạm quyết định việc sinh viên có đăng ký hay không. 
*   **Backdrop (Nền mờ):** Khi Pop-up bật lên, toàn bộ background website phía sau sẽ bị làm tối mờ (Opacity 60%, Blur 5px) để tập trung 100% sự chú ý vào Pop-up.
*   **Cấu trúc Pop-up (Chia làm 3 phần - Scrollable ở giữa):**
    1.  **Header (Phần đầu):**
        *   Ảnh banner lớn của CLB. Logo CLB đè lên ở góc.
        *   **Nút Close `[ X ]`:** Nằm góc trên cùng bên phải, thiết kế dạng icon tròn nổi bật để người dùng dễ dàng tắt đi và chọn CLB khác.
    2.  **Body (Phần thân - Có thể cuộn dọc):** Sử dụng Icon để ngắt đoạn giúp dễ đọc:
        *   🕒 **Lịch sinh hoạt:** Text in đậm.
        *   🎯 **Hoạt động tiêu biểu:** Bullet points rõ ràng.
        *   💡 **Yêu cầu:** Giao diện dạng box màu vàng nhạt/cảnh báo nhẹ.
        *   🎁 **Quyền lợi:** Giao diện dạng box màu xanh lá/tích cực.
    3.  **Footer (Đáy Pop-up - Bám dính):** Khi người dùng cuộn đọc thông tin, phần đáy này LUÔN ĐỨNG YÊN.
        *   **Nút bấm CTA chính:** `[ ✍️ Điền Form Đăng Ký Phỏng Vấn ]` **(Primary Button - Full width).** Nút này thiết kế to, màu sắc nổi bật nhất (VD: Đỏ cam hoặc Xanh dương đậm), có hiệu ứng nhấp nháy nhẹ để kích thích thao tác click. Chuyển hướng thẳng sang Google Form.

---

## 3. TOP RATED SECTION (Bảng vàng CLB)

*   **Giao diện:** Thiết kế dạng **Coverflow Slider** (Băng chuyền). Sẽ có 3 Card hiển thị trên màn hình, thẻ ở giữa to và rõ nhất, 2 thẻ bên cạnh mờ và nhỏ hơn.
*   **Card Design:** Thiết kế sang trọng hơn Section 2. Có thêm ruy băng `🏆 Top 1 Học thuật` gắn ở góc thẻ.
*   **Hệ thống nút bấm:**
    *   `[ < ]` và `[ > ]` **(Navigation Buttons):** Nút điều hướng hình mũi tên ở 2 bên trái/phải để vuốt xem các top CLB.
    *   `[ Khám phá CLB ]` **(Primary Button):** Nằm ngay trên Card ở giữa. Khi bấm vào, cũng **kích hoạt Pop-up chi tiết** tương tự như Section 2.

---

## 4. REVIEW SECTION (Review ẩn danh)

*   **Giao diện:** Dạng **Masonry Grid** (Lưới gạch so le, giống giao diện của Pinterest). Các lời nhận xét dài ngắn khác nhau sẽ tự động xếp khít vào nhau.
*   **UI Components:**
    *   Hình Avatar mặc định dạng "Ẩn danh" (Ví dụ: Icon mặt cười đeo kính đen).
    *   Rating 5 sao vàng (Icon SVG tĩnh).
*   **Tương tác (Hover Effect):** Không có nút bấm hành động ở đây. Nhưng khi chuột trỏ vào một khung Review, khung đó sẽ có hiệu ứng **Elevation (Nâng lên)** và đổ bóng to hơn (Drop shadow), giúp trải nghiệm đọc không bị nhàm chán.

---

## 5. TIPS & EXPERIENCE SECTION (Cẩm nang đi CLB)

*   **Giao diện:** Dạng **Accordion (Menu thả xuống)**. Đây là dạng UI tối ưu nhất cho phần FAQs/Tips vì nó tiết kiệm diện tích. Ban đầu chỉ hiển thị các Tiêu đề (Ví dụ: *1. Bí kíp vượt qua vòng phỏng vấn*).
*   **Hệ thống nút bấm (Icon Button):**
    *   Mỗi tiêu đề sẽ có một icon dấu `[ + ]` hoặc mũi tên `[ ˅ ]` ở bên phải. 
    *   Khi click vào box chứa tiêu đề, nội dung chi tiết sẽ xổ xuống mượt mà (Slide down animation), đồng thời icon `[ + ]` sẽ xoay 45 độ thành dấu `[ X ]` hoặc `[ ^ ]`.

---

## 6. FOOTER (Chân trang)

*   **Giao diện:** Nền màu tối (Dark background) để kết thúc trang web, tạo độ tương phản với các section màu sáng ở trên.
*   **Hệ thống nút bấm:**
    *   Các Text links về các chính sách (nếu có).
    *   **Social Icons Button:** Các nút hình tròn chứa Logo Facebook, Tiktok, Instagram của dự án CLB Hub. Khi hover vào, nút tự động fill màu của mạng xã hội đó (Ví dụ: Hover vào Facebook icon thì nền nút chuyển xanh dương).