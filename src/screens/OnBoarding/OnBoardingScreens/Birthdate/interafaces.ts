export type PickerProps = {
    label: string;
    value: number;
    name: string;
}

export interface DatePickerProps {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
}

export type OnBoardingOnChangeProps = {
    age: number;
    birthdate: {
        month: number;
        day: number;
        year: number;
    }
}

export interface OnBoardingProps {
    onNext?: () => void;
    onSkip?: () => void;
    onChange?: (val: OnBoardingOnChangeProps) => void;
}

export interface UseBrithdatePickerProps {
    onChange?: (val: OnBoardingOnChangeProps) => void;
}