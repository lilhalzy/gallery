
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
    width: 0,
  }

  rows.push(currRow)

  for (const item of items) {

    const aspectRatio = item.width / item.height
    const computeWidth = targetRowHeight * aspectRatio

    if (currRow.items.length > 0) {
      if (currRow.width + computeWidth > photoWidth) {
        currRow = {
          items: [],
          height: targetRowHeight,
          width: 0,
        }
        rows.push(currRow)

      }
    }
    // 
    // clone the item to modify it without modifying the original
    // 
    const clone = Object.assign({}, item, {
      width: computeWidth,
      height: targetRowHeight,
      aspectRatio: aspectRatio,
    })

    // 
    //  Add the item to the row
    // 
    currRow.items.push(clone)
    currRow.width += computeWidth
  }
  // 
  // For all rows except the last row, stretch the items towards the right hand boundary
  // 
  for (let rowIndex = 0; rowIndex < rows.length - 1; rowIndex++) {
    const row = rows[rowIndex]

    let rowWidth = 0
    for(const item of row.items) {
      rowWidth += item.width
    }

    const gap = photoWidth - rowWidth
    const deltaWidth = gap / row.items.length

    let maxThumbHeight = 0

    // 
    // Expand each item to fill the gap
    // 
    for (const item of row.items) {
      const aspectRatio = item.aspectRatio 

      item.width += deltaWidth
      item.height = item.width * (1.0 / aspectRatio)
      maxThumbHeight = Math.max(maxThumbHeight, item.height)
    }

    // 
    // update row height
    // 
    row.height = maxThumbHeight
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