import Dexie from 'dexie'

Dexie.delete('copyifyDB')
    .then(() => {
        console.log('Deleted')
    })
    .catch(() => {
        //ignore for now
    })
const db = new Dexie('copyifyDB')

db.version(1).stores({
    audio: 'path, blob, type',
})

export default db
