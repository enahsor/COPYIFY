import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { queries } from '../../../mediaQuery'

const Image = styled.img`
    width: 100%;
    max-width: 100%;
    margin-bottom: ${(props) => (props.marginBottom ? `20px` : '0px')};
    user-select: none;

    @media all and (min-width: ${queries.large}px) {
        max-width: 80px;
        min-width: 80px;
        max-height: 80px;
        margin-bottom: 0px;
    }
`

export default function Art({ art, getColor, marginBottom }) {
    const imageRef = useRef(null)
    const extension = '.jpg'
    const onLoad = getColor ? getColor(imageRef) : () => {}

    return (
        <Image
            marginBottom={marginBottom}
            src={`${process.env.PUBLIC_URL}${art}_550${extension}`}
            alt={`music art cover`}
            draggable={false}
            ref={imageRef}
            onLoad={onLoad}
            crossOrigin={'anonymous'}
        />
    )
}

Art.propTypes = {
    art: PropTypes.string,
    getColor: PropTypes.func,
    marginBottom: PropTypes.bool,
}
