'use client'

import Bible from '../../../public/img/icons/bible.svg'
import { CenterDiv } from '@/components/ui/CenterDiv'
import { CenterTitle } from '@/components/ui/CenterTitle'
import { GetCookie } from '@/functions/cookies/GetCookie'
import { HomeFooter } from '../ui/HomeFooter'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { LessonPreview } from '../ui/LessonPreview'
import { AcutalLesson } from '../ui/ActualLesson'
import { Cycles } from '@/components/body/Cycles'

type elementOrNull = JSX.Element | null

export function HomeComponent() {
    const [cycleInformation, setCycleInformation] =
        useState<elementOrNull>(null)
    const [lastLessonRegistered, setLastLessonRegistered] =
        useState<elementOrNull>(null)
    const [mainHomeVisible, setMainHomeVisible] = useState<
        'visible' | 'hidden'
    >('visible')
    const [cyclesVisible, setCyclesVisible] = useState<'visible' | 'hidden'>(
        'hidden'
    )
    const mainHomeVisibleRef = useRef<HTMLDivElement | null>(null)
    const [footerPosition, setFooterPosition] = useState('bottom-0 left-0')

    const clickHome = () => {
        setCyclesVisible('hidden')
        setMainHomeVisible('visible')
        setFooterPosition('bottom-0') // Reset footer position
        window.scrollTo(0, 0) // User go to page top
    }

    const clickCycles = () => {
        setMainHomeVisible('hidden')
        setCyclesVisible('visible')
        setFooterPosition('align-bottom	left-0') // Reset footer position
    }

    useEffect(() => {
        // get the last lesson executed for the user
        const lastLesson = GetCookie('lastLesson')
        if (lastLesson === '') {
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
                        </div>
                    )
                })
            setFooterPosition('bottom-0') // Reset footer position
        }
        // get the last lesson registered in application
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
                setFooterPosition('bottom-0') // Reset footer position
            })
    }, [])

    return (
        <main>
            <CenterDiv className={mainHomeVisible}>
                <div className="space-y-4" ref={mainHomeVisibleRef}>
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
                    <CenterDiv>
                        <div
                            className="font-bold text-center cursor-pointer"
                            onClick={clickCycles}
                        >
                            Clique aqui para acessar os ciclos
                        </div>
                    </CenterDiv>
                </div>
            </CenterDiv>
            <CenterDiv
                className={`${cyclesVisible}`}
                //style={{ top: cyclesPosition.top, left: cyclesPosition.left }}
            >
                {cyclesVisible === 'hidden' ? null : <Cycles />}
            </CenterDiv>

            <HomeFooter
                clickHome={clickHome}
                clickCycles={clickCycles}
                footerPosition={footerPosition}
            />
        </main>
    )
}
