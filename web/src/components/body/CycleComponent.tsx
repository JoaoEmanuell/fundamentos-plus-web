import data from '@/json/data.json'
import { CenterTitle } from '../ui/CenterTitle'
import { NumberGreenButtonWithText } from '../ui/NumberGreenButtonWithText'

interface CycleInterface {
    id: string
}

interface lessonInterface {
    id: number
    title: string
    unlocked: boolean
}

export function CycleComponent(props: CycleInterface) {
    try {
        var status = data['cycles'][props.id]['unlocked']
    } catch (err) {
        return (
            <div>
                <CenterTitle text="Ciclo não está disponível!" />
            </div>
        )
    } finally {
        if (!status) {
            return (
                <div>
                    <CenterTitle text="Ciclo não está disponível!" />
                </div>
            )
        }
    }
    const title = data['cycles'][props.id]['title']
    const lessons: lessonInterface[] = data['cycles'][props.id]['lessons']
    return (
        <div>
            <CenterTitle text={title} />
            <div>
                {lessons.map((lesson) => {
                    const lessonTitle = lesson['title']
                    const lessonUnlocked = lesson['unlocked']
                    const lessonId = lesson['id']
                    if (lessonUnlocked) {
                        return (
                            <a key={lessonId} href={`/lesson/${lessonId}`}>
                                <NumberGreenButtonWithText
                                    buttonNumber={lessonId.toString()}
                                    buttonEnable
                                    text={lessonTitle}
                                />
                            </a>
                        )
                    } else {
                        return (
                            <div
                                key={lessonId}
                                className="mb-4 flex justify-start"
                            >
                                <NumberGreenButtonWithText
                                    buttonNumber={lessonId.toString()}
                                    text={lessonTitle}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
