# 💍 Website Thiệp Cưới Online | Lâm Tuấn & Như Huế

Website thiệp cưới online giao diện màu **Trắng – Đỏ** lãng mạn, sang trọng, tối ưu trải nghiệm súc tích trên cả điện thoại di động (Mobile 70%) và máy tính (PC 30%). Trang web đã được đẩy lên GitHub Repository: [https://github.com/lamtuan3112/wedding](https://github.com/lamtuan3112/wedding).

---

## 🌟 Các Tính Năng Nổi Bật

- 🎨 **Giao diện Trắng – Đỏ Lãng Mạn & Luxury**: Nền ảnh cưới mờ lãng mạn, font chữ Tiếng Việt ngọt ngào (*Dancing Script*, *Pacifico*, *Be Vietnam Pro*, *Montserrat*).
- 🖼️ **Căn Chỉnh Ảnh Cưới Chuẩn Nét**: Giữ nguyên khuôn mặt và góc ảnh không bị cắt xém.
- 🎵 **Floating Audio Player**: Trình phát nhạc nền bài hát **Mối Duyên Vàng** (`asset/music/MoiDuyenVang.mp3`) với hiệu ứng sóng nhạc và trái tim/cánh hoa rơi bồng bềnh.
- ⏳ **Đồng Hồ Đếm Ngược (Countdown Timer)**: Đếm ngược thời gian thực tới 14:00 Chủ Nhật, 20.09.2026.
- 💒 **Lịch Trình Lễ Cưới Rõ Ràng**: 
  - Tiệc Mừng Sáng Thứ 7 (09:00 - Sau trường THCS Liên Hà)
  - Tiệc Mừng Chiều Thứ 7 (15:00 - Hồ sinh thái Thượng Thôn)
  - Lễ Thành Hôn (14:00 Chủ Nhật - Số 17, xóm Quốc Trí)
- 📸 **Album 10 Ảnh Cưới Chọn Lọc**: Tải nhanh trên mạng di động 4G kèm bộ xem ảnh toàn màn hình Lightbox.
- ✉️ **Xác Nhận Tham Dự (RSVP) & Sổ Lưu Bút Online**: Khách mời gửi xác nhận & lời chúc mừng (bảo mật, hiển thị lời chúc gần nhất).
- 💳 **Hộp Mừng Cưới (Bank QR Modal)**: Popup mã QR VietQR Chú Rể (MBBank) & Cô Dâu (Vietcombank) kèm nút sao chép STK.

---

## ⚙️ Hướng Dẫn Tùy Chỉnh Thông Tin 1-Click (`js/config.js`)

Mọi thông tin trên thiệp cưới đều có thể chỉnh sửa dễ dàng trong tệp **`js/config.js`**:

```javascript
const WEDDING_CONFIG = {
  couple: {
    groom: {
      name: "Lâm Tuấn",
      job: "Kỹ sư CNTT tại HTI Group",
      father: "Nguyễn Văn Trường",
      mother: "Nguyễn Thị Nụ",
      avatar: "asset/images/AnhThiep/NVT09543.jpg"
    },
    bride: {
      name: "Như Huế",
      job: "Điều dưỡng tại Bệnh viện E",
      father: "Nguyễn Bá Thiết",
      mother: "Nguyễn Thị Ất",
      avatar: "asset/images/AnhThiep/NVT09581.jpg"
    }
  },

  // Ngày cử hành hôn lễ (YYYY-MM-DDTHH:mm:ss)
  weddingDate: "2026-09-20T14:00:00",

  // Nhạc nền
  music: {
    title: "Mối Duyên Vàng",
    url: "asset/music/MoiDuyenVang.mp3"
  }
};
```

---

## 🚀 Cách Cập Nhật Thay Đổi Lên GitHub (Tự Động 1-Click)

Mỗi khi bạn chỉnh sửa thông tin trong `js/config.js` hoặc thêm ảnh mới, bạn chỉ cần:

1. Mở thư mục dự án `d:\CNTT\ThiepCuoi`.
2. **Nhấp đúp chuột vào tệp `deploy.bat`**.
3. Nhập ghi chú thay đổi (hoặc nhấn Enter) để chương trình tự động commit & push lên GitHub repository `lamtuan3112/wedding`!

---

## 🌐 Hướng Dẫn Bật GitHub Pages Trực Tuyến

1. Truy cập: [https://github.com/lamtuan3112/wedding/settings/pages](https://github.com/lamtuan3112/wedding/settings/pages)
2. Tại mục **Build and deployment** ➔ **Branch**: Chọn **`main`** (Folder `/root`).
3. Nhấn **Save**. Chờ 1-2 phút thiệp cưới sẽ chạy trực tuyến tại link:
   👉 **`https://lamtuan3112.github.io/wedding/`**

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
d:/CNTT/ThiepCuoi/
├── index.html              # Trang chính thiệp cưới (SEO & OpenGraph ready)
├── deploy.bat              # Công cụ 1-click đẩy code lên GitHub
├── css/
│   ├── style.css           # Styling Trắng - Đỏ Lãng Mạn, 70% Mobile Optimization
│   └── lightbox.css        # Styling cho bộ xem ảnh phóng to toàn màn hình
├── js/
│   ├── config.js           # File cấu hình dữ liệu thiệp cưới
│   ├── app.js              # Logic đếm ngược, audio player, RSVP, sổ lưu bút, trái tim rơi
│   └── gallery.js          # Logic xem ảnh Lightbox
├── asset/
│   ├── WeddingInfomation.txt # Tệp thông tin gốc
│   ├── music/
│   │   └── MoiDuyenVang.mp3  # Bài hát nền Mối Duyên Vàng
│   └── images/
│       └── AnhThiep/       # 10 bức ảnh cưới chất lượng cao
└── README.md               # Tệp hướng dẫn sử dụng dự án
```

Chúc hai bạn Lâm Tuấn & Như Huế trăm năm hạnh phúc! 💖💍
