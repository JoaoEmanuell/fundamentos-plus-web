import data from '@/json/data.json'
import { NumberGreenButtonWithText } from '../ui/NumberGreenButtonWithText'

export function Cycles() {
    const cycles = data['cycles']
    const cyclesArray = Object.keys(cycles)

    return (
        <div>
            <div>
                {cyclesArray.map((key) => {
                    const title = cycles[key]['title']
                    const disable = cycles[key]['unlocked']
                    return (
                        <div key={key}>
                            {disable ? (
                                <a href={`/cycle/${key}`}>
                                    <NumberGreenButtonWithText
                                        buttonNumber={key}
                                        buttonEnable
                                        text={title}
                                    />
                                </a>
                            ) : (
                                <NumberGreenButtonWithText
                                    buttonNumber={key}
                                    text={title}
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
