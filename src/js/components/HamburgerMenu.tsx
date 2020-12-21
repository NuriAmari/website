import React from 'react';

type HamburgerMenuProps = {
    onClick(e: React.MouseEvent<HTMLDivElement>): void;
    open: boolean;
};

const HamburgerMenu = (props: HamburgerMenuProps) => (
    <div
        onClick={props.onClick}
        className={'hamburger-menu ' + (props.open ? 'open' : 'closed')}
    >
        <div id="hamburger-wrapper">
            <span id="bar1" className="line" />
            <span id="bar2" className="line" />
            <span style={{ margin: 0 }} id="bar3" className="line" />
        </div>
    </div>
);

export default HamburgerMenu;
