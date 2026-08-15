/**
 * GALLERY.JS - Quan lý Album Ảnh & Xem Ảnh Lightbox Phóng To
 */

(function () {
  let currentIndex = 0;
  let galleryData = [];

  function initGallery() {
    const config = window.WEDDING_CONFIG;
    if (!config || !config.gallery) return;

    galleryData = config.gallery;
    const galleryGrid = document.getElementById("gallery-grid");
    if (!galleryGrid) return;

    // Render gallery items
    galleryGrid.innerHTML = "";
    galleryData.forEach((item, index) => {
      const itemEl = document.createElement("div");
      itemEl.className = "gallery-item";
      itemEl.setAttribute("data-index", index);
      itemEl.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" class="gallery-img" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-caption">${item.caption}</div>
        </div>
      `;

      itemEl.addEventListener("click", () => {
        openLightbox(index);
      });

      galleryGrid.appendChild(itemEl);
    });

    setupLightboxEvents();
  }

  function openLightbox(index) {
    currentIndex = index;
    const modal = document.getElementById("lightbox-modal");
    const img = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    if (!modal || !img || !caption) return;

    const currentItem = galleryData[currentIndex];
    img.src = currentItem.src;
    caption.textContent = currentItem.caption;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  function navigateLightbox(direction) {
    if (!galleryData.length) return;
    currentIndex = (currentIndex + direction + galleryData.length) % galleryData.length;
    openLightbox(currentIndex);
  }

  function setupLightboxEvents() {
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    const modal = document.getElementById("lightbox-modal");

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", () => navigateLightbox(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => navigateLightbox(1));

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeLightbox();
      });
    }

    // Keyboard navigation (Esc, Arrow Left, Arrow Right)
    document.addEventListener("keydown", (e) => {
      if (!modal || !modal.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    });
  }

  document.addEventListener("DOMContentLoaded", initGallery);
})();
