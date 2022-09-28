import { createLayout } from "./layout";
const gallery = require("./gallery.json");

export function Gallery() {

  const rows = createLayout(gallery)

  const photoWidth = 600;

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
              height: `200px`,
            }}
          >
            {row.items.map((item) => {
              return <img key={item.urls.thumb} src={item.urls.thumb} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
