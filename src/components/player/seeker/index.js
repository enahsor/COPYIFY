import React from 'react'
import styled from 'styled-components'
import { queries } from '../../mediaQuery'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Wrapper = styled.div`
    width: 100%;
    height: 4px;
    grid-area: SEEKER;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    @media all and (min-width: ${queries.large}px) {
        grid-column: 4/8;
        grid-row: 3/4;
        max-width: 1000px;
    }
    display: flex;
    align-items: center;
    position: relative;
`

const Timer = styled.span`
    color: white;
    font-size: 13px;
    opacity: 0.6;
    position: absolute;
    @media all and (min-width: ${queries.large}px) {
        position: relative;
        top: 0;
    }
    top: 10px;
`

const RightTimer = styled(Timer)`
    @media all and (min-width: ${queries.large}px) {
        margin-left: 15px;
    }
    right: 0;
`

const LeftTimer = styled(Timer)`
    @media all and (min-width: ${queries.large}px) {
        margin-right: 15px;
    }
`

const SliderWrapper = styled(Slider)`
    .rc-slider-track {
        background-color: white;
    }

    .rc-slider-handle {
        border: none;
    }

    .rc-slider-rail {
        background-color: white;
        opacity: 0.4;
    }
`

export default function Seeker() {
    return (
        <>
            <Wrapper>
                <LeftTimer>0:00</LeftTimer>
                <SliderWrapper min={0} max={100} />
                <RightTimer>1:00</RightTimer>
            </Wrapper>
        </>
    )
}
