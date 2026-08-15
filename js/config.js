/**
 * CONFIG.JS - Dữ liệu thiệp cưới LÂM TUẤN & NHƯ HUẾ
 * Mẫu Cinelove 46 Tối Giản & Sang Trọng
 */

const WEDDING_CONFIG = {
  // Thông tin Chú Rể & Cô Dâu
  couple: {
    groom: {
      name: "Lâm Tuấn",
      shortName: "Lâm Tuấn",
      role: "CHÚ RỂ",
      job: "Kỹ sư CNTT tại HTI Group",
      father: "Nguyễn Văn Trường",
      mother: "Nguyễn Thị Nụ",
      avatar: "asset/images/AnhThiep/NVT09543.jpg",
      phone: "0988 123 456"
    },
    bride: {
      name: "Như Huế",
      shortName: "Như Huế",
      role: "CÔ DÂU",
      job: "Điều dưỡng tại Bệnh viện E",
      father: "Nguyễn Bá Thiết",
      mother: "Nguyễn Thị Ất",
      avatar: "asset/images/AnhThiep/NVT09581.jpg",
      phone: "0977 654 321"
    }
  },

  // Ngày cử hành lễ thành hôn
  weddingDate: "2026-09-20T14:00:00", // 14h00 Chủ Nhật 20/9/2026 (10/08 âm lịch Bính Ngọ)
  weddingDateDisplay: "20.09.2026",
  lunarDateDisplay: "10/08 Âm lịch (Bính Ngọ)",
  weddingDayOfWeek: "Chủ Nhật",

  // Slogan
  slogan: "SAVE THE DATE",
  subtitle: "Trân trọng kính mời quý khách",

  // Nhạc nền (Mối Duyên Vàng)
  music: {
    title: "Mối Duyên Vàng",
    url: "asset/music/MoiDuyenVang.mp3",
    autoPlay: false
  },

  // Google Sheet & Script
  googleSheet: {
    sheetId: "1ex8B6XNs8N_So2C7hqlMlRy-O_rjX70j7BW41Erk79g",
    viewUrl: "https://docs.google.com/spreadsheets/d/1ex8B6XNs8N_So2C7hqlMlRy-O_rjX70j7BW41Erk79g/gviz/tq?tqx=out:json",
    scriptUrl: "https://script.google.com/macros/s/AKfycbxwXqNNAVOMAkCy9Kfsj3BPAJ8CGrRgXOxqepsQqZOyKfH4SABOMFIUNinEJpmysawW/exec"
  },

  // LỊCH TỔ CHỨC GỘP THỜI GIAN
  events: [
    {
      id: "tiecmung",
      title: "TIỆC MỪNG THỨ 7",
      dateHeader: "Thứ 7, 19/09/2026 (09/08 Âm lịch)",
      isMerged: true,
      subEvents: [
        {
          sideName: "TIỆC NHÀ TRAI",
          time: "09:00 Sáng - Thứ 7, 19/09/2026",
          location: "Sau Trường THCS Liên Hà",
          address: "Thôn Thượng Thôn, xã Ô Diên, TP. Hà Nội",
          mapUrl: "https://maps.app.goo.gl/ktZU2EUGUWWnTg8MA"
        },
        {
          sideName: "TIỆC NHÀ GÁI",
          time: "16:00 Chiều - Thứ 7, 19/09/2026",
          location: "Hồ Sinh Thái Thượng Thôn",
          address: "Thôn Thượng Thôn, xã Ô Diên, TP. Hà Nội",
          mapUrl: "https://maps.app.goo.gl/G8yTgq9z9vurUpoY6"
        }
      ]
    },
    {
      id: "thanhhon",
      title: "LỄ THÀNH HÔN CHÍNH THỨC",
      dateHeader: "Chủ Nhật, 20/09/2026 (ngày 10/08 Âm lịch)",
      isMerged: false,
      time: "14:00 - Chủ Nhật, 20/09/2026",
      lunarTime: "(Ngày 10/08 âm lịch)",
      location: "Tư Gia Nhà Trai",
      address: "Số 17, xóm Quốc Trí, thôn Thượng Thôn, xã Ô Diên, TP. Hà Nội",
      mapUrl: "https://maps.app.goo.gl/f9Us3Uy2mioir9zv5"
    }
  ],

  // Ngân hàng mừng cưới
  bankAccounts: {
    groom: {
      owner: "NGUYEN LAM TUAN",
      bankName: "MBBank (Ngân Hàng Quân Đội)",
      accountNumber: "0988123456",
      branch: "Hà Nội",
      qrCodeUrl: "https://img.vietqr.io/image/MB-0988123456-compact2.png?amount=0&addInfo=Mung%20Cuoi%20Lam%20Tuan&accountName=NGUYEN%20LAM%20TUAN"
    },
    bride: {
      owner: "NHU HUE",
      bankName: "NHU HUE",
      bankNameFull: "Vietcombank (VCB)",
      accountNumber: "0977654321",
      branch: "Hà Nội",
      qrCodeUrl: "https://img.vietqr.io/image/VCB-0977654321-compact2.png?amount=0&addInfo=Mung%20Cuoi%20Nhu%20Hue&accountName=NHU%20HUE"
    }
  }
};

if (typeof window !== "undefined") {
  window.WEDDING_CONFIG = WEDDING_CONFIG;
}
