'use client';

import React from 'react';
import {loadFont} from '@remotion/google-fonts/Nunito';

import {AbsoluteFill, Audio, interpolate, Sequence, staticFile} from 'remotion';
import {Background} from '../Components/Background';
import {SpeakerProps} from '../Types/SpeakerProps';
import {Footer} from "../Components/Footer";
import {Logo} from "../Components/Logo";
import {FadeIn} from "../Components/Animations/Fade/FadeIn";
import {Title} from "../Components/Title";
import {Speakers} from "../Components/Speaker/Speakers";
import {LogoDate} from "../BestOfTechnozaure/Talk/LogoDate";

const {fontFamily} = loadFont();

export interface BotzTalkProps {
    title: string;
    date: string;
    speakers: SpeakerProps[];
}

export const TechnozaureTalk: React.FC<BotzTalkProps> = ({title, date, speakers}) => {
    return (
        <AbsoluteFill style={{color: 'white', fontFamily}}>
            <Audio src={staticFile('sound/zenikaOutro.wav')} startFrom={90} volume={(f) =>
                interpolate(f, [0, 30, 80, 150], [0, 0.3, 0.3, 0] , { extrapolateRight: "clamp" })
            }  />
            <Sequence name="Background">
                <Background url="/Technozaure/background.png"/>
            </Sequence>
            <Sequence name="Footer">
                <Footer content="www.zenika.com"/>
            </Sequence>
            <Sequence name="Logo" from={80}>
                <Logo src="/Technozaure/technozaureLogo.svg" width={450} top={50}/>
            </Sequence>
            <Sequence name="Speaker" from={15}>
                <Speakers speakers={speakers} />
            </Sequence>
            <Sequence name="Title" from={40}>
                <FadeIn durationInFrames={30}>
                    <Title title={title} style={{fontSize: '3.6rem'}} top={700}/>
                </FadeIn>
            </Sequence>
            <Sequence name="Detail" from={60}>
                <FadeIn durationInFrames={15}>
                    <hr
                        style={{
                            position: 'absolute',
                            width: '5px',
                            height: '80px',
                            border: 'none',
                            background: 'white',
                            left: '50%',
                            bottom: 70,
                            transform: 'translateX(-50%)',
                        }}
                    />
                </FadeIn>
                <LogoDate date={date} />
            </Sequence>
        </AbsoluteFill>
    );
};
