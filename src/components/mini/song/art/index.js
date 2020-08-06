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

export default function Art({ art, size = 50, extension = '.jpg' }) {
    const link = size ? `${art}_${size}${extension}` : `${art}${extension}`
    return <Image src={`${process.env.PUBLIC_URL}${link}`} />
}

Art.propTypes = {
    art: PropTypes.string,
    size: PropTypes.number,
    extension: PropTypes.string,
}
