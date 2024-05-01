'use client'

import { CenterDiv } from '@/components/ui/CenterDiv'

import { GreenTitleStyle } from '@/components/body/Lesson/pageStyles/styles/green/GreenTitleStyle'

import { Check, X } from 'lucide-react'
import { TextStyle } from '@/components/body/Lesson/pageStyles/styles/text/Text'
import { GreenSeparatorStyle } from '@/components/body/Lesson/pageStyles/styles/green/GreenSeparator'
import { BibleTextStyle } from '@/components/body/Lesson/pageStyles/styles/text/BibleText'
import { TextBoldStyle } from '@/components/body/Lesson/pageStyles/styles/text/TextBold'
import { GreenSubTitleStyle } from '@/components/body/Lesson/pageStyles/styles/green/GreenSubTitleStyle'
import { TableWithIndexStyle } from '@/components/body/Lesson/pageStyles/styles/table/TableWithIndexStyle'
import { TextItalicStyle } from '@/components/body/Lesson/pageStyles/styles/text/TextItalic'
import { ListWithNumberGreenButtonWithTextStyle } from '@/components/body/Lesson/pageStyles/styles/list/ListWithNumberGreenButtonWithTextStyle'
import { TextForComplementReadingStyle } from '@/components/body/Lesson/pageStyles/styles/text/TextForComplementReading'
import { TextGreenStyle } from '@/components/body/Lesson/pageStyles/styles/text/TextGreen'
import { TableWithGreenHeaderStyle } from '@/components/body/Lesson/pageStyles/styles/table/TableWithGreenHeaderStyle'
import { ListWithGrayBackgroundStyle } from '@/components/body/Lesson/pageStyles/styles/list/ListWithGrayBackgroundStyle'
import { CheckListStyle } from '@/components/body/Lesson/pageStyles/styles/list/CheckListStyle'
import { ImageStyle } from '@/components/body/Lesson/pageStyles/styles/others/ImageStyle'
import { TextHighlight } from '@/components/body/Lesson/pageStyles/styles/text/TextHighlight'
import { GreenBackgroundTitleStyle } from '@/components/body/Lesson/pageStyles/styles/green/GreenBackgroundTitleStyle'
import { FrameWithTitleAndBorder } from '@/components/body/Lesson/pageStyles/styles/others/FrameWithTitleAndBorder'
import { ListWithArrowStyle } from '@/components/body/Lesson/pageStyles/styles/list/ListWithArrowStyle'
import { MultiTextStyle } from '@/components/body/Lesson/pageStyles/styles/text/MultiText'
import { MultiBibleStyle } from '@/components/body/Lesson/pageStyles/styles/text/MultiBible'

export default function HelpPage() {
    return (
        <CenterDiv>
            <div>
                <h1 className="text-center text-lg">
                    Bem vindo a página de ajuda
                </h1>
                <p className="mt-4 text-center">
                    Nessa página você irá obter uma ajuda sobre os estilos de
                    formatação, assim como exemplos de uso que ajudarão na hora
                    de cadastrar as lições.
                </p>
                <CenterDiv>
                    <table className="table-auto mt-4 border border-black">
                        <thead>
                            <tr>
                                <th className="px-2">Nome do estilo</th>
                                <th className="px-2">Exemplo</th>
                                <th className="px-2">Visualização</th>
                                <th className="px-2">Suporta markdown?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>title green</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    Título verde
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <GreenTitleStyle content="Título verde" />
                                    </div>
                                </td>
                                <td className="flex justify-center">
                                    <X color="red" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>text</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    Texto comum
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <TextStyle content="Texto comum" />
                                    </div>
                                </td>
                                <td className="flex justify-center">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>green separator</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    {' '}
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <GreenSeparatorStyle content="" />
                                    </div>
                                </td>
                                <td className="flex justify-center">
                                    <X color="red" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>bible</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    versicle | reference
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <BibleTextStyle content="versicle | reference" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>bold</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    Texto
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <TextBoldStyle content="Texto" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>sub title green</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    Texto
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <GreenSubTitleStyle content="Texto" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>table with index style</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    index:texto do index | texto da célula |
                                    texto da célula , <br /> index:texto do
                                    index 2 | texto da célula 2 | texto da
                                    célula 2
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <TableWithIndexStyle content="index:texto do index | texto da célula | texto da célula , index:texto do index 2 | texto da célula 2 | texto da célula 2" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>italic</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    texto
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <TextItalicStyle content="texto" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>list with number green button text</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    01 | texto , 02 | texto , A | texto
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <ListWithNumberGreenButtonWithTextStyle content="01 | texto , 02 | texto , A | texto" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>complement reading</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    texto 1 | texto 2 | texto 3
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <TextForComplementReadingStyle content="texto 1 | texto 2 | texto 3" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>green text</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    texto
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <TextGreenStyle content="texto" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>table with green header</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    header 1 | coluna 1 , coluna 2 | header 2 |
                                    coluna 3 , coluna 4
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <TableWithGreenHeaderStyle content="header 1 | coluna 1 , coluna 2 | header 2 | coluna 3 , coluna 4" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>list with gray background</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    texto | texto 1
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <ListWithGrayBackgroundStyle content="texto | texto 1" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>checklist</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    texto | texto 1
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <CheckListStyle content="texto | texto 1" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>image</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    nome da imagem (salva em
                                    public/assets/lessons_images) | tamanhos
                                    (disponíveis em public/js/tailwindClass.js)
                                    <br />
                                    <br />
                                    24-1.webp | w-[21rem] h-32 md:w-[50rem]
                                    md:h-[20rem]
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <ImageStyle content="24-1.webp | w-[21rem] h-32 md:w-[50rem] md:h-[20rem]" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <X color="red" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>highlight text</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    expressão para destacar | cor da expressão |
                                    texto
                                    <br />
                                    **a)** | #769335 | **a)** texto
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <TextHighlight content="**a)** | #769335 | **a)** texto" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>green background title</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    texto
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <GreenBackgroundTitleStyle content="texto" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>frame with title and border</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    cor da borda | title | cor do título | text
                                    <br />
                                    <br />
                                    #55730e | **Title** | #55730e | Text
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <FrameWithTitleAndBorder content="#55730e | **Title** | #55730e | Text" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>list with arrow</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    direção da flecha [up, right, down, left] |
                                    cor da flecha | texto | texto | text
                                    <br />
                                    <br />
                                    right | #55730e | texto | texto | texto
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <ListWithArrowStyle content="right | #55730e | texto | texto | texto" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>multi text</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    texto | texto | texto
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <MultiTextStyle content="texto 0 | texto 1 | texto 2" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                            <tr className="border border-black">
                                <td className="px-2">
                                    <em>multi bible</em>
                                </td>
                                <td className="px-2 font-mono text-center bg-gray-300 text-black">
                                    text | versicle , text | versicle , text |
                                    versicle
                                </td>
                                <td className="px-2">
                                    <div className="flex justify-center">
                                        <MultiBibleStyle content="text | versicle , text | versicle , text | versicle" />
                                    </div>
                                </td>
                                <td className="flex justify-center align-middle">
                                    <Check color="green" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </CenterDiv>
            </div>
        </CenterDiv>
    )
}
