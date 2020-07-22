import { IncomingQueue } from './incomingQueue'

export class Player extends IncomingQueue {
    constructor(ctx) {
        // ctx - AudioContext Instance
        super()

        this.ctx = ctx
    }
}
