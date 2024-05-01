import {NextRequest, NextResponse} from 'next/server';
import axios from 'axios';



// To handle a GET request to /api
export async function GET(request) {
    // Do whatever you want
    return NextResponse.json({message: "Hello World"}, {status: 200});
}

// To handle a POST request to /api
export async function POST(req,res){

    const requestData = {
        prompt: 'Find all the employee names and their departments.',
        type: 'mysql',
        schema: '',
    };

    const raw = JSON.stringify(requestData);

    const apiUrl = 'https://www.text2sql.ai/api/sql/generate';
    const authToken = 'APIKEY';


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${authToken}`);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (response.headers.get('content-type').includes('application/json')) {
            const result = await response.json();
            return NextResponse.json(result);
        } else {
            throw new Error('Received content is not in JSON format');
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.toString() });
    }
}