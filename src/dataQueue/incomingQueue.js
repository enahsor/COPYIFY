export class IncomingQueue {
    constructor() {
        this.arrived = []
        this.length = 0
    }

    addToArrived(data) {
        this.arrived.push(data)
        this.length += 1
    }

    removeFromArrived(position) {
        const removed = this.arrived.splice(position)[0]
        this.length -= 1
        return removed
    }
}
