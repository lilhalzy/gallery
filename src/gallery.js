import { createLayout } from "./layout";

export function Gallery({ items, photoWidth, targetRowHeight}) {

  const rows = createLayout(items, photoWidth, targetRowHeight)

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
              height: `${row.height}px`,
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