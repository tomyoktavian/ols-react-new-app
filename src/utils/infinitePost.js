import { useEffect, useState } from 'react'
import axios from 'axios'

export default function InfinitePosts(pageNumber) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [post, setPost] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setPost([])
    }, [])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        setTimeout(() => {
            axios({
                method: 'GET',
                url: `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=5`,
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then(res => {
                setPost(prevPost => {
                    return [...new Set([...prevPost, ...res.data])]
                })
                setHasMore(res.data.length > 0)
                setLoading(false)
            }).catch(e => {
                if (axios.isCancel(e)) return
                setError(true)
            })
        }, pageNumber === 1 ? 0 : 1500);
        return () => cancel()
    }, [pageNumber])


    return { loading, error, post, hasMore }
}