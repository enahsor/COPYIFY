import React from 'react'
import styled from 'styled-components'
import Art from './art'
import ArtistesAlbum from './artistes_album'
//import Date from './date'
import Explicit from './explicit'
import Like from './like'
import Menu from './menu'
//import Play from './play'
//import PlayCount from './playcount'
import Title from './title'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    display: grid;
    margin: 20px 0;
    width: 100%;
    transition: 0.25s ease-in;
    :hover {
        background-color: #2e2e2e;
        cursor: pointer;
    }
    color: white;
    padding: 10px 20px;
    grid-template-columns: repeat(10, 10%);
    grid-template-rows: 1fr;
`

const Properties = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: calc(100%);
    text-overflow: ellipsis;
    white-space: nowrap;
    div {
        margin-right: 10px;
    }
`
const ArtInfo = styled.div`
    width: 100%;
    display: flex;
    grid-column: 1/6;
`

const Lower = styled.div`
    display: flex;
    opacity: 0.7;
`

export default function Item({ item, key, startPlaying }) {
    const handleClick = () => {
        startPlaying(item)
    }

    return (
        <Wrapper onClick={handleClick} key={key}>
            <ArtInfo>
                <Art art={item.cover} />
                <Properties>
                    <Title title={item.title} />
                    <Lower>
                        <Explicit explicit={item.explicit} />
                        <ArtistesAlbum
                            artistes={item.artistes}
                            album={item.album}
                            title={item.title}
                        />
                    </Lower>
                </Properties>
            </ArtInfo>
            <Like like={item.liked} />
            <Menu />
        </Wrapper>
    )
}

Item.propTypes = {
    item: PropTypes.object,
    key: PropTypes.number,
    startPlaying: PropTypes.func,
}
