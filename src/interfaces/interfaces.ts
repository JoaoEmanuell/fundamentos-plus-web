export interface lessonInterface {
    title: string
    author:
        | 'Benito Lopez'
        | 'Edmar Ferreira'
        | 'Gilberto Bajo'
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
        | 'table-with-green-header'
        | 'list-with-gray-background'
        | 'check-list'
        | 'image'
        | 'text-highlight'
        | 'green-background-title'
        | 'frame-with-title-and-border'
        | 'list-with-arrow'
        | 'multi-text'
    content: string
    className?: string
}
