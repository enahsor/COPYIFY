const audioCtx = new AudioContext({ latencyHint: 'playback' })

export const getData = (location) => {
    return fetch(location.audio)
        .then((res) => {
            if (!res.ok) {
                throw new Error('HTTP error, status =  ' + res.status)
            }
            return res.arrayBuffer()
        })
        .then((buffer) => {
            var source = audioCtx.createBufferSource()
            audioCtx.decodeAudioData(buffer, (decodedData) => {
                source.buffer = decodedData
                source.connect(audioCtx.destination)
                source.start(0)
            })
        })
        .catch((err) => {
            console.log(`Something went wrong ${err}`)
        })
}

export default audioCtx
