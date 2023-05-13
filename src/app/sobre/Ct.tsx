'use client';
import React, { useState } from "react";

export default function Ct() {
    const [count, setCount] = useState(0)
    return (
        <main>
            <h1>
                Count { count }
            </h1>
            <button onClick={ () => setCount(count + 1) }>
                Contagem
            </button>
        </main>
    )
}