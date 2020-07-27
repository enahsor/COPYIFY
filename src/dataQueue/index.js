import { IncomingQueue } from './incomingQueue'
import { ProcessedQueue } from './processedQueue'

export class Player {
    constructor(ctx) {
        // ctx - AudioContext Instance

        this.processed = new ProcessedQueue()
        this.incoming = new IncomingQueue()
        this.ctx = ctx
        this.buffer = []
        this.trackDuration = 0
    }

    addData(data) {
        this.incoming.addToArrived(data)
    }

    start() {
        if (this.incoming.length > 0) {
            const dataItem = this.incoming.removeFromArrived(0)
            const source = this.ctx.createBufferSource()
            source.connect(this.ctx.destination)
            source.buffer = dataItem
            source.start(this.trackDuration)
            this.trackDuration += source.buffer.duration
        }
    }

    play() {}
}
