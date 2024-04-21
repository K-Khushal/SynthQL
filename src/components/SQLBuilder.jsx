"use client"

import {useState} from 'react';
import axios from 'axios';

function SQLBuilder() {
    const [sqlQuery, setSqlQuery] = useState('');
    const [sqlQueryError, setSqlQueryError] = useState('');

    const generateSQLQuery = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer 848a0599a9b47e36e7be9f782c3fa285004a16656199b73e43b619ea390b814a");

        const raw = JSON.stringify({
            "prompt": "Find all items with id 1.",
            "type": "mysql",
            "schema": "Items (id, ..."
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://www.text2sql.ai/api/sql/generate", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => {
                console.error('Error:', error);
                setSqlQueryError('Internal Server Error');
            });
    };


    return (
        <div className="flex flex-col justify-center items-center text-white">
            <h1>SQL Builder</h1>
            <button onClick={generateSQLQuery} className="bg-gray-600 px-8 py-2 rounded-xl">Generate SQL Query</button>
            {sqlQuery && <pre>{JSON.stringify(sqlQuery, null, 2)}</pre>}
            {sqlQueryError && <p>{sqlQueryError}</p>}
        </div>
    );
}

export default SQLBuilder;
