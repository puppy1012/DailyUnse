interface Props {
    onLocation: (coords: {
        nx: number;
        ny: number;
    }) => void;
}
export default function CurrentLocation({ onLocation }: Props): import("react/jsx-runtime").JSX.Element;
export {};
