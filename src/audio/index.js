const audioCtx = new AudioContext({ latencyHint: 'playback' })

export const getData = (location) => {
    return fetch(location.audio)
        .then((res) => {
            if (!res.ok) {
                throw new Error('HTTP error, status =  ' + res.status)
            }
            return res.arrayBuffer()
        })
        .then(async (buffer) => {
            var source = audioCtx.createBufferSource()
            source.buffer = await audioCtx.decodeAudioData(buffer)
            source.connect(audioCtx.destination)
            return source
        })
        .catch((err) => {
            console.log(`Something went wrong ${err}`)
        })
}

export default audioCtx
