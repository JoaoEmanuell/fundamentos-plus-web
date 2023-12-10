export interface lessonInterface {
    title: string
    author:
        | 'Edmar Ferreira'
        | 'João Bium'
        | 'Manoel Rocha'
        | 'Marcos Moraes'
        | 'Mario Fagundes'
        | 'Vanjo Souza'
    description: string[]
    video: string
    'lesson-transcription': string
    pages: lessonPage[][]
}

export interface cycleInterface {
    unlocked: boolean
    title: string
    lessons: {
        id: number
        title: string
        unlocked: boolean
    }[]
}

export interface lessonPage {
    type:
        | 'green-title'
        | 'text'
        | 'green-separator'
        | 'bible-text'
        | 'text-bold'
    content: string
    className?: string
}
