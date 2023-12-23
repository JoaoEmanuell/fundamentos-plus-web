'use client'

import { useParams } from 'next/navigation'
import { CycleComponent } from '@/components/body/CycleComponent'

export default function Cycle() {
    const params = useParams()
    const id = params.id as string
    return (
        <div>
            <CycleComponent id={id} />
        </div>
    )
}
