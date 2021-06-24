import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends React.Component {
    state = { videos: [] }

    onTermSubmit = async (term) => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    q: term
                }
            })

            this.setState({ videos: response.data.items })
        }
        catch (e) {
            console.log(e)
        }
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos
            </div>
        )
    }
}

export default App 