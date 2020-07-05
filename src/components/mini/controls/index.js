import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Play } from '../../../svgs/mini_play.svg'
import { ReactComponent as Pause } from '../../../svgs/mini_pause.svg'
import { useSelector, useDispatch } from 'react-redux'
import { inverse } from '../../../actions'

const Wrapper = styled.div`
    width: 10%;
    max-width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 62px;
`

const createIconWrapper = (Icon) => {
    return styled(Icon)`
        width: 20%;
        fill: white;
        margin: 0 20px;
    `
}

const PlayWrapper = createIconWrapper(Play)
const PauseWrapper = createIconWrapper(Pause)

export default function Controls() {
    const playing = useSelector((state) => state.playing)
    const dispatch = useDispatch()

    const handleEvent = (e) => {
        switch (e.type) {
            case 'click':
                dispatch(inverse({ playing }))
                e.stopPropagation()
                break
            default:
                break
        }
    }

    return (
        <Wrapper>
            {playing ? (
                <PauseWrapper onClick={handleEvent} />
            ) : (
                <PlayWrapper onClick={handleEvent} />
            )}
        </Wrapper>
    )
}
