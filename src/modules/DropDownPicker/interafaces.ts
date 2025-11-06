import React from "react";

export type ListOfConcernsProps = {
    id: string;
    type: string;
    error_message: string;
    success_message: string;
    label: string;
}

export interface PickerItemProps {
    item: ListOfConcernsProps,
    index: number;
}

export interface DropDownPickerProps {
    placeholder?: string;
    onLeftIconClick?: (p?: any) => void;
    onRightIconClick?: (p?: any) => void;
    rightIcon?: () => React.ReactNode;
    leftIcon?: () => React.ReactNode;
    formLabel?: string;
    data: Array<ListOfConcernsProps>
}