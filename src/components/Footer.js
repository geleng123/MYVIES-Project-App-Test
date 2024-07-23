import { Button }from "react-bootstrap"
import {BsTwitterX, BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center flex flex-col items-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://facebook.com" className="text-white hover:text-gray-400">
                        <BsFacebook size={24} />
                    </a>
                    <a href="https://instagram.com" className="text-white hover:text-gray-400">
                        <BsInstagram size={24} />
                    </a>
                    <a href="https://twitter.com" className="text-white hover:text-gray-400">
                        <BsTwitterX size={24} />
                    </a>
                    <a href="https://youtube.com" className="text-white hover:text-gray-400">
                        <BsYoutube size={24} />
                    </a>
                </div>
                <ul className="nav-links flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-4">
                    <li><a href="/" className="hover:text-gray-400">Help Center</a></li>
                    <li><a href="/" className="hover:text-gray-400">Privacy</a></li>
                    <li><a href="/" className="hover:text-gray-400">Subscribe</a></li>
                    <li><a href="/" className="hover:text-gray-400">Contact Us</a></li>
                    <li><a href="/" className="hover:text-gray-400">About Us</a></li>
                </ul>
                <p>&copy; 2024 MYVIES, inc.</p>
            </div>
        </footer>
    )
}

export default Footer
