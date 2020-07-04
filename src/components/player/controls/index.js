import React from 'react'
import styled from 'styled-components'
import Play from './play'
import Next from './next'
import Previous from './previous'
import Repeat from './repeat'
import Shuffle from './shuffle'
import { queries } from '../../mediaQuery'

const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: CONTROLS;
    margin: 0 auto;
    margin-top: 10px;
    @media all and (min-width: ${queries.large}px) {
        grid-column: 4/8;
        grid-row: 2/3;
    }
`

export default function Controls() {
    return (
        <Wrapper>
            <Shuffle />
            <Previous />
            <Play />
            <Next />
            <Repeat />
        </Wrapper>
    )
}
