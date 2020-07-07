import React from 'react'
import styled from 'styled-components'
import Item from '../../item'
import Search from './search'
import data from '../../../../data'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../../../../actions'
//import audioObj from '../../../../audio'
//import db from '../../../../database'

const Wrapper = styled.div`
    height: 100vh;
    padding: 20px 0px;
    overflow-y: auto;
    background-color: black;
`

export default function Library() {
    const dispatch = useDispatch()

    const libSearchValue = useSelector(
        (state) => state.libSearchValue
    ).toLowerCase()

    const startPlaying = async (song) => {
        dispatch(set({ currentlyPlaying: song }))
        //Testing streaming..

        fetch(song.audio)
            .then((res) => {
                const reader = res.body.getReader()
                console.log(reader)
            })
            .catch((err) => {
                console.log(`Something went wrong ${err}`)
            })

        /*
        const found = await db.audio.get(song.audio, (item) => {
            return item
        })

        
        if (found) {
            //USE LOCAL COPY
            console.log('LOCAL COPY')
            db.audio.get(song.audio, (item) => {
                const fileName = item.path.split('/').pop()

                const file = new File([item.blob], fileName)
                const pathToFile = URL.createObjectURL(file)

                audioObj.src = pathToFile
                audioObj.load()
                audioObj.play()
            })
        } else {
            //STREAM FILE HERE
            console.log('STREAMING..')
            fetch(song.audio)
                .then((res) => {
                    const reader = res.body.getReader()
                    const stream = new ReadableStream({
                        start(controller){
                            // the following function handles each data chunk
                        }
                    })
                })
                .catch((err) => console.error(`Something went wrong ${err}`))
        }

        dispatch(set({ playing: true }))
        //audioObj.src = song.audio
        //audioObj.load()
        //audioObj.play()
        */
    }

    const filterItems = (item) => {
        return (
            item.title.toLowerCase().includes(libSearchValue) ||
            item.album.toLowerCase().includes(libSearchValue) ||
            item.artistes.join('').toLowerCase().includes(libSearchValue)
        )
    }

    // eslint-disable-next-line react/prop-types
    const createItems = (item, key) => {
        return <Item item={item} key={key} startPlaying={startPlaying} />
    }

    const filtered = data.filter(filterItems)

    return (
        <Wrapper>
            <Search />
            {filtered.map(createItems)}
        </Wrapper>
    )
}
