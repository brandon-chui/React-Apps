import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = 'PfnIKaqddP8ToolRtyJZpiFDumgcSPuI';

function GiphySearch() {

    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // api.giphy.com/v1/gifs/search
        // const result = axios(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${api}&limit=5`)
        // console.log(result.data)

    }

    useEffect(() => {
        async function fetchGiphy() {
            const result = await axios(`http://api.giphy.com/v1/gifs/search?q=pikachu&api_key=${api}&limit=5`);
            console.log(result)
        }

        fetchGiphy();
    }, [])

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
        </section>
    )
}

export default GiphySearch;