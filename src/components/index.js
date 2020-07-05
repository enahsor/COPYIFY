import styled from 'styled-components'
import Player from './player'
import Mini from './mini'
import Navigator from './navigator/'
import { GlobalStyles } from '../styles/globalStyles'
import React, { useEffect } from 'react'
import db from '../database'
import data from '../data'

const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: green;
    position: relative;
`

function App() {
    useEffect(() => {
        saveMediaToBrowser(data, db)
    }, [])

    async function saveMediaToBrowser(data, db) {
        const found = await db.audio.toArray((found) => {
            return found
        })
        const notInDB = data.filter((item) => item.audio !== found.path)
        notInDB.forEach(async (item) => {
            try {
                const res = await fetch(item.audio)
                const blob = await res.blob()

                const id = await db.audio.add({
                    path: item.audio,
                    blob: blob,
                    type: blob.type,
                })

                console.log(`${id} was added to DB`)
            } catch (err) {
                //console.log(`Something went wrong ${err}`)
            }
        })
    }

    return (
        <>
            <GlobalStyles />

            <AppWrapper>
                <Navigator />
                <Player />
                <Mini />
            </AppWrapper>
        </>
    )
}

export default App
