// console.log(`about to fetch a rainbow`);
// fetch('../assets/images/rainbow.png')
//   .then((response) => {
//     console.log(`response`);
//     return response.blob();
//   })
//   .then((blob) => {
//     console.log(`blob`);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
//   });

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': '3491b2c1aamsh3116d3b6bdcb406p1eb320jsnc9c29a6b6a7c',
  },
})
  .then((response) => response.json())
  .then((data) => {
    const list = data.d;

    list.map((item) => {
      const name = item.l;
      const poster = item.i.imageUrl;
      const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`;
      document.querySelector('.movies').innerHTML += movie;
    });
  })
  .catch((err) => {
    console.error(err);
  });
