'use client'

import { CenterTitle } from '../ui/CenterTitle'
import { NumberGreenButtonWithText } from '../ui/NumberGreenButtonWithText'
import { LessonPreview } from '../ui/LessonPreview'
import { useState, useEffect } from 'react'
import { GetCookie } from '@/functions/cookies/GetCookie'

interface CycleInterface {
    id: string
}

interface lessonInterface {
    id: number
    title: string
    author:
        | 'Edmar Ferreira'
        | 'João Bium'
        | 'Manoel Rocha'
        | 'Marcos Moraes'
        | 'Mario Fagundes'
        | 'Vanjo Souza'
    unlocked: boolean
}

export function CycleComponent(props: CycleInterface) {
    const [cyclesJson, setCyclesJson] = useState<object | any>()
    const [cycles, setCycles] = useState<object | any>()
    const [isLoading, setIsLoading] = useState(true)
    const [unlockedCycle, setUnlockedCycle] = useState<boolean | null>(null)
    const [completedLessons, setCompletedLessons] = useState<string[] | null>(
        null
    )

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
                    setCompletedLessons(
                        GetCookie('completedLessons').split(' ')
                    )
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
                    const author = lesson['author']
                    const completedLessonStatus = completedLessons?.indexOf(
                        lessonId.toString()
                    )
                    var completedLessonBoolean: boolean | null
                    if (completedLessonStatus === -1) {
                        // lesson not completed
                        completedLessonBoolean = false
                    } else {
                        completedLessonBoolean = true
                    }
                    if (lessonUnlocked) {
                        return (
                            <a key={lessonId} href={`/lesson/${lessonId}`}>
                                <LessonPreview
                                    id={lessonId.toString()}
                                    author={author}
                                    title={lessonTitle}
                                    completedLesson={completedLessonBoolean}
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
