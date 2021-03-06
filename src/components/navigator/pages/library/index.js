import React from 'react'
import styled from 'styled-components'
import Item from '../../item'
import Search from './search'
import data from '../../../../data'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../../../../actions'

const Wrapper = styled.div`
    height: 100vh;
    padding: 20px 0px;
    overflow-y: auto;
    background-color: black;
`

const Items = styled.div`
    height: 100vh;
    overflow-x: hidden;
`

export default function Library() {
    const dispatch = useDispatch()

    const libSearchValue = useSelector(
        (state) => state.libSearchValue
    ).toLowerCase()

    const startPlaying = (song) => {
        dispatch(set({ currentlyPlaying: song }))

        dispatch(set({ playing: true }))
    }

    const filterItems = (item) => {
        return (
            item.title.toLowerCase().includes(libSearchValue) ||
            item.album.toLowerCase().includes(libSearchValue) ||
            item.artistes.join('').toLowerCase().includes(libSearchValue)
        )
    }

    // eslint-disable-next-line react/prop-types
    const createItems = (item, key) => {
        return <Item item={item} key={key} startPlaying={startPlaying} />
    }

    const filtered = data.filter(filterItems)

    return (
        <Wrapper>
            <Search />
            <Items>{filtered.map(createItems)}</Items>
        </Wrapper>
    )
}
