import { Home, FileText, Search } from 'lucide-react'

interface footerInterface {
    clickHome?: () => void
    clickCycles?: () => void
}

export function HomeFooter(props: footerInterface) {
    const iconsClassName = 'cursor-pointer hover:scale-110 transition-all'
    return (
        <footer className={`flex justify-between w-full px-2 left-0 mt-4 `}>
            <Home
                onClick={props.clickHome}
                className={iconsClassName}
                width={28}
                height={28}
            />
            <a
                className="bg-greenButton p-2 rounded-full bottom-2 relative block"
                href="/search"
            >
                <Search
                    className={`text-white ${iconsClassName}`}
                    width={24}
                    height={24}
                />
            </a>
            <FileText
                onClick={props.clickCycles}
                className={iconsClassName}
                width={28}
                height={28}
            />
        </footer>
    )
}
