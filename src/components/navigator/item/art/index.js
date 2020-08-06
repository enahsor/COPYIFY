import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Image = styled.img`
    max-width: 50px;
    max-height: 50px;
    margin-right: 5%;
`

export default function Art({ art, size = 50, extension = '.jpg' }) {
    const link = size ? `${art}_${size}${extension}` : `${art}${extension}`
    return <Image src={`${process.env.PUBLIC_URL}${link}`} />
}

Art.propTypes = {
    art: PropTypes.string,
    size: PropTypes.number,
    extension: PropTypes.string,
}
