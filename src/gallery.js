import { createLayout } from "./layout";
// const gallery = require("./gallery.json");
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

//     const gallery = [
//       {
//         thumb: "https://via.placeholder.com/140x100",
//         width: 140,
//         height: 100,
//       },
//       {
//         thumb: "https://via.placeholder.com/100x140",
//         width: 100,
//         height: 140,
//       },
//       {
//         thumb: "https://via.placeholder.com/400x50",
//         width: 400,
//         height: 50,
//       },
//     ];

export function Gallery() {

  const photoWidth = 600;
  const targetRowHeight = 200
  const rows = createLayout(gallery, photoWidth, targetRowHeight)

  return (
    <div
      style={{
        width: `${photoWidth}px`,
        border: "solid red 3px",
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