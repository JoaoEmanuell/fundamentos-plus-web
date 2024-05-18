'use client'

import { lessonInterface } from '@/interfaces/interfaces'
import { IndexLesson } from './Lesson/IndexLesson'
import { SetStateAction, useEffect, useState } from 'react'
import { CenterDiv } from '../ui/CenterDiv'
import { PageLesson } from './Lesson/PageLesson'
import { GreenButton } from '../ui/GreenButton'
import { SetCookie } from '@/functions/cookies/SetCookie'
import { GetCookie } from '@/functions/cookies/GetCookie'

interface LessonInterface {
    id: string
}

export function Lesson(props: LessonInterface) {
    const [actualPage, setActualPage] = useState<number>(0)
    const [Lesson, setLesson] = useState<JSX.Element | null>(null)
    const [lessonButtonText, setLessonButtonText] = useState('Iniciar lição')
    const [lessonButtonHidden, setLessonButtonHidden] = useState(true)
    const [returnButtonText, setReturnButtonText] = useState('Anterior')
    const [returnButtonHidden, setReturnButtonHidden] = useState(true)
    const [numberOfPages, setNumberOfPages] = useState<number>(0)
    const [lessonJson, setLessonJson] = useState<lessonInterface | any>()
    const [isLoading, setIsLoading] = useState(true)
    const [lastLessonPage, setLastLessonPage] = useState<string | null>(null)

    useEffect(() => {
        const origin = new URL(window.location.href).origin
        const pathToJson = `${origin}/data/lessons/${props.id}.min.json`
        fetch(pathToJson, {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setLessonJson(data) // set the lesson json
                setNumberOfPages(data['pages'].length) // set the number of pages
                setLesson(<IndexLesson id={props.id} lesson={data} />) // set the lesson description
                setLessonButtonHidden(false) // show the start button
                setIsLoading(false)
                try {
                    const lastLessonAndPageCookie = JSON.parse(
                        GetCookie('lastLessonAndPage')
                    )
                    if (lastLessonAndPageCookie[props.id] !== undefined) {
                        const lastPage = lastLessonAndPageCookie[props.id][0]

                        setLessonButtonText(
                            `Continuar ${lastPage}/${data['pages'].length}`
                        )
                        setLastLessonPage(lastPage)
                    }
                } catch (err) {}
            })
    }, []) // Load the description in the first execution

    const nextLessonPage = (forcedPage: number = -1) => {
        let page: JSX.Element
        let actualPageMoreOne: Number
        if (forcedPage === -1) {
            page = <PageLesson lesson={lessonJson} page={actualPage} />
            actualPageMoreOne = actualPage + 1
            setActualPage(actualPageMoreOne as SetStateAction<number>)
        } else {
            page = <PageLesson lesson={lessonJson} page={forcedPage - 1} />
            actualPageMoreOne = forcedPage
        }
        setLesson(page)
        setReturnButtonHidden(false)
        window.scrollTo(0, 0) // User go to page top
        setLastPage(actualPageMoreOne)
    }

    const startLesson = () => {
        if (lessonButtonText.includes('Continuar')) {
            console.log('continue')
            const lastLessonPageNumber = Number(lastLessonPage)
            setActualPage(lastLessonPageNumber)
            if (lastLessonPageNumber + 1 === numberOfPages) {
                setLessonButtonText(`Finalizar`)
            } else {
                setLessonButtonText(
                    `Próximo ${lastLessonPageNumber}/${numberOfPages}`
                )
            }
            nextLessonPage(lastLessonPageNumber)
        } else if (lessonButtonText === 'Finalizar') {
            // End lesson
            // Set cookies
            SetCookie('lastLesson', props.id)
            const completedLessons = GetCookie('completedLessons')
            if (completedLessons.indexOf(props.id) === -1) {
                // if lesson not completed
                SetCookie('completedLessons', `${completedLessons} ${props.id}`)
            }
            window.location.href = `/end/${props.id}`
        } else if (actualPage + 1 === numberOfPages) {
            nextLessonPage()
            setLessonButtonText(`Finalizar`)
        } else {
            console.log('next')

            nextLessonPage()
            setLessonButtonText(`Próximo ${actualPage + 1}/${numberOfPages}`)
        }
    }

    const returnButton = () => {
        if (actualPage == 1) {
            // Return to index
            setLesson(<IndexLesson id={props.id} lesson={lessonJson} />)
            setReturnButtonHidden(true)
            setLessonButtonText(`Iniciar lição`)
            setActualPage(0)
            window.scrollTo(0, 0)
            setLastPage('')
        } else {
            const page = (
                <PageLesson lesson={lessonJson} page={actualPage - 2} />
            )
            setLesson(page)
            setActualPage(actualPage - 1)
            setLessonButtonText(`Próximo ${actualPage - 1}/${numberOfPages}`)
            window.scrollTo(0, 0)
            setLastPage(actualPage - 1)
        }
    }

    const setLastPage = (page: Number | string) => {
        let json
        try {
            json = JSON.parse(GetCookie('lastLessonAndPage'))
        } catch (err) {
            // cookie is not a json
            json = {}
        }
        json[props.id] = [page, numberOfPages] // [last page, total pages] is used to calculate the percent
        SetCookie('lastLessonAndPage', JSON.stringify(json))
    }

    // while the json not load

    if (isLoading) return <p>Carregando...</p>

    return (
        <div>
            {Lesson}
            <CenterDiv>
                <div className="flex justify-between space-x-4">
                    <GreenButton
                        onClick={returnButton}
                        hidden={returnButtonHidden}
                        text={returnButtonText}
                    ></GreenButton>
                    <GreenButton
                        onClick={startLesson}
                        text={lessonButtonText}
                        hidden={lessonButtonHidden}
                    ></GreenButton>
                </div>
            </CenterDiv>
        </div>
    )
}
