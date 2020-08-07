import styled from 'styled-components'
import Navigator from './navigator/'
import { GlobalStyles } from '../styles/globalStyles'
//import db from '../database'
//import data from '../data'
import React, { useEffect, Suspense } from 'react'
const Player = React.lazy(() => import('./player'))
const Mini = React.lazy(() => import('./mini'))

const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: green;
    position: relative;
`

function App() {
    useEffect(() => {
        //saveMediaToBrowser(data, db)

        window.focus()
    }, [])
    /*
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
    */
    return (
        <>
            <GlobalStyles />

            <AppWrapper>
                <Navigator />
                <Suspense fallback={<div>Loading...</div>}>
                    <Player />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Mini />
                </Suspense>
            </AppWrapper>
        </>
    )
}

export default App
