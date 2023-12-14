import { NumberGreenButton } from '@/components/ui/NumberGreenButton'
import { StyleInterface } from '../StyleInterface'
import { getRandomElementKey } from '@/lib/randomElementKey'

export function ListWithNumberGreenButtonWithTextStyle(props: StyleInterface) {
    /* 
    Structure:

    "number | text , number | text , ..."
    Example
    01 | O conselho de Deus é muito amplo, engloba a eternidade passada e a eternidade futura; , 02 | text ...
    */

    const content = props.content
    const lines = content.split(' , ')
    const full_content: string[][] = []
    lines.map((line) => {
        full_content.push(line.split(' | '))
    })
    return (
        <div>
            {full_content.map((line) => {
                const number = line[0]
                const text = line[1]
                return (
                    <div
                        className="mb-4 flex justify-start items-center"
                        key={getRandomElementKey()}
                    >
                        <NumberGreenButton text={number} enable={true} />
                        <p className={`text-base`}>{text}</p>
                    </div>
                )
            })}
        </div>
    )
}
