import React from 'react';
import SongList from '../components/SongList'
import SongDetail from '../components/SongDetail'

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                   <SongList></SongList>
                </div>
                <div className="column eight wide">
                    <SongDetail></SongDetail>
                </div>
            </div>
        </div>
    )
}

export default App;