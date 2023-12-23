'use client'

import Image from 'next/image'

import { NumberGreenButton } from './NumberGreenButton'

interface LessonPreviewInterface {
    title: string
    id: string
    author:
        | 'Edmar Ferreira'
        | 'João Bium'
        | 'Manoel Rocha'
        | 'Marcos Moraes'
        | 'Mario Fagundes'
        | 'Vanjo Souza'
}

export function LessonPreview(props: LessonPreviewInterface) {
    return (
        <div className="mt-4 flex space-x-2 items-center">
            <div className="relative">
                <div className="w-44 h-44">
                    <Image
                        src={`/img/cycles_thumbs/${props.author
                            .toLowerCase()
                            .replaceAll(' ', '-')}.jpg`}
                        alt={`Image of ${props.author}`}
                        fill
                        className="rounded-2xl"
                    ></Image>
                </div>
            </div>
            <div className="space-y-4">
                <NumberGreenButton text={props.id} enable />
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}
