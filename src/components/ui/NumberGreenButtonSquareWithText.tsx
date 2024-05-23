import { NumberGreenButtonSquare } from './NumberGreenButtonSquare'
import { PropsWithChildren } from 'react'

interface NumberGreenButtonSquareWithTextProps {
    buttonNumber: string
    buttonEnable?: boolean
    text: string
    textClassName?: string
}

export function NumberGreenButtonSquareWithText(
    props: PropsWithChildren<NumberGreenButtonSquareWithTextProps>
) {
    return (
        <div className="mb-4 flex justify-start items-center">
            <NumberGreenButtonSquare
                text={props.buttonNumber}
                enable={props.buttonEnable}
            />
            <div>
                <h1
                    className={`text-base ${props.textClassName} break-normal whitespace-nowrap`}
                >
                    {props.text}
                </h1>
                {props.children}
            </div>
        </div>
    )
}
