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

// for (let item of images) {
//     galleryRef.insertAdjacentHTML(`beforeend`, `<li><img src = ${item.url} alt = ${item.alt} width = 350 heigt = 250></li>`)
// }

const imagesSet = images.forEach(({ url, alt }) => 
galleryRef.insertAdjacentHTML(`beforeend`, `<li> <img src = '${url}', alt = ${alt}, width='300', height='200'>`))
