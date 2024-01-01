import { NumberGreenButton } from './NumberGreenButton'
import { PropsWithChildren } from 'react'

interface NumberGreenButtonWithTextProps {
    buttonNumber: string
    buttonEnable?: boolean
    text: string
    textClassName?: string
}

export function NumberGreenButtonWithText(
    props: PropsWithChildren<NumberGreenButtonWithTextProps>
) {
    return (
        <div className="mb-4 flex justify-start items-center">
            <NumberGreenButton
                text={props.buttonNumber}
                enable={props.buttonEnable}
            />
            <div>
                <h1 className={`text-base ${props.textClassName}`}>
                    {props.text}
                </h1>
                {props.children}
            </div>
        </div>
    )
}
