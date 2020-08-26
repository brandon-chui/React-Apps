import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';

const api = 'PfnIKaqddP8ToolRtyJZpiFDumgcSPuI';

function GiphySearch() {

    const [value, setValue] = useState('');
    const [previousValue, setPreviousValue] = useState('');
    const [data, setData] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        async function searchGiphy(val) {
            const result = await axios(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${api}&limit=5`)

            setData(result.data.data)
            setPreviousValue(value)
            setValue('')
        }

        searchGiphy(value);
    }

    useEffect(() => {
        async function fetchGiphy() {
            const result = await axios(`http://api.giphy.com/v1/gifs/trending`, {
                params: {
                    api_key: api,
                    limit: 5,
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

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return  (
        <section>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Gif Search"
                    onChange={handleChange}
                    name="gifSearch"
                    value={value}
                    type="text"
                />
                <Button type="submit" style={{ verticalAlign: 'bottom' }}>
                    submit
                </Button>
            </form>
            {previousValue && 
                <h4>Search Results for {previousValue}</h4>}
            
            <div className='gifs'>
                {renderGifs(data)}
            </div>
        </section>
    )
}

export default GiphySearch;