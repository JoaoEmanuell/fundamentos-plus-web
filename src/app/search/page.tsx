'use client'

import { CenterDiv } from '@/components/ui/CenterDiv'
import { CenterTitle } from '@/components/ui/CenterTitle'
import { LessonPreview } from '@/components/ui/LessonPreview'
import { GetCookie } from '@/functions/cookies/GetCookie'
import { getRandomElementKey } from '@/lib/randomElementKey'
import { useState, useEffect, useRef } from 'react'

type authorType =
    | 'Edmar Ferreira'
    | 'João Bium'
    | 'Manoel Rocha'
    | 'Marcos Moraes'
    | 'Mario Fagundes'
    | 'Vanjo Souza'

interface lessonsWithSearchInterface {
    id: number
    title: string
    author: authorType
    completedLesson: boolean
}

var lessonsWithSearch: lessonsWithSearchInterface[] = []

export default function SearchPage() {
    const [cyclesJson, setCyclesJson] = useState<object | any>()
    const [cycles, setCycles] = useState<object | any>()
    const [cyclesArray, setCyclesArray] = useState<string[] | any>()
    const [isLoading, setIsLoading] = useState(true)
    const [resultDiv, setResultDiv] = useState<Element | any>()

    const searchInputRef = useRef<HTMLInputElement | null>(null)

    const urlToPage = new URL(window.location.href).origin

    // load the data json

    useEffect(() => {
        const origin = urlToPage
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
                setCyclesJson(data) // set the cycles json
                setCycles(data['cycles']) // set the cycles
                setCyclesArray(Object.keys(data['cycles'])) // set the cycles array
                setIsLoading(false)
            })
    }, []) // Load the cycles in the first execution

    const searchLesson = (
        id: string,
        title: string,
        author: authorType,
        valueToSearch: string
    ) => {
        const origin = urlToPage
        const pathToJson = `${origin}/data/lessons/${id}.min.json`
        fetch(pathToJson, {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            res.text().then((text) => {
                const treatedText = text
                    .replaceAll('"title":', '')
                    .replaceAll('"author":', '')
                    .replaceAll('"description": [', '')
                    .replaceAll('"video":', '')
                    .replaceAll('pages: [', '')
                    .toLocaleLowerCase() // remove the json tags and convert to lower case
                const searchInfo = treatedText.indexOf(
                    valueToSearch.toLowerCase()
                )
                if (searchInfo !== -1) {
                    const completedLessonsCookie = GetCookie('completedLessons')
                    var lessonStatus = false
                    if (completedLessonsCookie.indexOf(id) !== -1) {
                        // if lesson is completed
                        lessonStatus = true
                    }
                    lessonsWithSearch.push({
                        id: Number(id),
                        author: author,
                        title: title,
                        completedLesson: lessonStatus,
                    }) // add to lessons
                }
                showPreviews() // show in previews
            })
        })
    }

    const searchAction = () => {
        const searchInputValue = searchInputRef.current?.value.trim() as string // get value and remove spaces
        lessonsWithSearch = [] // clear search
        setResultDiv(<div></div>) // clear result div
        cyclesArray.map((cycle) => {
            const cycleData = cycles[cycle]
            if (cycleData['unlocked']) {
                // search in unlocked cycles
                const lessons = cycleData['lessons']
                lessons.map((lesson) => {
                    const id = lesson['id']
                    const title = lesson['title']
                    const author = lesson['author'] as authorType
                    searchLesson(id, title, author, searchInputValue)
                })
            }
        })
    }

    const showPreviews = () => {
        if (lessonsWithSearch.length === 0) {
            setResultDiv(
                <p className="text-center">Nenhuma lição foi encontrada!</p>
            )
        } else {
            setResultDiv(
                <>
                    {lessonsWithSearch.map((lesson) => {
                        return (
                            <div key={getRandomElementKey()}>
                                <a href={`/lesson/${lesson['id']}`}>
                                    <LessonPreview
                                        id={lesson['id'].toString()}
                                        title={lesson['title']}
                                        completedLesson={
                                            lesson['completedLesson']
                                        }
                                        author={lesson['author']}
                                    />
                                </a>
                            </div>
                        )
                    })}
                </>
            )
        }
    }

    // while the json not load!

    if (isLoading) return <p>Carregando...</p>

    return (
        <CenterDiv>
            <div className="space-y-4">
                <CenterTitle text="Bem vindo a página de pesquisa" />
                <p className="text-center">
                    Aqui você pode realizar pesquisas dentro das lições, para
                    isso basta digitar o que você deseja procurar dentro da
                    caixa abaixo e clicar em &quot;buscar&quot;
                </p>
                <CenterDiv>
                    <div className="justify-between space-x-4">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="text-black text-center border border-gray-200"
                            ref={searchInputRef}
                        />
                        <button
                            onClick={searchAction}
                            className="mt-4 border border-gray-200 rounded bg-greenButton text-white px-4"
                        >
                            Buscar
                        </button>
                    </div>
                </CenterDiv>
                <CenterDiv>
                    <div>
                        {/* Div with results */}
                        {resultDiv}
                    </div>
                </CenterDiv>
            </div>
        </CenterDiv>
    )
}
