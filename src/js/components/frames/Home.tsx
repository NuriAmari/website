// @ts-nocheck

import React, { useState, useEffect, useRef } from 'react';
import frame01 from '../../../img/globe/frame_00_delay-0.03s.gif';
import frame02 from '../../../img/globe/frame_01_delay-0.03s.gif';
import frame03 from '../../../img/globe/frame_02_delay-0.03s.gif';
import frame04 from '../../../img/globe/frame_03_delay-0.03s.gif';
import frame05 from '../../../img/globe/frame_04_delay-0.03s.gif';
import frame06 from '../../../img/globe/frame_05_delay-0.03s.gif';
import frame07 from '../../../img/globe/frame_06_delay-0.03s.gif';
import frame08 from '../../../img/globe/frame_07_delay-0.03s.gif';
import frame09 from '../../../img/globe/frame_08_delay-0.03s.gif';
import frame10 from '../../../img/globe/frame_09_delay-0.03s.gif';
import frame11 from '../../../img/globe/frame_10_delay-0.03s.gif';
import frame12 from '../../../img/globe/frame_11_delay-0.03s.gif';
import frame13 from '../../../img/globe/frame_12_delay-0.03s.gif';
import frame14 from '../../../img/globe/frame_13_delay-0.03s.gif';
import frame15 from '../../../img/globe/frame_14_delay-0.03s.gif';
import frame16 from '../../../img/globe/frame_15_delay-0.03s.gif';
import frame17 from '../../../img/globe/frame_16_delay-0.03s.gif';
import frame18 from '../../../img/globe/frame_17_delay-0.03s.gif';
import frame19 from '../../../img/globe/frame_18_delay-0.03s.gif';
import frame20 from '../../../img/globe/frame_19_delay-0.03s.gif';
import frame21 from '../../../img/globe/frame_20_delay-0.03s.gif';
import frame22 from '../../../img/globe/frame_21_delay-0.03s.gif';
import frame23 from '../../../img/globe/frame_22_delay-0.03s.gif';
import frame24 from '../../../img/globe/frame_23_delay-0.03s.gif';
import frame25 from '../../../img/globe/frame_24_delay-0.03s.gif';
import frame26 from '../../../img/globe/frame_25_delay-0.03s.gif';
import frame27 from '../../../img/globe/frame_26_delay-0.03s.gif';
import frame28 from '../../../img/globe/frame_27_delay-0.03s.gif';
import frame29 from '../../../img/globe/frame_28_delay-0.03s.gif';
import frame30 from '../../../img/globe/frame_29_delay-0.03s.gif';
import frame31 from '../../../img/globe/frame_30_delay-0.03s.gif';
import frame32 from '../../../img/globe/frame_31_delay-0.03s.gif';
import frame33 from '../../../img/globe/frame_32_delay-0.03s.gif';
import frame34 from '../../../img/globe/frame_33_delay-0.03s.gif';
import frame35 from '../../../img/globe/frame_34_delay-0.03s.gif';
import frame36 from '../../../img/globe/frame_35_delay-0.03s.gif';
import frame37 from '../../../img/globe/frame_36_delay-0.03s.gif';
import frame38 from '../../../img/globe/frame_37_delay-0.03s.gif';
import frame39 from '../../../img/globe/frame_38_delay-0.03s.gif';
import frame40 from '../../../img/globe/frame_39_delay-0.03s.gif';
import frame41 from '../../../img/globe/frame_40_delay-0.03s.gif';
import frame42 from '../../../img/globe/frame_41_delay-0.03s.gif';
import frame43 from '../../../img/globe/frame_42_delay-0.03s.gif';
import frame44 from '../../../img/globe/frame_43_delay-0.03s.gif';
import frame45 from '../../../img/globe/frame_44_delay-0.03s.gif';
import frame46 from '../../../img/globe/frame_45_delay-0.03s.gif';
import frame47 from '../../../img/globe/frame_46_delay-0.03s.gif';
import frame48 from '../../../img/globe/frame_47_delay-0.03s.gif';
import frame49 from '../../../img/globe/frame_48_delay-0.03s.gif';
import frame50 from '../../../img/globe/frame_49_delay-0.03s.gif';
import frame51 from '../../../img/globe/frame_50_delay-0.03s.gif';
import frame52 from '../../../img/globe/frame_51_delay-0.03s.gif';
import frame53 from '../../../img/globe/frame_52_delay-0.03s.gif';
import frame54 from '../../../img/globe/frame_53_delay-0.03s.gif';
import frame55 from '../../../img/globe/frame_54_delay-0.03s.gif';
import frame56 from '../../../img/globe/frame_55_delay-0.03s.gif';
import frame57 from '../../../img/globe/frame_56_delay-0.03s.gif';
import frame58 from '../../../img/globe/frame_57_delay-0.03s.gif';
import frame59 from '../../../img/globe/frame_58_delay-0.03s.gif';
import frame60 from '../../../img/globe/frame_59_delay-0.03s.gif';
import frame61 from '../../../img/globe/frame_60_delay-0.03s.gif';
import frame62 from '../../../img/globe/frame_61_delay-0.03s.gif';
import frame63 from '../../../img/globe/frame_62_delay-0.03s.gif';
import frame64 from '../../../img/globe/frame_63_delay-0.03s.gif';
import frame65 from '../../../img/globe/frame_64_delay-0.03s.gif';
import frame66 from '../../../img/globe/frame_65_delay-0.03s.gif';
import frame67 from '../../../img/globe/frame_66_delay-0.03s.gif';
import frame68 from '../../../img/globe/frame_67_delay-0.03s.gif';
import frame69 from '../../../img/globe/frame_68_delay-0.03s.gif';
import frame70 from '../../../img/globe/frame_69_delay-0.03s.gif';
import frame71 from '../../../img/globe/frame_70_delay-0.03s.gif';
import frame72 from '../../../img/globe/frame_71_delay-0.03s.gif';
import frame73 from '../../../img/globe/frame_72_delay-0.03s.gif';
import frame74 from '../../../img/globe/frame_73_delay-0.03s.gif';
import frame75 from '../../../img/globe/frame_74_delay-0.03s.gif';
import frame76 from '../../../img/globe/frame_75_delay-0.03s.gif';
import frame77 from '../../../img/globe/frame_76_delay-0.03s.gif';
import frame78 from '../../../img/globe/frame_77_delay-0.03s.gif';
import frame79 from '../../../img/globe/frame_78_delay-0.03s.gif';
import frame80 from '../../../img/globe/frame_79_delay-0.03s.gif';
import frame81 from '../../../img/globe/frame_80_delay-0.03s.gif';
import frame82 from '../../../img/globe/frame_81_delay-0.03s.gif';
import frame83 from '../../../img/globe/frame_82_delay-0.03s.gif';
import frame84 from '../../../img/globe/frame_83_delay-0.03s.gif';
import frame85 from '../../../img/globe/frame_84_delay-0.03s.gif';
import frame86 from '../../../img/globe/frame_85_delay-0.03s.gif';
import frame87 from '../../../img/globe/frame_86_delay-0.03s.gif';
import frame88 from '../../../img/globe/frame_87_delay-0.03s.gif';
import frame89 from '../../../img/globe/frame_88_delay-0.03s.gif';
import frame90 from '../../../img/globe/frame_89_delay-0.03s.gif';
import frame91 from '../../../img/globe/frame_90_delay-0.03s.gif';
import frame92 from '../../../img/globe/frame_91_delay-0.03s.gif';
import frame93 from '../../../img/globe/frame_92_delay-0.03s.gif';
import frame94 from '../../../img/globe/frame_93_delay-0.03s.gif';
import frame95 from '../../../img/globe/frame_94_delay-0.03s.gif';
import frame96 from '../../../img/globe/frame_95_delay-0.03s.gif';

const frames = [
    frame01,
    frame02,
    frame03,
    frame04,
    frame05,
    frame06,
    frame07,
    frame08,
    frame09,
    frame10,
    frame11,
    frame12,
    frame13,
    frame14,
    frame15,
    frame16,
    frame17,
    frame18,
    frame19,
    frame20,
    frame21,
    frame22,
    frame23,
    frame24,
    frame25,
    frame26,
    frame27,
    frame28,
    frame29,
    frame30,
    frame31,
    frame32,
    frame33,
    frame34,
    frame35,
    frame36,
    frame37,
    frame38,
    frame39,
    frame40,
    frame41,
    frame42,
    frame43,
    frame44,
    frame45,
    frame46,
    frame47,
    frame48,
    frame49,
    frame50,
    frame51,
    frame52,
    frame53,
    frame54,
    frame55,
    frame56,
    frame57,
    frame58,
    frame59,
    frame60,
    frame61,
    frame62,
    frame63,
    frame64,
    frame65,
    frame66,
    frame67,
    frame68,
    frame69,
    frame70,
    frame71,
    frame72,
    frame73,
    frame74,
    frame75,
    frame76,
    frame77,
    frame78,
    frame79,
    frame80,
    frame81,
    frame82,
    frame83,
    frame84,
    frame85,
    frame86,
    frame87,
    frame88,
    frame89,
    frame90,
    frame91,
    frame92,
    frame93,
    frame94,
    frame95,
].map((image) => {
    const img = new Image();
    img.src = image;
    return img;
});

const charWidth = 6;
const charHeight = 10;
const likelihoodOfReplacingWord = 0.05;
const likelihoodOfChangingExistingText = 0.1;

function randomChoice(x) {
    return x[Math.floor(Math.random() * x.length)];
}

function getTextContentWithImageAtSize(image, width, height, words, letters) {
    const canvas = document.createElement('canvas');
    canvas.width = parseInt(width / charWidth);
    canvas.height = parseInt(height / charHeight);
    canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
    var data = canvas
        .getContext('2d')
        .getImageData(0, 0, canvas.width, canvas.height);
    var chars = '';
    var startOfFilledInSequence = 0;
    var i = 0;
    for (var y = 0; y < data.height; y++) {
        for (var x = 0; x < data.width; x++) {
            var black = data.data[i * 4] < 120;
            var transparent = data.data[i * 4 + 3] < 50;
            if (black && !transparent) {
                if (startOfFilledInSequence === null)
                    startOfFilledInSequence = i;

                chars += randomChoice(letters);

                if (
                    words.length > 0 &&
                    Math.random() < likelihoodOfReplacingWord
                ) {
                    var word = randomChoice(words);
                    if (i + 1 - startOfFilledInSequence >= word.length) {
                        chars =
                            chars.substring(0, chars.length - word.length) +
                            word;
                    }
                }
            } else {
                chars += ' ';
                startOfFilledInSequence = null;
            }
            i++;
        }
        chars += '\n';
        startOfFilledInSequence = null;
    }
    return chars;
}

function render(element, image, words, letters) {
    const text = getTextContentWithImageAtSize(
        image,
        element.clientWidth,
        element.clientHeight,
        words,
        letters
    );
    element.textContent = text;
}

const Home = () => {
    const logo = useRef(null);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % frames.length);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (logo.current) {
            render(
                logo.current,
                frames[index],
                ['nuri', 'amari'],
                '0101010101_'
            );
        }
    }, [index]);

    return (
        <div className="home">
            <div ref={logo} className="logo letter-animation"></div>
            <div>
                <strong>nuri amari:</strong> <a href="#">github</a>{' '}
                <a href="#">resume</a> <a href="#">email</a>{' '}
                <a href="#">linkedin</a>{' '}
            </div>
        </div>
    );
};

export default Home;
