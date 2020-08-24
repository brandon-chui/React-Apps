import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = 'PfnIKaqddP8ToolRtyJZpiFDumgcSPuI';

function GiphySearch() {

    const [value, setValue] = useState('');
    const [data, setData] = useState([]);

    console.log(data)

    function handleSubmit(e) {
        e.preventDefault();
        async function searchGiphy(val) {
            const result = await axios(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${api}&limit=5`)

            setData(result.data.data)
        }

        handleSubmit(e.target.value)
        // api.giphy.com/v1/gifs/search
        // const result = axios(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${api}&limit=5`)
        // console.log(result.data)

    }

    useEffect(() => {
        async function fetchGiphy() {
            const result = await axios(`http://api.giphy.com/v1/gifs/trending`, {
                params: {
                    api_key: api,
                }
            });
            
            setData(result.data.data)
        }

        fetchGiphy();
    }, [])

    function renderGifs(gifs) {
        return gifs.map(el => {
            return (
                <div key={el.id} className='gif'>
                    <img src={el.images.fixed_height.url} alt='...loading'/>
                </div>
            )
        })
    }

    return  (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    Giphy Search
                    <input
                        placeholder='Search for gif'
                        value={value}
                        onChange={(e) => setValue(e.value)}
                    >

                    </input>
                </label>
            </form>
            <div class='gifs'>
                {renderGifs(data)}
            </div>
        </section>
    )
}

export default GiphySearch;