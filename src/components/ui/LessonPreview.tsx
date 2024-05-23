'use client'

import Image from 'next/image'
import { PlayCircle, Trophy } from 'lucide-react'

import { NumberGreenButton } from './NumberGreenButton'
import { GetCookie } from '@/functions/cookies/GetCookie'
import { ProgressCircle } from './ProgressCircle'

interface LessonPreviewInterface {
    title: string
    id: string
    author:
        | 'Benito Lopez'
        | 'Edmar Ferreira'
        | 'Gilberto Bajo'
        | 'João Bium'
        | 'Manoel Rocha'
        | 'Marcos Moraes'
        | 'Mario Fagundes'
        | 'Vanjo Souza'
    completedLesson: boolean
}

export function LessonPreview(props: LessonPreviewInterface) {
    let cookieJson
    try {
        cookieJson = JSON.parse(GetCookie('lastLessonAndPage'))
    } catch (err) {
        cookieJson = {}
    }
    const lessonJson = cookieJson[props.id]

    const getPercent = (actual: number, max: number) => {
        return Math.round((actual / max) * 100)
    }

    const iconDiv = () => {
        if (props.completedLesson) {
            return (
                <div className="border-2 border-greenButton rounded-full flex items-center justify-center p-1 w-8 h-8">
                    <Trophy
                        color="#55730e"
                        strokeWidth={1}
                        width={36}
                        height={36}
                    />
                </div>
            )
        } else if (lessonJson !== undefined) {
            return (
                <ProgressCircle
                    size={50}
                    progress={getPercent(
                        Number(lessonJson[0]),
                        Number(lessonJson[1])
                    )}
                />
            )
        } else {
            return <PlayCircle color="#55730e" width={32} height={32} />
        }
    }

    return (
        <div className="mt-4 flex space-x-2 items-center">
            <div className="relative">
                <div className="w-44 h-44">
                    <Image
                        src={`/img/cycles_thumbs/${props.author
                            .toLowerCase()
                            .replaceAll(' ', '-')}.webp`}
                        alt={`Image of ${props.author}`}
                        fill
                        className="rounded-2xl"
                    ></Image>
                </div>
            </div>
            <div className="space-y-2">
                <NumberGreenButton text={props.id} enable />
                <h2>{props.title}</h2>
                <div>{iconDiv()}</div>
            </div>
        </div>
    )
}
