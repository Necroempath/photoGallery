let scales = [1.0, 1.3];
let buffer = document.querySelectorAll('img');

let images = [];

for(let i = 0; i < buffer.length; i++) {
    buffer[i].addEventListener('click', () => {

    let image = images[buffer[i].dataset.id];

    image.index = (image.index + 1) % scales.length;
    image.img.style.transform = `scale(${scales[image.index]})`;
})
    images.push({ img: buffer[i], index: 0 });
}

const maxCount = 6;
const minCount = 1;

let currentCount = 3;
let add = document.querySelector('#add');
let remove = document.querySelector('#remove');
let gallery = document.querySelector('#gallery');

add.addEventListener('click', () => {
    if(++currentCount === maxCount) add.disabled = true;
    remove.disabled = false;

    images[currentCount - 1].img.style.display = 'inline-block';
})

remove.addEventListener('click', () => {
    if(--currentCount === minCount) remove.disabled = true;
    add.disabled = false;

    images[currentCount].img.style.display = 'none';
})