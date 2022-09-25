const gallery = require("./gallery.json")

console.log(gallery);

export function App() {
  return (
    <div>
      {gallery.map(item => {
        return (
          <img src={item.urls.thumb} />
        )
      })}
    </div>
  )
}
