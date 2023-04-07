import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiFolder } from "react-icons/fi";

const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul>
                <li>
                    <Link to='/'>
                        <FiHome />
                    </Link>
                </li>
                <li>
                    <Link to='/note/new'>
                        <FiPlusCircle />
                    </Link>
                </li>
                <li>
                    <Link to='/archives'>
                        <FiFolder />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
