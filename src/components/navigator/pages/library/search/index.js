import React from 'react'
import styled from 'styled-components'
import Filters from './filters'
import { ReactComponent as Icon } from '../../../../../svgs/search.svg'

const Form = styled.form`
    width: 100%;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    font-weight: bold;
`

const IconWrapper = styled(Icon)`
    width: 100%;
    max-width: 25px;
    padding: 5px;
    fill: white;
`
const IconContainer = styled.div`
    width: 10%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3px;
    background-color: hsla(360, 100%, 100%, 0.35);
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
`

const SearchBar = styled.input`
    width: 90%;

    padding: 5px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: none;
    outline: none;
    background-color: hsla(360, 100%, 100%, 0.35);
    color: white;
    ::placeholder {
        color: white;
    }
`

const SearchWrapper = styled.div`
    width: 100%;
    display: inline-flex;
    flex: 1 1 300px;
    position: relative;
    grid-column: 1/8;
    justify-content: stretch;
`

export default function Search() {
    return (
        <Form>
            <SearchWrapper>
                <IconContainer>
                    <IconWrapper />
                </IconContainer>

                <SearchBar type='text' placeholder='Find in library' />
            </SearchWrapper>

            <Filters />
        </Form>
    )
}
