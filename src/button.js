import React, { useState } from 'react';

function Button() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button
            onClick={() => setCount(count + 1)}
            >
             Click me
            </button>
            <p>You've clicked me {count} times </p>
        </div>

    );
}

export default Button;