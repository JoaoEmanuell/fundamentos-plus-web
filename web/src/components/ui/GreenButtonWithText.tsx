import { GreenButton } from './GreenButton'

interface GreenButtonWithText {
    buttonNumber: string
    buttonEnable?: boolean
    text: string
    textClassName?: string
}

export function GreenButtonWithText(props: GreenButtonWithText) {
    return (
        <div className="mb-4 flex justify-start items-center">
            <GreenButton
                text={props.buttonNumber}
                enable={props.buttonEnable}
            />
            <h1 className={`text-base ${props.textClassName}`}>{props.text}</h1>
        </div>
    )
}
