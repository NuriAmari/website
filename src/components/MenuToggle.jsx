import React from 'react';

const MenuToggle = (props) =>
    <div onClick={props.onClick} className="MenuToggle">
        <div id="hamburger-wrapper">
            <span id="bar1" className="line"></span>
            <span id="bar2" className="line"></span>
            <span style={{margin: 0}} id="bar3" className="line"></span>
        </div>
    </div>

export default MenuToggle;