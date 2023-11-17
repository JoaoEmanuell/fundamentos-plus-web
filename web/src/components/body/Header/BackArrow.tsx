'use client'

import { ArrowLeft } from 'lucide-react'

export function BackArrow() {
    const back = () => {
        history.back()
    }
    return (
        <div onClick={back}>
            <ArrowLeft />
        </div>
    )
}
