import React from "react";
import { MyComposition } from "./Composition";
import {Composition} from "remotion";

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="firstCompo"
                component={MyComposition}
                durationInFrames={60}
                fps={30}
                width={1280}
                height={720}
            />
        </>
    );
};