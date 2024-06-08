"use client";

import React, {useState, useRef} from "react";
import axios from 'axios';

export default function PromptSection() {
    const [isSchema, setIsSchema] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const sqlRef = useRef();

    const [sqlResult, setSqlResult] = useState('SELECT * FROM users WHERE state=\'CA\' AND credits > 1000;');
    const [schema, setSchema] = useState('Employee (id, name, department_id);');
    const [prompt, setPrompt] = useState('Find all users who live in California and have over 1000 credits');

    const generateSQLQuery = async () => {
        try {
            const data = {
                prompt: prompt,
                type: "mysql",
                schema: isSchema ? schema : ""
            };

            const response = await axios.post('/api/sql', data)

            setSqlResult(response.data.output);
        } catch (error) {
            console.error('Error:', error);
            setSqlResult("Error generating SQL query.")
        } finally {
        }
    };

    const handleSchema = () => {
        setIsSchema(!isSchema);
    };

    const handleCopy = () => {
        // Function to handle the copy action
        navigator.clipboard.writeText(sqlRef.current.innerText).then(
            () => {
                console.log("Copying to clipboard was successful!");
                setShowToast(true); // Show the toast
            },
            (err) => {
                console.error("Could not copy text: ", err);
            },
        );
    };

    const handleCloseToast = () => {
        // Function to handle the close toast action
        setShowToast(false); // Hide the toast
    };

    return (
        <div className="bg-[#1e1e2d] p-8 max-w-2xl mx-auto rounded-lg tracking-wider w-2/3">
            <div className="flex items-center justify-between pb-4 border-b border-[#34344c]">
                <h1 className="text-white text-3xl">Generate SQL</h1>
                {/*<Button className="text-white bg-[#34344c] hover:bg-[#4c4c63]">Random Example</Button>*/}
            </div>
            <div className="space-y-4 py-4">
                <div className="flex items-center justify-end">
                    <span className="text-white pr-2">Add database schema {isSchema ? "✅" : "❌"}</span>
                    <input
                        type="checkbox"
                        onClick={handleSchema}
                        className="peer sr-only opacity-0"
                        id="toggle"
                        defaultValue={false}
                    />
                    <label
                        htmlFor="toggle"
                        className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
                    ></label>
                    {/*<Switch id="add-schema" onClick={handleSchema}/>*/}
                </div>
                {isSchema && (
                    <div className="space-y-4">
                        <h2 className="text-white text-base">Add your database tables here:</h2>
                        <textarea
                            className="w-full bg-[#252535] border border-[#34344c] text-sm text-white font-mono placeholder:text-[#55556d] p-4 rounded-md"
                            placeholder="Write here what you want:"
                            value={schema}
                            onChange={(e) => setSchema(e.target.value)}
                        >
							{schema}
						</textarea>
                        <hr/>
                    </div>
                )}
                <h2 className="text-white text-base">Write here what you want:</h2>
                <textarea
                    className="w-full bg-[#252535] border border-[#34344c] text-white text-sm font-mono placeholder:text-[#55556d] p-4 rounded-md"
                    placeholder="Write here what you want:"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                >
					{prompt}
				</textarea>
                <button
                    onClick={generateSQLQuery}
                    className="bg-[#bd1e59] hover:bg-[#d5306f] text-white w-full py-2 rounded">
                    Generate SQL
                </button>
                <div className="bg-[#252535] border border-[#34344c] text-white p-4 rounded-md">
                    <h2 className="text-[#bd1e59] mb-4">Your AI-generated SQL query:</h2>
                    <code ref={sqlRef} className="block whitespace-pre bg-[#1e1e2d] p-4 rounded-md text-wrap">
                        {sqlResult}
                    </code>
                    <button
                        onClick={handleCopy}
                        className="mt-4 bg-[#34344c] hover:bg-[#4c4c63] text-white w-full py-2 rounded">
                        Copy
                    </button>
                    {showToast && (
                        <div
                            className="bg-green-500 py-2 px-4 rounded-md text-white text-center fixed bottom-4 right-4 flex items-center justify-center gap-4">
                            <p>Copied to clipboard!</p>
                            <span className="cursor-pointer font-bold text-base" onClick={handleCloseToast}>
								<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 14 14">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
								</svg>
							</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
