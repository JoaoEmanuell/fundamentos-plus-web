'use client'

import { CenterDiv } from '@/components/ui/CenterDiv'
import { useRef, useState } from 'react'
import { lessonPageInterface } from '@/interfaces/interfaces'
import { PageStyles } from '@/components/body/Lesson/pageStyles/PageStyle'
import { getRandomElementKey } from '@/lib/randomElementKey'
import React from 'react'

import { Trash2 } from 'lucide-react'

interface exportJsonInterface {
    previewTypeDivId: string
}

const exportJson: exportJsonInterface | object = {}

export default function EditPage() {
    const typeSelectRef = useRef<HTMLSelectElement | null>(null)
    const contentTextRef = useRef<HTMLInputElement | null>(null)

    const [previewDiv, setPreviewDiv] = useState<JSX.Element | null>(null)
    const previewDivRef = useRef<HTMLDivElement | null>(null)

    const [resultDiv, setResultDiv] = useState<JSX.Element | null>(null)

    const paragraphsAlias = {
        'title green': 'green-title',
        text: 'text',
        'green separator': 'green-separator',
        bible: 'bible-text',
        bold: 'text-bold',
        'sub title green': 'green-sub-title',
        'table with index': 'table-with-index',
        italic: 'text-italic',
        'list with number green button with text':
            'list-with-number-green-button-with-text',
        'complement reading': 'text-for-complement-reading',
        'green text': 'text-green',
        'table with green header': 'table-with-green-header',
        'list with gray background': 'list-with-gray-background',
        checklist: 'check-list',
        image: 'image',
        'highlight text': 'text-highlight',
        'green background title': 'green-background-title',
        'frame with title and border': 'frame-with-title-and-border',
        'list with arrow': 'list-with-arrow',
        'multi text': 'multi-text',
        'multi bible': 'multi-bible',
    }

    const setExportJsonInPreviewDiv = () => {
        setPreviewDiv(
            <>
                {Object.entries(exportJson).map(([key, value]) => {
                    return (
                        <div
                            id={key}
                            key={key}
                            className="flex justify-between"
                        >
                            <PageStyles
                                content={value.content}
                                type={value.type}
                            />
                            <div
                                onClick={() => {
                                    deletePreview(key)
                                }}
                            >
                                <Trash2 />
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    const clickAddButton = () => {
        const selectedAlias =
            paragraphsAlias[typeSelectRef.current?.value as string]
        const selectedType = selectedAlias as lessonPageInterface['type']

        const contentText = contentTextRef.current?.value as string

        // add to json
        const previewTypeDivId = getRandomElementKey()

        exportJson[previewTypeDivId] = {
            type: selectedType,
            content: contentText,
        }

        // create a preview
        setExportJsonInPreviewDiv()
    }

    const deletePreview = (previewId: string) => {
        // Remove in json
        delete exportJson[previewId]
        // Update the preview div
        setExportJsonInPreviewDiv()
    }

    const generateJson = () => {
        const exportedArray: lessonPageInterface[] = []
        // Transform in array
        Object.entries(exportJson).map(([key, value]) => {
            exportedArray.push({
                type: value.type,
                content: value.content,
            })
        })
        const exportedArrayJsonString = JSON.stringify(exportedArray, null, 4)
        setResultDiv(
            <pre className="max-w-xl">
                <code>{exportedArrayJsonString}</code>
            </pre>
        )
        navigator.clipboard.writeText(exportedArrayJsonString)
        window.alert('Json copiado para a sua área de transferência!')
    }

    return (
        <div>
            <CenterDiv className="text-center">
                <div className="space-y-4">
                    <h1 className="text-xl">Página de edição</h1>
                    <p>Seja bem vindo a página de edição!</p>
                    <p>
                        Nessa página, você poderá escolher os estilos de cada
                        paragrafo e gerar um json contendo uma página de uma
                        lição!
                    </p>
                    <p>
                        <a href="/help" target="_blank">
                            Caso você deseje saber mais sobre os estilos
                            disponíveis,{' '}
                            <span className="underline">clique aqui</span>.
                        </a>
                    </p>
                </div>
            </CenterDiv>
            <div
                className="border border-gray-200 mt-4 p-4"
                ref={previewDivRef}
            >
                {previewDiv}
            </div>
            <CenterDiv className="mt-4">
                <div className="justify-between space-x-4">
                    <select
                        name="typeSelect"
                        id="typeSelect"
                        className="bg-greenButton text-white py-2"
                        ref={typeSelectRef}
                    >
                        {Object.keys(paragraphsAlias).map((type) => {
                            return (
                                <option
                                    value={type}
                                    key={type}
                                    className="text-center"
                                >
                                    {type}
                                </option>
                            )
                        })}
                    </select>
                    <input
                        type="text"
                        name="contentText"
                        id="contentText"
                        className="text-black text-center border border-gray-200"
                        ref={contentTextRef}
                    />
                    <button
                        onClick={clickAddButton}
                        className="mt-4 border border-gray-200 rounded bg-greenButton text-white px-4"
                    >
                        Adicionar
                    </button>
                </div>
            </CenterDiv>
            <CenterDiv>
                <div>
                    <button
                        onClick={generateJson}
                        className="mt-4 border border-gray-200 rounded bg-greenButton text-white px-4"
                    >
                        Gerar json
                    </button>
                </div>
            </CenterDiv>
            <CenterDiv>
                <div>{resultDiv}</div>
            </CenterDiv>
        </div>
    )
}
