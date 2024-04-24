import { PlayCircle } from 'lucide-react'

interface actualLessonInterface {
    id: string
    title: string
}

export function AcutalLesson(props: actualLessonInterface) {
    return (
        <a href={`/lesson/${props.id}`} className="relative p-4 block">
            <span className="absolute top-1 right-4 mr-4 bg-yellow-500 text-black font-bold z-10 px-2 rounded-lg">
                Lição atual
            </span>
            <div className="relative p-4 bg-greenButton text-center rounded-xl text-white">
                <p>
                    <PlayCircle
                        className="inline mr-2"
                        width={32}
                        height={32}
                    />
                    {props.id} - {props.title}
                </p>
            </div>
        </a>
    )
}
