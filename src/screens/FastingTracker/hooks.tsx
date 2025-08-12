import React, {useState} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import _ from "underscore";

import {getFastingHistory} from "@/api/fasting";

export const useFastingTrackerHooks = () => {
    const [startFasting, setStartFasting] = useState<boolean>(false);

    const _onStartFasting = () => {
        setStartFasting(!startFasting);
    }

    return {
        startFasting,
        _onStartFasting
    }
}