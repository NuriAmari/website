import React, { useState } from 'react';

type Page = {
    name: string;
    color: string;
};

const pages: Page[] = [
    { name: 'Home', color: 'salmon' },
    { name: 'About', color: 'yellow' },
    { name: 'Play', color: 'purple' },
];

const Navigation = () => {
    const [bgColor, setBgColor] = useState<string>('');

    return (
        <div className="frame">
            <div id="navigation" className={bgColor}>
                {pages.map((page, index) => (
                    <p
                        key={index}
                        onMouseEnter={(e) => setBgColor(page.color)}
                        onMouseLeave={(e) => setBgColor('')}
                    >
                        {page.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Navigation;
