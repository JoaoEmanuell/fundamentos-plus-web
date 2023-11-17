'use client'

import { Sun, Moon } from 'lucide-react'
import { useState } from 'react'

export function DarkMode() {
    const [item, setItem] = useState(<Sun />)
    const [itemType, setItemType] = useState<'sun' | 'moon'>('sun')

    const changeItem = () => {
        if (itemType === 'sun') {
            setItem(<Moon />)
            setItemType('moon')
            document.documentElement.classList.add('dark')
        } else {
            setItem(<Sun />)
            setItemType('sun')
            document.documentElement.classList.remove('dark')
        }
    }

    return <div onClick={changeItem}>{item}</div>
}
