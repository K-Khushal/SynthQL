"use client"

import React, {useState, useRef} from "react";
import {Button} from "@nextui-org/react";
import {Switch} from "@nextui-org/react";

export default function PromptSection() {

    const [isSchema, setIsSchema] = useState(false);
    const sqlRef = useRef();

    const handleSchema = () => {
        setIsSchema(!isSchema);
    }

    const handleCopy = () => { // Function to handle the copy action
        navigator.clipboard.writeText(sqlRef.current.innerText)
            .then(() => {
                console.log('Copying to clipboard was successful!');
            }, (err) => {
                console.error('Could not copy text: ', err);
            });
    }

    return (
        <div className="bg-[#1e1e2d] p-8 max-w-2xl mx-auto rounded-lg tracking-wide">
            <div className="flex items-center justify-between pb-4 border-b border-[#34344c]">
                <h1 className="text-white text-3xl">Generate SQL</h1>
                {/*<Button className="text-white bg-[#34344c] hover:bg-[#4c4c63]">Random Example</Button>*/}
            </div>
            <div className="space-y-6 py-4 tracking-wide">
                <div className="flex items-center justify-end">
                    <span className="text-white pr-2">
                        Add database schema {isSchema ? "✅" : "❌"}
                    </span>
                    <Switch id="add-schema" onClick={handleSchema}/>
                </div>
                {isSchema &&
                    <div className="space-y-6 py-4">
                        <h2 className="text-white">Add your database tables here:</h2>
                        <textarea
                            className="w-full bg-[#252535] border border-[#34344c] text-white placeholder:text-[#55556d] p-4 rounded-md"
                            placeholder="Write here what you want:"
                        >
                        Employee (id, name, department_id);
                </textarea>
                        <hr/>
                    </div>
                }
                <h2 className="text-white">Write here what you want:</h2>
                <textarea
                    className="w-full bg-[#252535] border border-[#34344c] text-white placeholder:text-[#55556d] p-4 rounded-md"
                    placeholder="Write here what you want:"
                >
                    find all users who live in California and have over 1000 credits
                </textarea>
                <Button className="bg-[#bd1e59] hover:bg-[#d5306f] text-white w-full">Generate SQL</Button>
                <div className="bg-[#252535] border border-[#34344c] text-white p-4 rounded-md">
                    <h2 className="text-[#bd1e59] mb-4">Your AI-generated SQL query:</h2>
                    <code ref={sqlRef} className="block whitespace-pre bg-[#1e1e2d] p-4 rounded-md text-wrap">
                        {`SELECT * FROM users WHERE state='CA' AND credits > 1000;`}
                    </code>
                    <Button onClick={handleCopy} className="mt-4 bg-[#34344c] hover:bg-[#4c4c63] text-white w-full">Copy</Button>
                </div>

            </div>
        </div>
    )
}