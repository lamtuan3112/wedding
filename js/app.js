/**
 * APP.JS - Logic Thiệp Cưới LÂM TUẤN & NHƯ HUẾ
 * Tự động ghi Lời chúc & RSVP tham dự vào Google Sheet & LocalStorage
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.WEDDING_CONFIG;
  if (!config) return;

  renderConfigData(config);
  initAudioPlayer(config.music);
  initCountdown(config.weddingDate);
  initHeartCanvas();
  initRSVPForm(config.googleSheet);
  initGuestbook(config.defaultWishes, config.googleSheet);
  initBankModal(config.bankAccounts);
  initThankYouModal();
  initScrollAnimations();
});

/* 1. RENDER DỮ LIỆU TỪ CONFIG */
function renderConfigData(config) {
  const groom = config.couple.groom;
  const bride = config.couple.bride;

  setText("groom-name", groom.name);
  setText("groom-role", groom.role);
  setText("groom-job", groom.job);
  setText("groom-father", groom.father);
  setText("groom-mother", groom.mother);
  setImg("groom-avatar", groom.avatar);

  setText("bride-name", bride.name);
  setText("bride-role", bride.role);
  setText("bride-job", bride.job);
  setText("bride-father", bride.father);
  setText("bride-mother", bride.mother);
  setImg("bride-avatar", bride.avatar);

  setText("hero-groom", groom.shortName);
  setText("hero-bride", bride.shortName);
  setText("hero-date", `${config.weddingDayOfWeek}, ${config.weddingDateDisplay} (${config.lunarDateDisplay})`);

  renderLoveStory(config.story);
  renderEvents(config.events);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text || "";
}

function setImg(id, src) {
  const el = document.getElementById(id);
  if (el) el.src = src || "";
}

/* 2. DÒNG THỜI GIAN TÌNH YÊU */
function renderLoveStory(stories) {
  const container = document.getElementById("story-timeline");
  if (!container || !stories) return;

  container.innerHTML = "";
  stories.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.className = "timeline-item";
    itemEl.innerHTML = `
      <div class="timeline-dot">❤️</div>
      <div class="timeline-content">
        <div class="timeline-date">${item.date}</div>
        <h3 class="timeline-title">${item.title}</h3>
        ${item.image ? `<img src="${item.image}" alt="${item.title}" class="timeline-img" loading="lazy">` : ''}
        <p class="timeline-desc">${item.description}</p>
      </div>
    `;
    container.appendChild(itemEl);
  });
}

/* 3. SỰ KIỆN CƯỚI VỚI ICON SANG TRỌNG */
function renderEvents(events) {
  const container = document.getElementById("events-grid");
  if (!container || !events) return;

  container.innerHTML = "";
  events.forEach((ev) => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <div class="event-icon" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z"></path>
          <path d="M9 21V12h6v9"></path>
        </svg>
      </div>
      <h3 class="event-title">${ev.title}</h3>
      <div class="event-time">${ev.time}</div>
      ${ev.lunarTime ? `<div class="event-lunar">${ev.lunarTime}</div>` : ''}
      <div class="event-location">${ev.location}</div>
      <p class="event-address">${ev.address}</p>
      <div class="btn-group">
        <a href="${ev.mapUrl}" target="_blank" rel="noopener" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Xem Bản Đồ
        </a>
        <a href="${ev.calendarUrl}" target="_blank" rel="noopener" class="btn btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Thêm Vào Lịch
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

/* 4. ĐỒNG HỒ ĐẾM NGƯỢC */
function initCountdown(targetDateStr) {
  const targetDate = new Date(targetDateStr).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      setText("count-days", "00");
      setText("count-hours", "00");
      setText("count-mins", "00");
      setText("count-secs", "00");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setText("count-days", String(days).padStart(2, '0'));
    setText("count-hours", String(hours).padStart(2, '0'));
    setText("count-mins", String(minutes).padStart(2, '0'));
    setText("count-secs", String(seconds).padStart(2, '0'));
  }

  update();
  setInterval(update, 1000);
}

/* 5. PHÁT NHẠC MỐI DUYÊN VÀNG */
function initAudioPlayer(musicConfig) {
  const btn = document.getElementById("music-toggle-btn");
  const audio = document.getElementById("bg-audio");
  if (!btn || !audio || !musicConfig) return;

  audio.src = musicConfig.url;
  let isPlaying = false;

  const handleFirstInteraction = () => {
    if (!isPlaying) {
      audio.play().then(() => {
        isPlaying = true;
        btn.classList.add("playing");
        btn.innerHTML = `<span class="music-icon">🎶</span>`;
        showToast("Đang phát: " + musicConfig.title);
      }).catch(() => {});
    }
    document.removeEventListener("click", handleFirstInteraction);
  };
  document.addEventListener("click", handleFirstInteraction);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isPlaying) {
      audio.pause();
      btn.classList.remove("playing");
      btn.innerHTML = `<span class="music-icon">🎵</span>`;
      showToast("Đã tắt nhạc nền");
    } else {
      audio.play().then(() => {
        btn.classList.add("playing");
        btn.innerHTML = `<span class="music-icon">🎶</span>`;
        showToast("Đang phát: " + musicConfig.title);
      }).catch(err => {
        console.log("Audio error:", err);
      });
    }
    isPlaying = !isPlaying;
  });
}

/* 6. FORM RSVP - RÚT GỌN CHÍNH XÁC THEO YÊU CẦU */
function initRSVPForm(sheetConfig) {
  const form = document.getElementById("rsvp-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("rsvp-name").value.trim();
    const phone = document.getElementById("rsvp-phone").value.trim();
    const side = document.getElementById("rsvp-side").value;
    const status = document.getElementById("rsvp-status").value;

    const rsvpData = {
      action: "rsvp",
      name,
      phone,
      side,
      status,
      time: new Date().toLocaleString("vi-VN")
    };

    // Save to LocalStorage
    const existing = JSON.parse(localStorage.getItem("wedding_rsvp") || "[]");
    existing.push(rsvpData);
    localStorage.setItem("wedding_rsvp", JSON.stringify(existing));

    // Send to Google Sheets Apps Script
    if (sheetConfig && sheetConfig.scriptUrl && !sheetConfig.scriptUrl.includes("placeholder")) {
      const formData = new FormData();
      Object.keys(rsvpData).forEach(key => formData.append(key, rsvpData[key]));
      fetch(sheetConfig.scriptUrl, { method: "POST", body: formData, mode: "no-cors" }).catch(() => {});
    }

    // Open Thank You Modal
    showThankYouModal(
      "XÁC NHẬN THAM DỰ THÀNH CÔNG!",
      `Cảm ơn bạn <strong>${name}</strong> (${side}) đã gửi xác nhận <em>${status}</em>.<br><br>Sự hiện diện và tình cảm của bạn là niềm vinh hạnh lớn nhất của Lâm Tuấn & Như Huế!`
    );

    form.reset();
  });
}

/* 7. SỔ LƯU BÚT - BỎ MỐI QUAN HỆ */
function initGuestbook(defaultWishes, sheetConfig) {
  const form = document.getElementById("guestbook-form");
  const wishesListEl = document.getElementById("wishes-list");
  if (!wishesListEl) return;

  let wishes = JSON.parse(localStorage.getItem("wedding_wishes")) || defaultWishes || [];

  function renderWishes() {
    wishesListEl.innerHTML = "";
    wishes.slice(-5).reverse().forEach((w) => {
      const item = document.createElement("div");
      item.className = "wish-item";
      item.innerHTML = `
        <div class="wish-header">
          <span class="wish-author">${w.name}</span>
          <span class="wish-time">${w.time || 'Mới gửi'}</span>
        </div>
        <p class="wish-text">${w.message}</p>
      `;
      wishesListEl.appendChild(item);
    });
  }

  renderWishes();

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("wish-name");
      const msgInput = document.getElementById("wish-message");

      const newWish = {
        action: "wish",
        name: nameInput.value.trim(),
        message: msgInput.value.trim(),
        time: "Vừa xong"
      };

      wishes.push(newWish);
      localStorage.setItem("wedding_wishes", JSON.stringify(wishes));

      // Send to Google Sheets Apps Script
      if (sheetConfig && sheetConfig.scriptUrl && !sheetConfig.scriptUrl.includes("placeholder")) {
        const formData = new FormData();
        Object.keys(newWish).forEach(key => formData.append(key, newWish[key]));
        fetch(sheetConfig.scriptUrl, { method: "POST", body: formData, mode: "no-cors" }).catch(() => {});
      }

      renderWishes();

      // Open Thank You Modal
      showThankYouModal(
        "GỬI LỜI CHÚC THÀNH CÔNG!",
        `Cảm ơn <strong>${newWish.name}</strong> đã gửi lời chúc mừng vô cùng ngọt ngào và ý nghĩa dành cho Lâm Tuấn & Như Huế! 💖`
      );

      form.reset();
    });
  }
}

/* 8. MODAL THÔNG BÁO CẢM ƠN */
function initThankYouModal() {
  const modal = document.getElementById("thankyou-modal");
  const closeBtn = document.getElementById("thankyou-close-btn");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
}

function showThankYouModal(titleText, htmlMessage) {
  const modal = document.getElementById("thankyou-modal");
  const titleEl = document.getElementById("thankyou-title");
  const msgEl = document.getElementById("thankyou-message");

  if (titleEl) titleEl.textContent = titleText;
  if (msgEl) msgEl.innerHTML = htmlMessage;

  if (modal) {
    modal.classList.add("active");
  }
}

/* 9. MODAL HỘP MỪNG CƯỚI */
function initBankModal(bankConfig) {
  const triggerBtn = document.getElementById("open-gift-modal-btn");
  const modal = document.getElementById("gift-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (triggerBtn && modal) {
    triggerBtn.addEventListener("click", () => modal.classList.add("active"));
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  if (bankConfig) {
    if (bankConfig.groom) {
      setText("bank-groom-name", bankConfig.groom.owner);
      setText("bank-groom-bank", bankConfig.groom.bankName);
      setText("bank-groom-account", bankConfig.groom.accountNumber);
      setImg("bank-groom-qr", bankConfig.groom.qrCodeUrl);
    }
    if (bankConfig.bride) {
      setText("bank-bride-name", bankConfig.bride.owner);
      setText("bank-bride-bank", bankConfig.bride.bankName);
      setText("bank-bride-account", bankConfig.bride.accountNumber);
      setImg("bank-bride-qr", bankConfig.bride.qrCodeUrl);
    }
  }

  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const accNum = btn.getAttribute("data-account");
      if (accNum) {
        navigator.clipboard.writeText(accNum).then(() => {
          showToast("📋 Đã sao chép số tài khoản: " + accNum);
        }).catch(() => {
          showToast("STK: " + accNum);
        });
      }
    });
  });
}

/* 10. CANVAS TRÁI TIM */
function initHeartCanvas() {
  const canvas = document.getElementById("petal-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = width < 600 ? 15 : 25;

  class HeartParticle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.size = Math.random() * 10 + 6;
      this.speedY = Math.random() * 1.1 + 0.5;
      this.speedX = Math.random() * 0.8 - 0.4;
      this.opacity = Math.random() * 0.5 + 0.3;
      this.isHeart = Math.random() > 0.4;
    }
    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.y * 0.015) * 0.6 + this.speedX;
      if (this.y > height) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.globalAlpha = this.opacity;

      if (this.isHeart) {
        ctx.fillStyle = "#FF1744";
        ctx.beginPath();
        const topCurveHeight = this.size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, topCurveHeight);
        ctx.bezierCurveTo(-this.size / 2, (this.size + topCurveHeight) / 2, 0, this.size, 0, this.size);
        ctx.bezierCurveTo(0, this.size, this.size / 2, (this.size + topCurveHeight) / 2, this.size / 2, topCurveHeight);
        ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.fill();
      } else {
        ctx.fillStyle = "#FFCDD2";
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.6, this.size, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new HeartParticle());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }

  loop();
}

/* 11. SCROLL ANIMATIONS */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".couple-card, .event-card, .timeline-content, .gallery-item").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(25px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(el);
  });
}

/* 12. TOAST UTILITY */
function showToast(message) {
  let toast = document.getElementById("toast-msg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-msg";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
