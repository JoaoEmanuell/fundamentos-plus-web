'use client'

import { Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

export function DarkMode() {
    const [item, setItem] = useState(<Sun />)
    const [itemType, setItemType] = useState<'sun' | 'moon'>('sun')

    const setDark = () => {
        setItem(<Moon />)
        setItemType('moon')
        document.documentElement.classList.add('dark')
        document.body.classList.add('text-white')
    }

    const setLight = () => {
        setItem(<Sun />)
        setItemType('sun')
        document.documentElement.classList.remove('dark')
        document.body.classList.remove('text-white')
    }

    useEffect(() => {
        // Automatic set the dark and withe mode
        if (localStorage.theme === 'dark') {
            setDark()
        } else {
            setLight()
        }
    }, [])

    const changeItem = () => {
        if (itemType === 'sun') {
            setDark()
            localStorage.theme = 'dark'
        } else {
            setLight()
            localStorage.theme = 'white'
        }
    }

    return <div onClick={changeItem}>{item}</div>
}
