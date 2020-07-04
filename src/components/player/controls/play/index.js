import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ReactComponent as PlayIcon } from '../../../../svgs/play.svg'
import { ReactComponent as PauseIcon } from '../../../../svgs/pause.svg'
import { useSelector, useDispatch } from 'react-redux'
import { inverse } from '../../../../actions'

const IconStyle = (Icon) => {
    return styled(Icon)`
        width: ${50}px;
        fill: ${(props) => props.theme.fill};
        height: ${50}px;

        :hover {
            cursor: pointer;
        }
    `
}

const PlayWrapper = IconStyle(PlayIcon)
const PauseWrapper = IconStyle(PauseIcon)

export default function Play() {
    const playing = useSelector((state) => state.playing)
    const audioObj = useSelector((state) => state.audioObj)

    useEffect(() => {
        playing ? audioObj.play() : audioObj.pause()
    }, [playing])

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(inverse({ playing }))
    }

    return playing ? (
        <PauseWrapper onClick={handleClick} />
    ) : (
        <PlayWrapper onClick={handleClick} />
    )
}
