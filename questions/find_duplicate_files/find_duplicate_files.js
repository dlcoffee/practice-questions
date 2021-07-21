const f1 = { id: 1, path: 'secrets/foo' }
const f2 = { path: 'desktop/foo-copy', sourceId: 1 }
const f3 = { path: 'bar-copy', sourceId: 2 }
const f4 = { id: 2, path: 'bar' }


const fileSystem = [f1,f2,f3,f4]

function findDupes(fs) {

  const map = new Map()
  const results = []

  for (let file of fs) {
    const id = file.id || file.sourceId
    const items = map.get(id)

    if (items) {
      const item = items[0]

      if (item.id) {
        map.set(id, [file, item])
      } else {
        console.log('hereeeeeeee')
        map.set(id, [item, file])
      }

      if (items.length > 2) {
        console.log('yo something went wrong:', items)
      }
    } else {
      map.set(id, [file])
    }
  }

  map.forEach((value, key) => {
    results.push([value[0].path, value[1].path])
  })


  return results
}

console.log(findDupes(fileSystem))
