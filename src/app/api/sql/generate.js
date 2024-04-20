// pages/api/sql/generate.js

import axios from 'axios';

export default async function handler(req, res) {
    console.log('Received request:', req.method, req.url);

    if (req.method === 'POST') {
        try {
            const { data } = await axios.post(
                'https://www.text2sql.ai/api/sql/generate',
                req.body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TEXT2SQL_API_KEY}`,
                    },
                }
            );
            res.status(200).json(data);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}