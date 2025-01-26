import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>

                <div className="navbar-search">
                    <span className="logo">Tools</span>
                    <select className="category-dropdown">
                        <option value="all">All Categories</option>
                    </select>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search Among 10,000 Products..."
                    />
                    <button className="search-button">🔍</button>
                    <div className="navbar-links">
                        <span className="link">Arabic</span>
                        <span className="link">Wishlist</span>
                        <span className="link">Cart</span>
                        <span className="link">User</span>
                    </div>
                </div>

            </div>


            <div className="navbar-menu">
                <a href="/">Home</a>
                <a href="/">Bestsellers</a>
                <a href="/">New Arrivals</a>
                <a href="/">Best Deals</a>
                <a href="/">Maintenance & Repairs</a>
            </div>
        </nav>
    );
};

export default Navbar;