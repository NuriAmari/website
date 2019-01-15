import React from 'react';

const MenuToggle = props => (
    <div onClick={props.onClick} className={'MenuToggle ' + props.passedClass}>
        <div id="hamburger-wrapper">
            <span id="bar1" className="line" />
            <span id="bar2" className="line" />
            <span style={{ margin: 0 }} id="bar3" className="line" />
        </div>
    </div>
);

export default MenuToggle;
