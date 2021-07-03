import { useEffect, useState } from 'react'
import youtube from '../apis/youtube'

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)        
    }, [defaultSearchTerm])

    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setVideos(response.data.items)
    }

    // // Method 1 (React convention)
    return [videos, search] 

    // Method 2 (js convention)
    // return { videos, search }

}

export default useVideos