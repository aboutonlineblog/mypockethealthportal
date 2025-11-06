import React from "react";
import {ListOfConcernsProps} from "./interafaces";

export const useDropDownPicker = () => {
    const [showDropDown, setShowDropDown] = React.useState<boolean>(false);
    const [selectedConcern, setSelectedConcern] = React.useState<ListOfConcernsProps | null>(null);

    const _onTapDrownDown = () => setShowDropDown((prevState: boolean) => !prevState);

    const _onSelectConcern = (payload: ListOfConcernsProps) => {
        setShowDropDown(false);
        setSelectedConcern(payload);
    }


    return {
        showDropDown, setShowDropDown, _onTapDrownDown, _onSelectConcern,
        selectedConcern
    }
}