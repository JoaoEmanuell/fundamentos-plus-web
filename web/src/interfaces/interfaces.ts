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
    pages: lessonPageInterface[][]
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

export interface lessonPageInterface {
    type:
        | 'green-title'
        | 'text'
        | 'green-separator'
        | 'bible-text'
        | 'text-bold'
        | 'green-sub-title'
        | 'table-with-index'
        | 'text-italic'
        | 'list-with-number-green-button-with-text'
        | 'text-for-complement-reading'
        | 'text-green'
        | 'text-important-note'
    content: string
    className?: string
}
