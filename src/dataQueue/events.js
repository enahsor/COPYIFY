export const newDataEvent = new CustomEvent('newData', {
    detail: {
        exists: true,
    },
})

export const noDataEvent = new CustomEvent('noData', {
    detail: {
        exists: false,
    },
})

export const startEvent = new CustomEvent('start', {
    details: {
        playing: true,
    },
})

export const finishedEvent = new CustomEvent('finish', {
    details: {
        playing: false,
    },
})

export const nextEvent = new CustomEvent('next', {
    details: {
        next: true,
    },
})

export const endOfQueue = new CustomEvent('end', {
    details: {
        end: true,
    },
})
