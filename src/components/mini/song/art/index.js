import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Image = styled.img`
    width: 60px;
    height: 60px;
    max-width: 60px;
    max-height: 60px;
    margin-right: 15px;
`

export default function Art({ art }) {
    return <Image src={art} alt='minified song cover' />
}

Art.propTypes = {
    art: PropTypes.string,
}
