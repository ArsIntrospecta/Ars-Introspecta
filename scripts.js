// Anno footer
document.getElementById('year').textContent = new Date().getFullYear();

// Nav toggle per mobile
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
if(navToggle){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.style.display = expanded ? 'none' : 'flex';
  });
  // nascondi nav-list su resize > small
  window.addEventListener('resize', () => {
    if(window.innerWidth > 560) navList.style.display = 'flex';
    else navList.style.display = 'none';
  });
}

// LIGHTBOX semplice
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');
const lbClose = document.getElementById('lb-close');

function openLightbox(src, alt){
  lbImg.src = src;
  lbImg.alt = alt || '';
  lbCaption.textContent = alt || '';
  lb.style.display = 'grid';
  lb.setAttribute('aria-hidden','false');
  lbClose.focus();
}

function closeLightbox(){
  lb.style.display = 'none';
  lb.setAttribute('aria-hidden','true');
  lbImg.src = '';
}

// apri cliccando immagini in gallery
document.querySelectorAll('.gallery-grid img').forEach(img=>{
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
  img.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img.src, img.alt); }});
});

// chiudi
lbClose.addEventListener('click', closeLightbox);
lb.addEventListener('click', (e) => { if(e.target === lb) closeLightbox(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeLightbox(); });
