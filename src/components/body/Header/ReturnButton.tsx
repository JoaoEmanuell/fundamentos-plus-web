'use client'

import { CircleArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'

type pathsType = 'cycles' | 'cycle' | 'lesson' | 'end'

export const ReturnButton = () => {
    const [visible, setVisible] = useState('hidden')

    const paths = {
        cycles: '/',
        cycle: '/cycles',
        lesson: '/cycles',
        end: (pathName: string) => {
            return `/lesson/${pathName.split('/')[2]}`
        },
        search: '/',
        about: '/',
    }

    const clickReturnButton = () => {
        const url = new URL(window.location.href)
        const path = url.pathname
        const initialPath = path.split('/')[1] as pathsType

        if (initialPath === 'end') {
            window.location.href = paths['end'](path)
        } else if (paths[initialPath] !== undefined) {
            window.location.href = paths[initialPath] as string
        } else {
            history.back()
        }
    }

    useEffect(() => {
        const path = new URL(window.location.href).pathname
        if (path !== '/') {
            // user not in initial page
            setVisible('cursor-pointer')
        }
    }, [])

    return (
        <div className={visible} onClick={clickReturnButton}>
            <CircleArrowLeft width={28} height={28} />
        </div>
    )
}
