import { createLayout } from "./layout";

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

export function Gallery() {

  const photoWidth = 600;
  const targetRowHeight = 200
  const rows = createLayout(gallery, photoWidth, targetRowHeight)

  return (
    <div
      style={{
        width: `${photoWidth}px`,
        border: "solid red 2px",
      }}
    >
      {rows.map((row, rowIndex) => {
        return (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              flexDirection: "row",
              height: `${targetRowHeight}px`,
            }}
          >
            {row.items.map((item) => {
              return <img key={item.thumb} src={item.thumb} />;
            })}
          </div>
        );
      })}
    </div>
  );
}