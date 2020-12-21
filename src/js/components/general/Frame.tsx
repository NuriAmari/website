import React from 'react';
import '../../include/lettercrap.js';

type FrameProps = {
    children: React.ReactNode;
};

const Frame = (props: FrameProps) => (
    <div className="frame">{props.children}</div>
);

export default Frame;
