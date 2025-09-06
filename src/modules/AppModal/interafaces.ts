import {ReactNode} from "react";

export type AppModalProps = {
    show: boolean;
    children: ReactNode;
    onClose?: () => void;
};