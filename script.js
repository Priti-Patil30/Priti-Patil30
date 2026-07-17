// SELECT ELEMENTS
const galleryImages = document.querySelectorAll('.gallery-item img');

const lightbox = document.getElementById('lightbox');

const lightboxImg = document.getElementById('lightbox-img');

const closeBtn = document.querySelector('.close');

const nextBtn = document.getElementById('next');

const prevBtn = document.getElementById('prev');

let currentIndex = 0;

// OPEN LIGHTBOX
galleryImages.forEach((img, index) => {

  img.addEventListener('click', () => {

    currentIndex = index;

    showImage();

    lightbox.style.display = 'flex';

  });

});

// SHOW IMAGE
function showImage() {

  lightboxImg.src = galleryImages[currentIndex].src;

}

// NEXT IMAGE
nextBtn.addEventListener('click', () => {

  currentIndex = (currentIndex + 1) % galleryImages.length;

  showImage();

});

// PREVIOUS IMAGE
prevBtn.addEventListener('click', () => {

  currentIndex =
    (currentIndex - 1 + galleryImages.length)
    % galleryImages.length;

  showImage();

});

// CLOSE LIGHTBOX
closeBtn.addEventListener('click', () => {

  lightbox.style.display = 'none';

});

// CLOSE WHEN CLICK OUTSIDE
lightbox.addEventListener('click', (e) => {

  if (e.target === lightbox) {

    lightbox.style.display = 'none';

  }

});

// FILTER IMAGES
function filterImages(category, event) {

  const items =
    document.querySelectorAll('.gallery-item');

  const buttons =
    document.querySelectorAll('.filters button');

  // ACTIVE BUTTON
  buttons.forEach(btn =>
    btn.classList.remove('active')
  );

  event.target.classList.add('active');

  // SHOW/HIDE ITEMS
  items.forEach(item => {

    if (
      category === 'all' ||
      item.classList.contains(category)
    ) {

      item.style.display = 'block';

    } else {

      item.style.display = 'none';

    }

  });

}