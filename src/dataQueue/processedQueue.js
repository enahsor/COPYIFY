export class ProcessedQueue {
    constructor() {
        this.processed = []
    }

    addToProcessed(processedData) {
        this.processed.push(processedData)
    }

    clearProcessed() {
        this.processed = []
    }

    playProcessed() {
        this.processed.forEach((data) => {
            // PLAY DATA
            console.log(data)
        })
    }
}
