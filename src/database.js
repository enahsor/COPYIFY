import Dexie from 'dexie'

const db = new Dexie('copyifyDB')
db.version(2).stores({
    audio: 'path, blob, type',
})
db.audio.orderBy('path').delete()

export default db
