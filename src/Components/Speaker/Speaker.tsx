import React from 'react';
import {SpeakerInfos} from './SpeakerInfos';
import {SpeakerPicture} from './SpeakerPicture';
import {FadeIn} from '../Animations/Fade/FadeIn';
import {SlideTop} from '../Animations/Slide/SlideTop';

export const Speaker: React.FC<{
    name: string;
    picture: string;
    location?: string;
    role?: string;
}> = ({name, picture, location, role}) => {
    return (
        <>
            <SlideTop from={-100} to={220} durationInFrames={20}>
                <FadeIn durationInFrames={20}>
                    <SpeakerPicture src={picture}/>
                </FadeIn>
            </SlideTop>
            <SlideTop from={230} to={540} durationInFrames={20}>
                <FadeIn durationInFrames={20}>
                    <SpeakerInfos name={name} location={location} role={role}/>
                </FadeIn>
            </SlideTop>
        </>
    );
};
