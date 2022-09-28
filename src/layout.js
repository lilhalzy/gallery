
// Creates a row based layout for the gallery
export function createLayout(items, photoWidth, targetRowHeight) {
  if (!items || !items.length) {
    return []
  }
 
  const rows = []

  // loop over items
  let currRow = {
    items: [],
    height: targetRowHeight,
  }

  rows.push(currRow)

  let currRowWidth = 0

  for (const item of items) {

    const aspectRatio = item.width / item.height
    const computeWidth = targetRowHeight * aspectRatio

    if (currRow.items.length > 0) {
      if (computeWidth > photoWidth) {
        currRow = {
          items: [],
          height: targetRowHeight,
        }
        rows.push(currRow)

        currRowWidth = 0;
      }
    }

    currRow.items.push(item)
    currRowWidth += computeWidth
  }

  return rows

  // const rows = [];

  // let currRow = {
  //   items: [],
  // };
  // rows.push(currRow);

  // for (const item of gallery) {
  //   currRow.items.push(item   );
  // }

  // return rows
}