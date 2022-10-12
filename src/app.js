import { Gallery } from "./gallery";


let gallery = require('./gallery.json')

gallery = gallery.map(item => {
  return{
    thumb: item.urls.thumb,
    width: item.width,
    height: item.height,
  }
})

// const gallery = [
//     {
//       thumb: "https://via.placeholder.com/140x100",
//       width: 140,
//       height: 100,
//     }
// ]

// const gallery = [
//     {
//       thumb: "https://via.placeholder.com/240x200",
//       width: 240,
//       height: 200,
//     },
//     {
//       thumb: "https://via.placeholder.com/220x200",
//       width: 220,
//       height: 200,
//     },
//     {
//       thumb: "https://via.placeholder.com/230x200",
//       width: 230,
//       height: 200,
//     },
// ];
export function App() {
  return <Gallery 
    photoWidth={600}
    targetRowHeight={200}
    items={gallery}
    />;
}