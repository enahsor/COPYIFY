import React from 'react'
import styled from 'styled-components'
import Art from './art'
import Name from './name'
import Artistes from './artistes'
import Like from './like'
import { queries } from '../../mediaQuery'
import { useDispatch } from 'react-redux'
import { set } from '../../../actions'
import COLORTHIEF from 'color-thief'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    @media all and (min-width: ${queries.large}px) {
        justify-content: space-around;
    }

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Container = styled.div`
    @media all and (min-width: ${queries.large}px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 90%;
        grid-row: 2/3;
        justify-self: start;
    }
    max-width: ${({ theme }) => theme.maxWidth};

    width: 100%;
    grid-area: SONG;
    justify-self: center;
`

const BasicInfo = styled.div`
    @media all and (min-width: ${queries.large}px) {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
        max-width: 80%;
        width: 80%;
    }
`

export default function Song({ song }) {
    const dispatch = useDispatch()

    function getColorFromImage(imageRef) {
        return () => {
            const thief = new COLORTHIEF()
            try {
                const colorValues = thief.getColor(imageRef.current)

                const colorHex = `#${colorValues
                    .map((x) => {
                        let hex = x.toString(16)
                        return hex.length === 1 ? '0' + hex : hex
                    })
                    .join('')}`

                dispatch(set({ playerColor: colorHex }))
            } catch (err) {
                //DO SOMETHING
            }
        }
    }

    return (
        <Container>
            <Art art={song.cover} getColor={getColorFromImage} marginBottom />
            <Wrapper>
                <BasicInfo>
                    <Name name={song.title} size={20} />
                    <Artistes artistes={song.artistes} />
                </BasicInfo>
                <Like />
            </Wrapper>
        </Container>
    )
}

Song.propTypes = {
    song: PropTypes.object,
}
