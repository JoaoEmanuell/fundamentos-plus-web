import data from '@/json/data.json'
import { GreenButtonWithText } from '../ui/GreenButtonWithText'

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
                                    <GreenButtonWithText
                                        buttonNumber={key}
                                        buttonEnable
                                        text={title}
                                    />
                                </a>
                            ) : (
                                <GreenButtonWithText
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
