import Dexie from 'dexie'

const db = new Dexie('copyifyDB')
db.version(1).stores({
    audio: 'path, blob, type',
})
db.audio.clear()
export default db
