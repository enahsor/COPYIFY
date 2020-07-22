export class Data {
    constructor(ctx, byte) {
        /*
            ctx - AudioContext Instance
            byte - Unit8Array Instance
        */
        this.ctx = ctx
        this.byte = byte
        this.buffer = false
        this.decoded = false
    }

    convertToArrayBuffer(byte) {
        const { byteOffset, byteLength } = byte
        const buffer = byte.buffer.slice(byteOffset, byteLength + byteOffset)
        return buffer
    }

    async decode() {
        this.buffer = this.convertToArrayBuffer(this.byte)
        try {
            this.decoded = await this.ctx.decodeAudioData(this.buffer)
            return this.decoded
        } catch (err) {
            throw 'Unable to decode audio data'
        }
    }
}
