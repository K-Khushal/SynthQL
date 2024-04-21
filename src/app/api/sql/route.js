import {NextRequest, NextResponse} from 'next/server';
import axios from 'axios';


// To handle a GET request to /api
export async function GET(request) {
    // Do whatever you want
    return NextResponse.json({message: "Hello World"}, {status: 200});
}

// To handle a POST request to /api
export async function POST(request) {
    try {
        const {data} = await axios.post(
            'https://www.text2sql.ai/api/sql/generate',
            req.body.json(),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TEXT2SQL_API_KEY}`,
                },
            }
        );
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.error({status: 500, message: 'Internal Server Error'});
    }
}
