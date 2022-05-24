const gallery = () => {
  const imgPopup = document.createElement('div'),
        bigImage = document.createElement('img'),
        gallerySection = document.querySelector('.works');

  imgPopup.classList.add('popup');
  gallerySection.appendChild(imgPopup);

  imgPopup.style.cssText = `
    display: none;
    justify-content: center;
    align-items: center;
  `;

  bigImage.style.cssText = `
    max-width: 35%;
    -webkit-max-width: 35%;
  `;

  imgPopup.appendChild(bigImage);

  gallerySection.addEventListener('click', (e) => {
    e.preventDefault();
    
    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path); 
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }
  });
  
};

export default gallery;