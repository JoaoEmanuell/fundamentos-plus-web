import data from '@/json/data.json'
import { GreenButton } from '@/components/ui/GreenButton'
import { title } from 'process'

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
                                    <div className="mb-4 flex justify-start">
                                        <GreenButton text={key} enable />
                                        <h1 className="py-3 text-base">
                                            {title}
                                        </h1>
                                    </div>
                                </a>
                            ) : (
                                <div className="mb-4 flex justify-start">
                                    <GreenButton text={key}></GreenButton>
                                    <h1 className="py-3 text-base">{title}</h1>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
