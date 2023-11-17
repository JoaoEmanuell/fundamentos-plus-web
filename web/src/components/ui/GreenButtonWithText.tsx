import { GreenButton } from './GreenButton'

interface GreenButtonWithText {
    buttonNumber: string
    buttonEnable?: boolean
    text: string
}

export function GreenButtonWithText(props: GreenButtonWithText) {
    return (
        <div className="mb-4 flex justify-start">
            <GreenButton
                text={props.buttonNumber}
                enable={props.buttonEnable}
            />
            <h1 className="py-3 text-base">{props.text}</h1>
        </div>
    )
}
