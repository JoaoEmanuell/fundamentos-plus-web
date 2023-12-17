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

    const paragraphsTypes = [
        'green-title',
        'text',
        'green-separator',
        'bible-text',
        'text-bold',
        'green-sub-title',
        'table-with-index',
        'text-italic',
        'list-with-number-green-button-with-text',
        'text-for-complement-reading',
        'text-green',
        'text-important-note',
        'table-with-green-header',
        'list-with-gray-background',
        'check-list',
        'image',
        'text-highlight',
    ]

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
        const selectedType = typeSelectRef.current
            ?.value as lessonPageInterface['type']

        const contentText = contentTextRef.current?.value as string

        // add to json
        const previewTypeDivId = getRandomElementKey()

        exportJson[previewTypeDivId] = {
            type: selectedType,
            content: contentText,
        }

        // create a preview
        // add to preview div
        // const oldElements = previewDiv

        setExportJsonInPreviewDiv()
        // clear text input
        // contentTextRef.current?.setAttribute('value', '')
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
                        {paragraphsTypes.map((type) => {
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
