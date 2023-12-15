import data from '@/json/data.json'
import { lessonInterface } from '@/interfaces/interfaces'
import { IndexLesson } from './Lesson/IndexLesson'
import { useEffect, useState } from 'react'
import { CenterDiv } from '../ui/CenterDiv'
import { PageLesson } from './Lesson/PageLesson'
import { GreenButton } from '../ui/GreenButton'

interface LessonInterface {
    id: string
}

export function Lesson(props: LessonInterface) {
    const [actualPage, setActualPage] = useState<number>(0)
    const [Lesson, setLesson] = useState<JSX.Element | null>(null)
    const [lessonButtonText, setLessonButtonText] = useState('Iniciar lição')
    const [returnButtonText, setReturnButtonText] = useState('Anterior')
    const [returnButtonHidden, setReturnButtonHidden] = useState(true)

    const lesson: lessonInterface = data['lessons'][props.id]
    const numberOfPages = lesson['pages'].length

    useEffect(() => {
        setLesson(<IndexLesson id={props.id} lesson={lesson} />)
    }, []) // Load the description in the first execution

    const nextLessonPage = () => {
        const page = <PageLesson lesson={lesson} page={actualPage} />
        setLesson(page)
        setActualPage(actualPage + 1)
        setReturnButtonHidden(false)
        window.scrollTo(0, 0) // User go to page top
    }

    const startLesson = () => {
        if (lessonButtonText === 'Finalizar') {
            // End lesson
            window.location.href = `/end/${props.id}`
        } else if (actualPage + 1 === numberOfPages) {
            nextLessonPage()
            setLessonButtonText(`Finalizar`)
        } else {
            nextLessonPage()
            setLessonButtonText(`Próximo ${actualPage + 1}/${numberOfPages}`)
        }
    }

    const returnButton = () => {
        if (actualPage == 1) {
            // Return to index
            setLesson(<IndexLesson id={props.id} lesson={lesson} />)
            setReturnButtonHidden(true)
            setLessonButtonText(`Iniciar lição`)
            setActualPage(0)
            window.scrollTo(0, 0)
        } else {
            const page = <PageLesson lesson={lesson} page={actualPage - 2} />
            setLesson(page)
            setActualPage(actualPage - 1)
            setLessonButtonText(`Próximo ${actualPage - 1}/${numberOfPages}`)
            window.scrollTo(0, 0)
        }
    }

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
                    ></GreenButton>
                </div>
            </CenterDiv>
        </div>
    )
}
