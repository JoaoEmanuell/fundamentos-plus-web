import { NumberGreenButton } from './NumberGreenButton'

interface NumberGreenButtonWithTextProps {
    buttonNumber: string
    buttonEnable?: boolean
    text: string
    textClassName?: string
}

export function NumberGreenButtonWithText(
    props: NumberGreenButtonWithTextProps
) {
    return (
        <div className="mb-4 flex justify-start items-center">
            <NumberGreenButton
                text={props.buttonNumber}
                enable={props.buttonEnable}
            />
            <h1 className={`text-base ${props.textClassName}`}>{props.text}</h1>
        </div>
    )
}
