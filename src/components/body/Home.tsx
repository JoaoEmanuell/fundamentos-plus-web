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
import { NumberGreenButtonSquareWithText } from '../ui/NumberGreenButtonSquareWithText'

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
    const [cyclesScroll, setCyclesScroll] = useState<elementOrNull>(null)
    const mainHomeVisibleRef = useRef<HTMLDivElement | null>(null)

    const clickHome = () => {
        setCyclesVisible('hidden')
        setMainHomeVisible('visible')
        window.scrollTo(0, 0) // User go to page top
    }

    const clickCycles = () => {
        setMainHomeVisible('hidden')
        setCyclesVisible('visible')
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
                const cyclesScrollList: Object[] = []
                Object.entries(cycles).forEach((element) => {
                    const cycle = element[1] as object
                    if (cycle['unlocked']) {
                        lastCycleRegistered = cycle
                    }
                    cyclesScrollList.push({
                        title: cycle['title'],
                        unlocked: cycle['unlocked'],
                        numberOfLessons: cycle['lessons'].length,
                    })
                })
                console.log(cyclesScrollList)

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
                let count = 0
                setCyclesScroll(
                    <div className="flex justify-between space-x-4">
                        {cyclesScrollList.map((cycle) => {
                            count++
                            let urlToCycle
                            if (cycle['unlocked']) {
                                urlToCycle = `/cycle/${count}`
                            } else {
                                urlToCycle = `#`
                            }
                            return (
                                <a
                                    key={count}
                                    className="block"
                                    href={urlToCycle}
                                >
                                    <div>
                                        <NumberGreenButtonSquareWithText
                                            buttonNumber={count.toString()}
                                            buttonEnable={cycle['unlocked']}
                                            text={cycle['title']}
                                        />
                                    </div>
                                    <div className="text-greenText">
                                        {cycle['numberOfLessons']} Lições
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                )
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
                        <div className="overflow-x-auto">
                            <h2 className="text-xl font-bold mb-4">Ciclos</h2>
                            <div className="pl-4 md:max-w-xl max-w-[21rem]">
                                {cyclesScroll}
                            </div>
                        </div>
                    </CenterDiv>
                </div>
            </CenterDiv>
            <CenterDiv className={`${cyclesVisible}`}>
                {cyclesVisible === 'hidden' ? null : <Cycles />}
            </CenterDiv>

            <HomeFooter clickHome={clickHome} clickCycles={clickCycles} />
        </main>
    )
}
