/**
 * CONFIG.JS - Dữ liệu thiệp cưới LÂM TUẤN & NHƯ HUẾ (Tối ưu súc tích, 10 ảnh)
 */

const WEDDING_CONFIG = {
  // Thông tin Chú Rể & Cô Dâu (Ngắn gọn, rõ ràng)
  couple: {
    groom: {
      name: "Lâm Tuấn",
      shortName: "Lâm Tuấn",
      role: "CHÚ RỂ",
      job: "Kỹ sư CNTT tại HTI Group",
      father: "Nguyễn Văn Trường",
      mother: "Nguyễn Thị Nụ",
      avatar: "asset/images/AnhThiep/NVT09645.jpg",
      phone: "0988 123 456"
    },
    bride: {
      name: "Như Huế",
      shortName: "Như Huế",
      role: "CÔ DÂU",
      job: "Điều dưỡng tại Bệnh viện E",
      father: "Nguyễn Bá Thiết",
      mother: "Nguyễn Thị Ất",
      avatar: "asset/images/AnhThiep/NVT09560.jpg",
      phone: "0977 654 321"
    }
  },

  // Ngày đám cưới chính
  weddingDate: "2026-09-20T14:00:00", // 14h00 Chủ Nhật 20/9/2026 (10/08 âm lịch Bính Ngọ)
  weddingDateDisplay: "20.09.2026",
  lunarDateDisplay: "10/08 Âm lịch (Bính Ngọ)",
  weddingDayOfWeek: "Chủ Nhật",

  // Slogan & Banner
  slogan: "SAVE THE DATE",
  subtitle: "Cùng bàn lớp 1 ➔ Bạn đời trăm năm",
  heroTitle: "LỄ THÀNH HÔN",

  // Nhạc nền (Mối Duyên Vàng)
  music: {
    title: "Mối Duyên Vàng",
    url: "asset/music/MoiDuyenVang.mp3",
    autoPlay: false
  },

  // Cấu hình Google Sheet (Chỉ dùng để đồng bộ nội bộ)
  googleSheet: {
    sheetId: "1ex8B6XNs8N_So2C7hqlMlRy-O_rjX70j7BW41Erk79g",
    viewUrl: "https://docs.google.com/spreadsheets/d/1ex8B6XNs8N_So2C7hqlMlRy-O_rjX70j7BW41Erk79g/gviz/tq?tqx=out:json"
  },

  // 3 Sự kiện tổ chức rõ ràng, dễ nhìn
  events: [
    {
      id: "tiec1",
      title: "TIỆC MỪNG NHÀ TRAI (SÁNG THỨ 7)",
      time: "09:00 - Thứ 7, 19/09/2026",
      lunarTime: "(Ngày 09/08 âm lịch)",
      location: "Sau Trường THCS Liên Hà",
      address: "Thôn Thượng Thôn, xã Ô Diên, TP. Hà Nội",
      mapUrl: "https://maps.app.goo.gl/ktZU2EUGUWWnTg8MA",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ti%E1%BB%87c+M%E1%BB%ABng+S%C3%A1ng+-+L%C3%A2m+Tu%E1%BA%A5n+%26+Nh%C6%B0+Hu%E1%BA%BF&dates=20260919T020000Z/20260919T050000Z&location=Sau+Tr%C6%B0%E1%BB%9Dng+THCS+Li%C3%AAn+H%C3%A0"
    },
    {
      id: "tiec2",
      title: "TIỆC MỪNG NHÀ GÁI (CHIỀU THỨ 7)",
      time: "15:00 - Thứ 7, 19/09/2026",
      lunarTime: "(Ngày 09/08 âm lịch)",
      location: "Hồ Sinh Thái Thượng Thôn",
      address: "Thôn Thượng Thôn, xã Ô Diên, TP. Hà Nội",
      mapUrl: "https://maps.app.goo.gl/G8yTgq9z9vurUpoY6",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ti%E1%BB%87c+M%E1%BB%ABng+Chi%E1%BB%81u+-+L%C3%A2m+Tu%E1%BA%A5n+%26+Nh%C6%B0+Hu%E1%BA%BF&dates=20260919T080000Z/20260919T110000Z&location=H%E1%BB%93+Sinh+Th%C3%A1i+Th%C6%B0%E1%BB%A3ng+Th%C3%B4n"
    },
    {
      id: "thanhhon",
      title: "LỄ THÀNH HÔN CHÍNH THỨC",
      time: "14:00 - Chủ Nhật, 20/09/2026",
      lunarTime: "(Ngày 10/08 âm lịch)",
      location: "Tư Gia Nhà Trai",
      address: "Số 17, xóm Quốc Trí, thôn Thượng Thôn, xã Ô Diên, TP. Hà Nội",
      mapUrl: "https://maps.google.com/?q=Số+17+xóm+Quốc+Trí+Thượng+Thôn+Ô+Diên+Hà+Nội",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=L%E1%BB%85+Th%C3%A0nh+H%C3%B4n+-+L%C3%A2m+Tu%E1%BA%A5n+%26+Nh%C6%B0+Hu%E1%BA%BF&dates=20260920T070000Z/20260920T100000Z&location=S%E1%BB%91+17+x%C3%B3m+Qu%E1%BB%91c+Tr%C3%AD+Th%C6%B0%E1%BB%A3ng+Th%C3%B4n"
    }
  ],

  // Dòng thời gian tình yêu súc tích
  story: [
    {
      date: "Năm 2005",
      title: "Cùng Bàn Lớp 1",
      description: "Cô giáo xếp hai đứa nhỏ 6 tuổi ngồi chung bàn học. Kỷ niệm tuổi thơ bắt đầu từ đây.",
      image: "asset/images/AnhThiep/NVT09702.jpg"
    },
    {
      date: "Những Năm Tiểu Học",
      title: "Thanh Xuân Gắn Bó",
      description: "Cùng lớn lên dưới mái trường tiêu học, từ tình bạn nhỏ dần hóa thành mối tình sâu đậm.",
      image: "asset/images/AnhThiep/DSC00190.jpg"
    },
    {
      date: "15/07/2026",
      title: "Lời Cầu Hôn",
      description: "Sau bao năm, Lâm Tuấn trao nhẫn đính hôn và Như Huế mỉm cười đồng ý.",
      image: "asset/images/AnhThiep/NVT09781.jpg"
    },
    {
      date: "20/09/2026",
      title: "Ngày Chung Đôi",
      description: "Hai bạn chính thức trao nhau lời thề nguyện trăm năm hạnh phúc!",
      image: "asset/images/AnhThiep/DSC00150.jpg"
    }
  ],

  // ĐÚNG 10 ẢNH CƯỚI ĐẸP NHẤT
  gallery: [
    { src: "asset/images/AnhThiep/AnhCong/NVT09675.jpg", caption: "Rạng Rỡ Ngày Trọng Đại" },
    { src: "asset/images/AnhThiep/AnhCong/NVT09903.jpg", caption: "Nụ Cười Hạnh Phúc" },
    { src: "asset/images/AnhThiep/NVT09543.jpg", caption: "Lâm Tuấn & Như Huế" },
    { src: "asset/images/AnhThiep/NVT09499.jpg", caption: "Váy Cưới Tinh Khôi" },
    { src: "asset/images/AnhThiep/DSC00060.jpg", caption: "Hành Trình Thanh Xuân" },
    { src: "asset/images/AnhThiep/DSC00065.jpg", caption: "Gắn Kết Trăm Năm" },
  ],

  // Ngân hàng mừng cưới
  bankAccounts: {
    groom: {
      owner: "NGUYEN VAN TUAN",
      bankName: "BIĐV (Ngân Hàng Quân Đội)",
      accountNumber: "0988123456",
      branch: "Hà Nội",
      qrCodeUrl: "https://img.vietqr.io/image/MB-0988123456-compact2.png?amount=0&addInfo=Mung%20Cuoi%20Lam%20Tuan&accountName=NGUYEN%20LAM%20TUAN"
    },
    bride: {
      owner: "NGUYEN THI NHU HUE",
      bankName: "Vietcombank (VCB)",
      accountNumber: "0977654321",
      branch: "Hà Nội",
      qrCodeUrl: "https://img.vietqr.io/image/VCB-0977654321-compact2.png?amount=0&addInfo=Mung%20Cuoi%20Nhu%20Hue&accountName=NHU%20HUE"
    }
  },

  // Lời chúc mẫu gần nhất
  defaultWishes: [
    {
      name: "Đội bóng FC Lúa Mạch",
      relation: "Lịch uống bia",
      message: "Chú rể Lâm Tuấn uống bia có bao giờ say đâu :))",
      time: "30 phút trước"
    },
    {
      name: "HTI Group & Bệnh viện E",
      relation: "Đồng nghiệp",
      message: "Chúc Lâm Tuấn & Như Huế luôn tràn ngập niềm vui, mãi mãi hạnh phúc nha!",
      time: "1 giờ trước"
    }
  ]
};

if (typeof window !== "undefined") {
  window.WEDDING_CONFIG = WEDDING_CONFIG;
}
