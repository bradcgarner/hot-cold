import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={() => props.handleModal()} >
                        What?
                    </a>
                </li>
                <li>
                    <a onClick={()=> props.handleReset()}className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

