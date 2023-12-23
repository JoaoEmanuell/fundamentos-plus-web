'use client'

import { CenterTitle } from '../ui/CenterTitle'
import { NumberGreenButtonWithText } from '../ui/NumberGreenButtonWithText'
import { useState, useEffect } from 'react'

interface CycleInterface {
    id: string
}

interface lessonInterface {
    id: number
    title: string
    unlocked: boolean
}

export function CycleComponent(props: CycleInterface) {
    const [cyclesJson, setCyclesJson] = useState<object | any>()
    const [cycles, setCycles] = useState<object | any>()
    const [isLoading, setIsLoading] = useState(true)
    const [unlockedCycle, setUnlockedCycle] = useState<boolean | null>(null)

    useEffect(() => {
        const origin = new URL(window.location.href).origin
        const pathToJson = `${origin}/data/data.min.json`
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
                try {
                    setCyclesJson(data) // set the cycles json
                    setCycles(data['cycles']) // set the cycles
                    setUnlockedCycle(data['cycles'][props.id]['unlocked'])
                    var status = data['cycles'][props.id]['unlocked']
                    setIsLoading(false)
                } catch (err) {
                    setUnlockedCycle(false)
                } finally {
                    if (!status) {
                        setUnlockedCycle(false)
                    }
                }
            })
    }, []) // Load the cycles in the first execution

    // while the json not load!

    if (isLoading) return <p>Carregando...</p>

    // if cycle is locked or not exists

    if (unlockedCycle === false) {
        return (
            <div>
                <CenterTitle text="Ciclo não está disponível!" />
            </div>
        )
    }

    const title = cycles[props.id]['title']
    const lessons: lessonInterface[] = cycles[props.id]['lessons']
    return (
        <div>
            <CenterTitle text={title} />
            <div>
                {lessons.map((lesson) => {
                    const lessonTitle = lesson['title']
                    const lessonUnlocked = lesson['unlocked']
                    const lessonId = lesson['id']
                    if (lessonUnlocked) {
                        return (
                            <a key={lessonId} href={`/lesson/${lessonId}`}>
                                <NumberGreenButtonWithText
                                    buttonNumber={lessonId.toString()}
                                    buttonEnable
                                    text={lessonTitle}
                                />
                            </a>
                        )
                    } else {
                        return (
                            <div
                                key={lessonId}
                                className="mb-4 flex justify-start"
                            >
                                <NumberGreenButtonWithText
                                    buttonNumber={lessonId.toString()}
                                    text={lessonTitle}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
