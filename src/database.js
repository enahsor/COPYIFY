import Dexie from 'dexie'

const db = new Dexie('copyifyDB')
db.version(2).stores({
    audio: 'path, blob, type',
})
db.audio
    .orderBy('path')
    .delete()
    .then((count) => {
        console.log(`Deleted ${count}`)
    })
    .catch((err) => {
        console.log(`Couldn't delete: ${err}`)
    })

export default db
