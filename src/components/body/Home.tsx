'use client'

import { CenterDiv } from '@/components/ui/CenterDiv'
import { CenterTitle } from '@/components/ui/CenterTitle'
import { GetCookie } from '@/functions/cookies/GetCookie'
import { useEffect, useState } from 'react'

import { LessonPreview } from '../ui/LessonPreview'

export function HomeComponent() {
    const [cycleInformation, setCycleInformation] =
        useState<JSX.Element | null>(null)
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
                        <p className="text-center">
                            <a href={`/lesson/${lastLesson}`}>
                                <span className="underline">
                                    Ultima lição concluída
                                </span>
                                <LessonPreview
                                    id={lastLesson}
                                    author={data['author']}
                                    title={data['title']}
                                />
                            </a>
                        </p>
                    )
                })
        }
    }, [])

    return (
        <main>
            <CenterDiv>
                <div className="space-y-4">
                    <CenterTitle text="Página inicial"></CenterTitle>
                    <p className="text-center">
                        Seja bem vindo ao fundamentos plus!
                    </p>
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
