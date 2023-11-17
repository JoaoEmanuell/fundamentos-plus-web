import { DarkMode } from './Header/DarkMode'
import { BackArrow } from './Header/BackArrow'

export function Header() {
    return (
        <header className="flex justify-between px-4 mt-4">
            <BackArrow />
            <DarkMode />
        </header>
    )
}
