import React from 'react'
import styled from 'styled-components'
import Controls from './controls'
import Song from './song'
import Seeker from './seeker'
import { queries } from '../mediaQuery'
import { useSelector, useDispatch } from 'react-redux'
import { inverse } from '../../actions'
import { useSpring, animated } from 'react-spring'

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Wrapper = styled(animated.div)`
    position: fixed;
    background-color: ${({ theme }) => theme.terColor};
    width: calc(100%);
    overflow: hidden;
    top: 100%;
    @media all and (max-width: ${queries.large}px) {
        background-color: ${({ theme }) => theme.terColor};
    }
`
export default function Mini() {
    const playerDown = useSelector((state) => state.playerDown)
    const currentlyPlaying = useSelector((state) => state.currentlyPlaying)
    const dispatch = useDispatch()
    const isSomethingPlaying = Object.keys(currentlyPlaying).length

    const handleClick = () => {
        dispatch(inverse({ playerDown }))
    }

    const props = useSpring({
        transform: `translateY(${playerDown ? '-100%' : '0%'})`,
        display: isSomethingPlaying && playerDown ? 'block' : 'none',
    })

    return isSomethingPlaying ? (
        <Wrapper style={props} onClick={handleClick}>
            <Seeker />
            <InnerWrapper>
                <Song song={currentlyPlaying} />
                <Controls />
            </InnerWrapper>
        </Wrapper>
    ) : (
        ''
    )
}
