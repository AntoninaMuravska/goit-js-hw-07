const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.getElementById('gallery');
// // console.log(galleryRef);

// вариант 1 - не самый лучший
// const imagesSet = images.forEach(({ url, alt }) => 
// galleryRef.insertAdjacentHTML(`beforeend`, `<li> <img src = '${url}', alt = ${alt}, width='300', height='200'>`))

// вариант 2

// создаем шаблонную строку
const imageTags = ({ url, alt }) => {
  return `<li> <img src = '${url}', alt = ${alt}, width='300', height='200'>`;
}
// console.log(imageTags)

// добавляем ее в ДОМ
const createImages = images.map(imageTags).join('')
// console.dir(createImages)

galleryRef.insertAdjacentHTML(`beforeend`, createImages);