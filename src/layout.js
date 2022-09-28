
// Creates a row based layout for the gallery
export function createLayout(gallery) {

  const rows = [];

  let currRow = {
    items: [],
  };
  rows.push(currRow);

  for (const item of gallery) {
    currRow.items.push(item   );
  }

  return rows
}