import { DarkMode } from './Header/DarkMode'
import { BurgerMenu } from './Header/BurgerMenu'

export function Header() {
    return (
        <header className="flex justify-between px-4 mt-4">
            <DarkMode />
            <BurgerMenu />
        </header>
    )
}
