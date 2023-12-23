import { CenterDiv } from '@/components/ui/CenterDiv'
import { Github, Mail } from 'lucide-react'

export default function AboutPage() {
    return (
        <CenterDiv>
            <div className="space-y-4">
                <h1 className="text-xl text-center">Sobre</h1>
                <p className="text-center">
                    O fundamentos plus é um projeto <strong>não oficial</strong>{' '}
                    que visa a criação de uma versão WEB do fundamentos!
                </p>
                <p className="text-center">
                    Esse projeto não possui qualquer lucratividade! <br />
                    Caso queria contribuir com o projeto fundamentos, acesse o
                    fundamentos{' '}
                    <a
                        href="https://www.fundamentos.me/"
                        target="_blank"
                        className="underline"
                    >
                        clicando aqui.
                    </a>
                </p>
                <div>
                    <h2 className="text-center text-lg">
                        Informações de contato do desenvolvedor
                    </h2>
                    <CenterDiv className="mt-4">
                        <div className="space-y-4">
                            <div>
                                <a
                                    href="https://github.com/JoaoEmanuell/"
                                    target="_blank"
                                    className="flex justify-center"
                                >
                                    <Github />
                                    <span className="px-2">Github</span>
                                </a>
                            </div>
                            <div
                                style={{
                                    marginLeft: -5,
                                }}
                            >
                                <a
                                    href="mailto:joao.emanuel.dev@gmail.com"
                                    target="_blank"
                                    className="flex justify-center"
                                >
                                    <Mail />
                                    <span className="px-2">Email</span>
                                </a>
                            </div>
                        </div>
                    </CenterDiv>
                </div>
            </div>
        </CenterDiv>
    )
}
