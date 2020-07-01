import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    border-radius: 5px;
    border: none;
    background-color: hsla(360, 100%, 100%, 0.35);
    outline: none;
    color: white;
    grid-column: 9/11;
`

export default function Filters() {
    const handleClick = (e) => {
        e.preventDefault()
    }

    return <Wrapper onClick={handleClick}>Filters</Wrapper>
}
