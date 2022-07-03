import React, { Component } from "react";
import '../assets/style/home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="Header-Home">Wellcome Amin</h1>
                <div className="Input">
                    <div className="ininput">
                        <div className="iconparent">
                            <span className="iconsearch">
                                <svg src="../assets/style/icon/search.svg"></svg>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;