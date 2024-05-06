import { BurgerMenu } from './Header/BurgerMenu'
import { ReturnButton } from './Header/ReturnButton'

export function Header() {
    return (
        <header className="flex justify-between px-4 mt-4">
            <ReturnButton />
            <BurgerMenu />
        </header>
    )
}
