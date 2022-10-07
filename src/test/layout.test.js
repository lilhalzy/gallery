import { createLayout } from "../layout";

describe("layout", () => {
  test("an empty array returns an empty layout", () => {
    const photoWidth = 600;
    const targetRowHeight = 200;
    const rows = createLayout([], photoWidth);
    expect(rows).toEqual([]);
  });

  test("layout a gallery with a single item", () => {
    const item = {
      thumb: "https://via.placeholder.com/140x100",
      width: 140,
      height: 100,
    };

    const gallery = [item];

    const photoWidth = 600;
    const targetRowHeight = 200;
    const rows = createLayout(gallery, photoWidth, targetRowHeight);
    expect(rows).toEqual([
      {
        items: [item],
        height: targetRowHeight,
      },
    ]);
  });

  test("layout a gallery with multiple items", () => {

    const items = [
      {
        thumb: "https://via.placeholder.com/100x200",
        width: 100,
        height: 200,
      },
      {
        thumb: "https://via.placeholder.com/100x200",
        width: 100,
        height: 200,
      },
      {
        thumb: "https://via.placeholder.com/100x200",
        width: 100,
        height: 200,
      },
    ];

    const photoWidth = 600;
    const targetRowHeight = 200;
    const rows = createLayout(items, photoWidth, targetRowHeight);
    expect(rows).toEqual([
      {
        items: items,
        height: targetRowHeight,
      },
    ]);
  });
  test("items wrap to the next row on overflow", () => {
    const items = [
      {
        thumb: "https://via.placeholder.com/140x100",
        width: 140,
        height: 200,
      },
      {
        thumb: "https://via.placeholder.com/100x140",
        width: 100,
        height: 200,
      },
      {
        thumb: "https://via.placeholder.com/400x50",
        width: 400,
        height: 200,
      },
    ];

    const photoWidth = 600;
    const targetRowHeight = 200;
    const rows = createLayout(items, photoWidth, targetRowHeight);
    expect(rows).toEqual([
      {
        items: [items[0], items[1]],
        height: targetRowHeight,
      },
      {
        items: [items[2]],
        height: targetRowHeight,
      },
    ]);
  });
});