'use client'

import { CenterDiv } from '@/components/ui/CenterDiv'
import { CenterTitle } from '@/components/ui/CenterTitle'
import { GetCookie } from '@/functions/cookies/GetCookie'
import { useEffect, useState } from 'react'

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
            setCycleInformation(
                <p className="text-center">
                    <a href={`/lesson/${lastLesson}`} className="underline">
                        Clique aqui para acessar a ultima lição concluída por
                        você!
                    </a>
                </p>
            )
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
                        Caso queira saber mais sobre o projeto{' '}
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
