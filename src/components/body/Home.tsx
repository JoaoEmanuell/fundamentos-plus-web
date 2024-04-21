'use client'

import Bible from '../../../public/img/icons/bible.svg'
import { CenterDiv } from '@/components/ui/CenterDiv'
import { CenterTitle } from '@/components/ui/CenterTitle'
import { GetCookie } from '@/functions/cookies/GetCookie'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import { LessonPreview } from '../ui/LessonPreview'
import { AcutalLesson } from '../ui/ActualLesson'

type elementOrNull = JSX.Element | null

export function HomeComponent() {
    const [cycleInformation, setCycleInformation] =
        useState<elementOrNull>(null)
    const [lastLessonRegistered, setLastLessonRegistered] =
        useState<elementOrNull>(null)

    useEffect(() => {
        const lastLesson = GetCookie('lastLesson')
        if (lastLesson === '') {
            setCycleInformation(
                <p className="text-center">
                    <a href="/cycles" className="underline">
                        Clique aqui para acessar os ciclos
                    </a>
                </p>
            )
        } else {
            const origin = new URL(window.location.href).origin
            const pathToJson = `${origin}/data/lessons/${lastLesson}.min.json`
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
                    setCycleInformation(
                        <div>
                            <AcutalLesson
                                id={lastLesson}
                                title={data['title']}
                            />

                            <p className="text-center mt-4">
                                <a href="/cycles" className="underline">
                                    Clique aqui para acessar os ciclos
                                </a>
                            </p>
                        </div>
                    )
                })
        }
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
                const cycles = data['cycles']
                var lastCycleRegistered
                Object.entries(cycles).forEach((element) => {
                    const cycle = element[1] as object
                    if (cycle['unlocked']) {
                        lastCycleRegistered = cycle
                    }
                })
                const lastLessonRegistered =
                    lastCycleRegistered['lessons'][
                        lastCycleRegistered['lessons'].length - 1
                    ]
                setLastLessonRegistered(
                    <CenterDiv>
                        <p className="text-center">
                            <a href={`/lesson/${lastLessonRegistered['id']}`}>
                                <LessonPreview
                                    author={lastLessonRegistered['author']}
                                    id={lastLessonRegistered['id']}
                                    title={lastLessonRegistered['title']}
                                    completedLesson={false}
                                />
                            </a>
                        </p>
                    </CenterDiv>
                )
            })
    }, [])

    return (
        <main>
            <CenterDiv>
                <div className="space-y-4">
                    <CenterTitle text="Fundamentos plus" />
                    <p className="text-center">
                        Seja bem vindo ao fundamentos plus!
                    </p>
                    <p className="text-center">
                        <Image
                            src={Bible}
                            alt="Bible icon"
                            width={24}
                            height={24}
                            className="inline"
                        />
                        Formando | Unindo | Ampliando a fé e a vida dos
                        discípulos de Jesus.
                    </p>
                    <div>{lastLessonRegistered}</div>
                    <p className="text-center">
                        Caso você deseje saber mais sobre o projeto{' '}
                        <a href="/about" className="underline">
                            clique aqui.
                        </a>
                    </p>
                    <div>{cycleInformation}</div>
                </div>
            </CenterDiv>
        </main>
    )
}
