export class IncomingQueue {
    constructor() {
        this.arrived = []
    }

    addToArrived(data) {
        this.arrived.push(data)
    }

    removeFromArrive(position) {
        this.arrived.splice(position)
    }
}
