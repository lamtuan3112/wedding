# 💍 Website Thiệp Cưới Online Cao Cấp (HTML, CSS, JS)

Website thiệp cưới online giao diện sang trọng, tinh tế, tối ưu trải nghiệm trên cả điện thoại (Mobile) và máy tính (PC). Trang web sẵn sàng để tải và xuất bản miễn phí lên **GitHub Pages**.

---

## 🌟 Các Tính Năng Nổi Bật

- 🎨 **Giao diện Glassmorphism & Gold Luxury**: Tone màu hồng kem, đỏ vang & vàng kim sang trọng, chuẩn SEO & Responsive 100%.
- ⚙️ **Tùy chỉnh thông tin 1-Click (`js/config.js`)**: Thay đổi tên Chú Rể, Cô Dâu, Ngày Cưới, Địa Điểm, STK Ngân Hàng, Album Ảnh chỉ trong 1 file cấu hình!
- 🎵 **Floating Audio Player**: Trình phát nhạc nền lãng mạn kèm sóng nhạc và hiệu ứng cánh hoa anh đào rơi nhẹ nhàng.
- ⏳ **Đồng Hồ Đếm Ngược (Countdown Timer)**: Tính thời gian thực tới giây phút cử hành hôn lễ.
- 👩‍❤️‍👨 **Hành Trình Tình Yêu (Love Story Timeline)**: Dòng thời gian mốc kỉ niệm đôi lứa.
- 📅 **Lịch Cưới & Bản Đồ**: Tích hợp trực tiếp nút *Xem Bản Đồ (Google Maps)* và *Thêm Vào Lịch (Google Calendar)*.
- 📸 **Album Ảnh Cưới Lightbox**: Xem ảnh cưới phóng to toàn màn hình với hiệu ứng chuyển trang mượt mà.
- ✉️ **Xác Nhận Tham Dự (RSVP)**: Form xác nhận dành cho khách mời (lưu tự động vào máy).
- 💳 **Hộp Mừng Cưới (QR Bank Transfer Modal)**: Popup mã QR VietQR kèm nút bấm sao chép nhanh số tài khoản ngân hàng.
- 📝 **Sổ Lưu Bút Online (Guestbook)**: Khách mời dễ dàng gửi lời chúc và xem lời chúc tức thì.

---

## 🚀 Hướng Dẫn Tùy Chỉnh Nội Dung Dễ Dàng

Bạn không cần biết code HTML phức tạp! Chỉ cần mở file **`js/config.js`** bằng Notepad hoặc VS Code và sửa các thông tin sau:

```javascript
const WEDDING_CONFIG = {
  couple: {
    groom: {
      name: "Tên Chú Rể Đầy Đủ",
      shortName: "Nhật Minh",
      father: "Tên Thân Phụ",
      mother: "Tên Thân Mẫu",
      avatar: "link_anh_chu_re.jpg"
    },
    bride: {
      name: "Tên Cô Dâu Đầy Đủ",
      shortName: "Khánh Linh",
      father: "Tên Thân Phụ",
      mother: "Tên Thân Mẫu",
      avatar: "link_anh_co_dau.jpg"
    }
  },

  // Ngày đám cưới chính (Năm - Tháng - Ngày T Giờ:Phút:Giây)
  weddingDate: "2026-10-25T11:00:00",
  
  // Thông tin ngân hàng nhận mừng cưới
  bankAccounts: {
    groom: {
      owner: "TÊN TÀI KHOẢN CHÚ RỂ",
      bankName: "Tên Ngân Hàng (VCB, MB...)",
      accountNumber: "STK_CHU_RE",
      qrCodeUrl: "link_ma_qr_chu_re.png"
    },
    bride: { ... }
  }
};
```

---

## 🌐 Hướng Dẫn Đăng Website Lên GitHub Pages (Miễn Phí 100%)

Để chia sẻ link thiệp cưới dạng `https://ten-cua-ban.github.io/thiep-cuoi` cho bạn bè, bạn làm theo 4 bước đơn giản sau:

### **Bước 1: Tạo Tài Khoản GitHub & Repository Mới**
1. Truy cập [github.com](https://github.com) và Đăng nhập (hoặc Đăng ký tài khoản miễn phí).
2. Bấm nút **"+"** góc trên bên phải ➔ Chọn **New repository**.
3. Đặt tên **Repository name** (Ví dụ: `thiep-cuoi` hoặc `wedding-invitation`).
4. Chọn **Public**.
5. Bấm **Create repository**.

### **Bước 2: Upload Toàn Bộ Code Lên GitHub**
1. Tại trang repository vừa tạo, bấm chọn **"uploading an existing file"**.
2. Kéo thả toàn bộ các tệp và thư mục từ thư mục dự án này (`index.html`, `css/`, `js/`, `README.md`...) vào GitHub.
3. Nhập ghi chú tại Commit changes (ví dụ: `Initial upload wedding template`).
4. Bấm nút màu xanh **Commit changes**.

### **Bước 3: Bật GitHub Pages**
1. Mở tab **Settings** của Repository trên GitHub.
2. Tại menu bên trái, cuộn xuống chọn mục **Pages** (dưới phần Code and automation).
3. Tại phần **Build and deployment** ➔ **Branch**:
   - Chọn nhánh **`main`** (hoặc `master`).
   - Chọn thư mục **`/ (root)`**.
4. Bấm **Save**.

### **Bước 4: Nhận Link Thiệp Cưới Công Khai**
Chờ khoảng 1-2 phút, reload lại trang **Pages**. Bạn sẽ thấy một thông báo màu xanh lá cây:
> 🟢 **Your site is live at https://<username>.github.io/thiep-cuoi/**

Bây giờ bạn có thể gửi đường link này cho bạn bè và người thân qua Zalo, Facebook, Messenger!

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
d:/CNTT/ThiepCuoi/
├── index.html          # Trang chính thiệp cưới
├── css/
│   ├── style.css       # Giao diện chính (Glassmorphism, color palette, animations)
│   └── lightbox.css    # Styling cho bộ xem ảnh phóng to toàn màn hình
├── js/
│   ├── config.js       # File cấu hình dữ liệu duy nhất cần chỉnh sửa
│   ├── app.js          # Logic đếm ngược, audio player, RSVP, sổ lưu bút, hiệu ứng hoa rơi
│   └── gallery.js      # Logic album xem ảnh Lightbox
└── README.md           # Tệp hướng dẫn sử dụng và deploy
```

Chúc hai bạn có một ngày trọng đại thật trọn vẹn và hạnh phúc! 💖💍
