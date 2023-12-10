'use client'

import { Lesson } from '@/components/body/Lesson'
import { useParams } from 'next/navigation'

export default function LessonPage() {
    const params = useParams()
    const id = params.id as string
    return (
        <div>
            <Lesson id={id} />
        </div>
    )
}
