'use client'

import { NumberGreenButtonWithText } from '../ui/NumberGreenButtonWithText'
import { useEffect, useState } from 'react'

export function Cycles() {
    const [cyclesJson, setCyclesJson] = useState<object | any>()
    const [cycles, setCycles] = useState<object | any>()
    const [cyclesArray, setCyclesArray] = useState<string[] | any>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const pathToJson = `${process.env.PATH_TO_DATA}/data/data.min.json`
        fetch(pathToJson, {
            method: 'GET',
            mode: 'cors',
            cache: 'force-cache',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setCyclesJson(data) // set the cycles json
                setCycles(data['cycles']) // set the cycles
                setCyclesArray(Object.keys(data['cycles'])) // set the cycles array
                setIsLoading(false)
            })
    }, []) // Load the cycles in the first execution

    // while the json not load!

    if (isLoading) return <p>Carregando...</p>

    return (
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
    )
}
