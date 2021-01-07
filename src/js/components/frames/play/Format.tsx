import React, { useState } from 'react';

import AceEditor, { IAnnotation, IMarker } from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';

type OverlayComponentProps = {
    visible: boolean;
};

const Overlay = (props: OverlayComponentProps) => {
    return (
        <div className="overlay">
            {props.visible && (
                <div>
                    <h2>JSON Formatter</h2>
                </div>
            )}
        </div>
    );
};

const Format = () => {
    const [content, setContent] = useState<string>(`[1,2,3]`);

    const [info, setInfo] = useState<boolean>(false);
    const [annotations, setAnnotations] = useState<IAnnotation[]>([]);
    const [markers, setMarkers] = useState<IMarker[]>([]);
    const toggleInfo = () => setInfo(!info);

    const onChange = (newContent: string) => {
        setContent(newContent);
        setMarkers([]);
        setAnnotations([]);
    };

    const format = async () => {
        const response = await fetch('/api/format', {
            method: 'POST',
            body: content,
        });
        const json = await response.json();
        if (json.annotations?.length > 0) {
            setAnnotations(json.annotations);
            setMarkers(json.markers);
        } else {
            setMarkers([]);
            setAnnotations([]);
            setContent(json.content);
        }
    };

    return (
        <div className="format">
            <div className="header">
                <button onClick={(e) => format()}>Format</button>
                <button onClick={(e) => toggleInfo()}>Info</button>
            </div>
            <AceEditor
                theme="monokai"
                mode="json"
                fontSize={14}
                onChange={onChange}
                value={content}
                width="calc(100% - 35px)"
                annotations={annotations}
                markers={markers}
            />
            <Overlay visible={info} />
        </div>
    );
};

export default Format;
