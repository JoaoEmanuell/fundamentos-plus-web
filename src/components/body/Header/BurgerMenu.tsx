// https://tailwindcomponents.com/component/navbar-hamburger-menu
// modified

export function BurgerMenu() {
    const year = new Date().getFullYear()
    return (
        <div>
            <nav className="relative flex justify-between items-center">
                <a className="text-3xl font-bold leading-none" href="#"></a>
                <div className="">
                    <button className="navbar-burger flex items-center text-greenButton">
                        <svg
                            className="block fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
            </nav>
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a
                            className="mr-auto text-3xl font-bold leading-none"
                            href="#"
                        ></a>
                        <button className="navbar-close">
                            <svg
                                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-greenButton rounded"
                                    href="/"
                                >
                                    Página inicial
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-greenButton rounded"
                                    href="/cycles"
                                >
                                    Ciclos
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-greenButton rounded"
                                    href="/search"
                                >
                                    Pesquisa
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-greenButton rounded"
                                    href="/about"
                                >
                                    Sobre
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Fundamentos plus web © {year}</span>
                        </p>
                    </div>
                </nav>
            </div>
            <script src="/js/burgerMenu.js" defer></script>
        </div>
    )
}
