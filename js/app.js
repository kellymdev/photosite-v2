const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');

const close = document.createElement('p');
close.innerText = 'x';
close.style.textAlign = 'right';
close.style.marginTop = '20px';
close.style.marginRight = '20px';
close.style.fontSize = '2rem';

const image = document.createElement('img');
const caption = document.createElement('p');

overlay.appendChild(close);
overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.appendChild(caption);

document.querySelectorAll('.portfolio-image-container__image img').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const imageLocation = item.getAttribute('src');
    image.setAttribute('src', imageLocation);

    overlay.style.display = 'block';

    const captionText = item.getAttribute('alt');
    caption.innerText = captionText;
  })
})

overlay.addEventListener('click', event => {
  overlay.style.display = 'none';
});
