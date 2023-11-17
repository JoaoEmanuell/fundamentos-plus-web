import data from '@/json/data.json'
import { CenterTitle } from '../ui/CenterTitle'
import { GreenButton } from '../ui/GreenButton'

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
                                <div className="mb-4 flex justify-start">
                                    <GreenButton
                                        text={lessonId.toString()}
                                        enable
                                    />
                                    <h1 className="py-3 text-base">
                                        {lessonTitle}
                                    </h1>
                                </div>
                            </a>
                        )
                    } else {
                        return (
                            <div
                                key={lessonId}
                                className="mb-4 flex justify-start"
                            >
                                <GreenButton text={lessonId.toString()} />
                                <h1 className="py-3 text-base">
                                    {lessonTitle}
                                </h1>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
