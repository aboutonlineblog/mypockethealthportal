import React from "react";

export type ProfileSectionsProps = {
    id: string;
    component: () => React.ReactElement;
}

export type RenderProfileSectionProps = {
    item: ProfileSectionsProps,
    index: number;
}