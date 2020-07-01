import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div``

export default function Title({ title }) {
    return <Wrapper>{title}</Wrapper>
}

Title.propTypes = {
    title: PropTypes.string,
}
