import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    width: calc(100%);
    overflow: hidden;
    text-overflow: ellipsis;
`

export default function ArtistesAlbum({ artistes, album, title }) {
    return (
        <Wrapper>{`${artistes.join(', ')} • ${album ? album : title}`}</Wrapper>
    )
}

ArtistesAlbum.propTypes = {
    artistes: PropTypes.array,
    album: PropTypes.string,
    title: PropTypes.string,
}
