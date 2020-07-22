import io from 'socket.io-client'
import ss from 'socket.io-stream'
import { URL } from '../config'
import { Data } from '../dataQueue/data'
import { Player } from '../dataQueue'
import { getCtx } from '../audio'

export const client = io(URL)

export function callForTrack(trackid) {
    client.emit('send-track', trackid)
}

const ctx = getCtx()
const player = new Player(ctx)

ss(client).on('sending', (stream) => {
    stream.on('data', async (byte) => {
        const data = new Data(ctx, byte)
        try {
            player.addToQueue(await data.decode())
            //player.playAvailableSlices()
        } catch (err) {
            //DO SOMETHING HERE
        }
    })
})

export function getTrack(trackid) {
    client.emit('send-track', trackid)
}
