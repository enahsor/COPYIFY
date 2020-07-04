import { createStore } from 'redux'
import reducer from '../reducers'
import data from '../data'

const initialState = {
    mobile: false,
    mobileWidth: 375,
    mobileHeight: 812,
    playerDown: true,
    playing: false,
    liked: false,
    clickedLike: false,
    playerColor: '#d4d4d4',
    searchFocus: false,
    libSearchValue: '',
    currentlyPlaying: {},
    savedSongs: [...data],
    audioObj: new Audio(),
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
