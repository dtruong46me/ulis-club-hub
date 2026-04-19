# TÀI LIỆU PHÂN TÍCH VÀ THIẾT KẾ LANDING PAGE: "CLB HUB"

## I. MỤC TIÊU DỰ ÁN (PROJECT OBJECTIVES)
*   **Business Goal (Mục tiêu nghiệp vụ):** Số hóa quá trình tìm kiếm và đăng ký CLB, tăng tỷ lệ tiếp cận (Reach) và chuyển đổi (Conversion Rate - sinh viên điền form đăng ký).
*   **Unique Value Proposition (Giá trị cốt lõi):** Tính năng "Matchmaking" (Ghép đôi) giúp cá nhân hóa trải nghiệm tìm kiếm dựa trên insight của sinh viên (ngành học, sở thích, quỹ thời gian).
*   **Target Audience (Người dùng mục tiêu):** Sinh viên đại học (đặc biệt là tân sinh viên) có nhu cầu tìm kiếm cộng đồng sinh hoạt.

## II. CẤU TRÚC THÔNG TIN & THIẾT KẾ GIAO DIỆN (WIREFRAME & UI/UX LAYOUT)

Landing page sẽ được thiết kế theo cấu trúc **Single-page Scroll** (Cuộn trang dọc) kết hợp **Sticky Navbar** (Thanh điều hướng cố định), tối ưu hóa trải nghiệm trên cả Mobile và Desktop (Responsive Design).

### 1. Global Navigation Bar (Thanh điều hướng cố định)
*   **Vị trí:** Top of page (Luôn bám sát mép trên màn hình khi scroll).
*   **UI Components:**
    *   **Left:** Logo "CLB Hub".
    *   **Center:** Menu links (Danh mục | Top Clubs | Cẩm nang | Review).
    *   **Right (Authentication Module):** 
        *   Nút Text link: `Đăng nhập / Đăng ký`
        *   Nút Primary Button (Nổi bật): `Khám phá ngay (Guest Mode)` - *Lưu ý: Giảm rào cản người dùng (Friction) bằng cách cho phép xem trước không cần tạo tài khoản.*

### 2. Hero Section (Khu vực màn hình đầu tiên - Above the fold)
Khu vực này quyết định 80% việc người dùng có ở lại trang hay không.
*   **Background UI:** Sử dụng Dynamic Video Banner hoặc Carousel Image chất lượng cao, ghi lại khoảnh khắc năng động của các CLB. Có phủ lớp Overlay tối màu để làm nổi bật text.
*   **Copywriting (Typography to & rõ ràng):**
    *   *Heading (H1):* CLB HUB - GHÉP ĐÔI CLB: BẾN ĐỖ THANH XUÂN CỦA BẠN.
    *   *Sub-heading (H2):* Hệ thống đề xuất và tìm kiếm câu lạc bộ thông minh dành riêng cho sinh viên ULIS.
*   **Call-to-Action (CTA):** Đặt 1 nút bấm (Buttons) `[ Tìm CLB ngay ]` (Primary Button - Anchor link cuộn xuống Section 2).

### 3. Category & Discovery Section (Hệ thống phân loại & Lọc dữ liệu)
*   **Tên Section:** Khám phá hệ sinh thái CLB.
*   **UI/UX Interaction:** Cấu trúc **Tab View** (Dạng thẻ) hoặc **Filter Chips** (Các nút lọc tròn) để người dùng chuyển đổi qua lại giữa 5 danh mục: *Học thuật | Kỹ năng mềm | Nghệ thuật | Thể thao | Tình nguyện.*
*   **Data Card Component (Giao diện hiển thị 1 CLB):** Sử dụng dạng **Grid Layout (Lưới)**. Mỗi CLB hiển thị dưới dạng một Card (Thẻ) với các trường dữ liệu (Data Fields):
    *   *Thumbnail Image:* Ảnh đại diện tỉ lệ 16:9.
    *   *Badges/Tags:* Nhãn trạng thái nổi bật (VD: `🔴 Đang tuyển TV` hoặc `⏳ Sắp đóng form`).
    *   *Card Title:* Tên CLB (VD: AC4U - Art Club).
    *   *Short Description:* Mô tả rút gọn (Max 100 characters).
    *   *Expand Button:* Nút `[ Xem chi tiết ]`. Mở ra một **Popup/Modal (Light-box)** thay vì load sang trang mới để giữ chân người dùng. Trong Modal sẽ hiển thị chi tiết (Lịch sinh hoạt, Quyền lợi, Yêu cầu...) và chứa **Action Button** `[ Link Google Form Đăng Ký ]`.

### 4. Highlight Section (Top CLB Yêu thích nhất)
*   **Tên Section:** 🏆 Bảng Vàng CLB (Top Rated).
*   **UI Components:** Cấu trúc **Horizontal Carousel/Slider** (Thanh trượt ngang) với hiệu ứng Auto-play. 
*   **Logic hiển thị:** Truy xuất dữ liệu (Data mapping) chọn ra 1 CLB có chỉ số đánh giá cao nhất từ mỗi danh mục để hiển thị.
*   **Visual Design:** Dùng các gam màu Gradient hoặc viền Neon để tạo cảm giác "Premium" (Cao cấp) cho các CLB lọt Top. Hiển thị thêm các "Social Proof Metrics" (Chỉ số tin cậy) như: *Số năm hoạt động, Số lượng thành viên hiện tại.*

### 5. Social Proof Section (Hệ thống Rating & Feedback)
*   **Tên Section:** Review thật từ "Người trong cuộc".
*   **UI Components:** Sử dụng **Masonry Grid Layout** (Dạng lưới gạch nung giống Pinterest) để hiển thị các khung review.
*   **Tính năng (Feature):**
    *   *Star Rating Icon:* Hiển thị 5 sao tĩnh `⭐⭐⭐⭐⭐`.
    *   *Anonymous Tag:* Tên người dùng hiển thị dạng `Ẩn danh - Cựu thành viên CLB...` để tăng tính khách quan và bảo mật.
    *   *Hover Effect:* Khi trỏ chuột vào một khung review, khung đó sẽ có hiệu ứng đổ bóng (Box-shadow) và nâng nhẹ lên để tạo độ sâu.

### 6. Knowledge Base / Blog Section (Góc cẩm nang)
*   **Tên Section:** Hành trang "Nhập môn" CLB.
*   **UI Components:** Dạng **Accordion (Danh sách thả xuống)** hoặc **Flip Cards (Thẻ lật 2 mặt)** giúp tiết kiệm không gian (White-space) của trang.
*   **Nội dung:** Chuyển các lời khuyên thành các "Rule of thumb" (Quy tắc cơ bản).
    *   *VD: Rule 1: Thử nghiệm không giới hạn.*
    *   *VD: Rule 2: Quản lý rủi ro "Deadline" (Cân bằng thời gian).*

### 7. Footer (Chân trang)
*   **Layout:** Dark mode (Nền tối chữ sáng) để phân tách rõ ràng với nội dung trang.
*   **Components:**
    *   *Message box:* Thư gửi từ team phát triển (Font chữ Handwriting để tạo sự gần gũi).
    *   *Sitemap:* Link nhanh đến các phần của trang.
    *   *Legal & Social:* Copyright © 2026 CLB Hub. Các icon liên kết đến Facebook/Tiktok của dự án.

---

## III. YÊU CẦU KỸ THUẬT (TECHNICAL & NON-FUNCTIONAL REQUIREMENTS)

Là BA, mình đề xuất team Lập trình/Thiết kế chú ý các điểm sau:
1.  **Lazy Loading:** Do trang web chứa rất nhiều hình ảnh (ít nhất 25-35 ảnh CLB), cần áp dụng kỹ thuật tải trang trễ (Lazy Load) cho Section 3, 4, 5 để tối ưu hóa Tốc độ tải trang (Page Load Speed) xuống dưới 3 giây.
2.  **Responsive Design:** Trải nghiệm trên Mobile (Mobile-first). Các dạng Grid 3 cột trên Desktop phải tự động chuyển thành Grid 1 cột (Stack layout) trên điện thoại để người dùng dễ vuốt (Swipe).
3.  **Tracking & Analytics (Hệ thống đo lường):** 
    *   Gắn các **UTM Tracking** hoặc Event Tag vào các nút `[Đăng ký ngay]` (Link Google Form).
    *   Tích hợp Google Analytics để đo lường *Click-through Rate (CTR)* của từng CLB (CLB nào đang được click xem nhiều nhất).
4.  **Database Structure (Gợi ý trường dữ liệu cơ bản cho CLB):**
    `Club_ID` | `Club_Name` | `Category` | `Status_Recruitment (True/False)` | `Description` | `Schedule` | `Requirements` | `Benefits` | `Form_Link` | `Cover_Image_URL` | `Rating_Score`
5.  **Accessibility (Khả năng tiếp cận):** Đảm bảo tuân thủ các tiêu chuẩn WCAG 2.1 (Web Content Accessibility Guidelines) để mọi sinh viên, kể cả những người có khuyết tật, đều có thể sử dụng trang web một cách dễ dàng.