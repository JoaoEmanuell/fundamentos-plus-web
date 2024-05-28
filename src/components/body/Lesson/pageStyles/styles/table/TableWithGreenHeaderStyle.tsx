import { getRandomElementKey } from '@/lib/randomElementKey'
import { StyleInterface } from '../StyleInterface'

import Markdown from 'react-markdown'

export function TableWithGreenHeaderStyle(props: StyleInterface) {
    /*
    Table structure:

        "header:string | line:string , line:string | header:string | line:string , line:string"

        "header:ABC | CBD , DCS | header:ABC | ZXC , AQW"
        , === lines,
        | === columns.

        ABC | ABC
        QSD   , ZXA
        QSD   , ZXA
    */

    const content = props.content
    const headers = content.split(' | ')
    const full_headers: string[] = []
    const full_lines: string[][] = []
    headers.map((header) => {
        const header_split = header.split(' , ')
        if (header_split.length === 1) {
            full_headers.push(header_split[0])
        } else {
            full_lines.push(header_split)
        }
    })
    const first_column = full_lines[0]
    const others_columns = full_lines.slice(1, full_lines.length)

    return (
        <div className="overflow-x-auto">
            <table className="table-fixed border-gray-300 border-2">
                <thead>
                    <tr>
                        {full_headers.map((header) => {
                            return (
                                <th
                                    key={getRandomElementKey()}
                                    className="bg-greenButton text-white text-base text-center border-2 border-gray-200 p-3 "
                                >
                                    <Markdown>{header}</Markdown>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {first_column.map((first_line, index) => {
                        return (
                            <tr key={getRandomElementKey()}>
                                <td className="text-black bg-gray-200 text-center border border-gray-300 p-2 text-sm">
                                    <Markdown>{first_line}</Markdown>
                                </td>
                                {others_columns.map((column) => {
                                    return (
                                        <td
                                            key={getRandomElementKey()}
                                            className="text-black bg-gray-200 text-center border border-gray-300 p-2 text-sm"
                                        >
                                            <Markdown>{column[index]}</Markdown>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
