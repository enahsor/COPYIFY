import React, { useRef } from 'react'
import styled from 'styled-components'
import SearchButton from './searchButton'
import { ReactComponent as Icon } from '../../../../../svgs/search.svg'
import { useDispatch } from 'react-redux'
import { set } from '../../../../../actions'

const Form = styled.form`
    width: 100%;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    font-weight: bold;
`

const IconWrapper = styled(Icon)`
    width: 100%;
    max-width: 30px;
    padding: 8px;
    fill: white;
`
const IconContainer = styled.div`
    width: 20%;

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
    font-size: 16px;
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
    const dispatch = useDispatch()
    const searchRef = useRef()
    const handleEvent = ({ type }) => {
        switch (type) {
            case 'focus':
                dispatch(set({ searchFocus: true }))
                break

            default:
                break
        }
    }

    const resetSearch = () => {
        searchRef.current.value = ''
        dispatch(set({ libSearchValue: '' }))
    }

    const setLibSearchValue = (e) => {
        const valueFromField = e.target.value
        dispatch(set({ libSearchValue: valueFromField }))
    }

    return (
        <Form>
            <SearchWrapper>
                <IconContainer>
                    <IconWrapper />
                </IconContainer>

                <SearchBar
                    title='Search for music in your library'
                    id='searchbar'
                    type='text'
                    placeholder='Find in library'
                    onFocus={handleEvent}
                    onChange={setLibSearchValue}
                    ref={searchRef}
                />
            </SearchWrapper>

            <SearchButton reset={resetSearch} />
        </Form>
    )
}
