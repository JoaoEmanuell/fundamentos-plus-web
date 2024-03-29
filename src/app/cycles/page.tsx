'use client'

import { Cycles } from '@/components/body/Cycles'
import { CenterTitle } from '@/components/ui/CenterTitle'

export default function CyclesPage() {
    return (
        <main>
            <CenterTitle text="Ciclos: "></CenterTitle>
            <div>
                <Cycles />
            </div>
        </main>
    )
}
