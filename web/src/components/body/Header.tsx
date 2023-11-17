import { DarkMode } from './DarkMode'
import { ArrowLeft } from 'lucide-react'

export function Header() {
    return (
        <header className="flex justify-between px-4 mt-4">
            <ArrowLeft />
            <DarkMode />
        </header>
    )
}
