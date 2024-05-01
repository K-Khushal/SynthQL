import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Footer() {
    const footerData = [
        {
            title: "Instagram",
            icon: <FaInstagram />,
            link: "#"
        },
        {
            title: "Github",
            icon: <FaGithub />,
            link: "#"
        },
        {
            title: "LinkedIn",
            icon: <FaLinkedin />,
            link: "#"
        },
        {
            title: "Twitter",
            icon: <FaTwitter />,
            link: "#"
        },
    ];

    return (
        <footer>
            <div
                className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600 justify-center items-center">
                <div className="flex flex-col items-center justify-center pt-6 lg:pt-0 gap-2">
                    <div className="flex justify-center space-x-5">
                        {footerData.map((item, index) => (
                            <a rel="noopener noreferrer" href={item.link} title={item.title} key={index}
                               className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 bg-teal-600 text-gray-50">
                                {item.icon}
                            </a>
                        ))}
                    </div>
                    <h1 className="tracking-wider pt-2">Made by team hustlers</h1>
                </div>
            </div>
        </footer>
    )
};
