let gallery = require("./gallery.json")

gallery = gallery.map(item => {
  return {
    src: item.urls.thumb,
    width: item.width,
    height: item.height
  }
})

console.log(gallery);

export function App() {
  return (
    <h1>Sup peopeww</h1>
  )
}
