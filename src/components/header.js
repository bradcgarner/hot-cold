import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    let component = null;
    if(props.modal){
        component = <InfoModal  handleModal={props.handleModal} />
    }
    return (
        <header>
             <TopNav 
                handleReset={props.handleReset}
                handleModal={props.handleModal}
            />
            {component}
            
            <h1>HOT or COLD</h1>
        </header>
    );
};
