
import { useState, useEffect } from 'react';
import axios from '../context/axios';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        setLoading(true)
        setData([]);
        setError([]);
        // const source = axios.CancelToken.source();
        axios.get(url/*, { cancelToken: source.token }*/)
        .then(res => {
            setLoading(false);
            //checking for multiple responses for more flexibility 
            //with the url we send in.
            res.data && setData(res.data);
            // res.content && setData(res.content);
        })
        .catch(err => {
            setLoading(false)
            setError('An error occurred. Awkward..')
        })
        return 
    }, [url])
  
    return { data, loading, error }
}
  
  export default useFetch;