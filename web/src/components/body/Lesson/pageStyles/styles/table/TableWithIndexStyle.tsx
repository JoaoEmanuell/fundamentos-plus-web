import { getRandomElementKey } from '@/lib/randomElementKey'
import { StyleInterface } from '../StyleInterface'

export function TableWithIndexStyle(props: StyleInterface) {
    /*
    Table structure:

        "index:string | string | string | ..., index:number | string | ..."
        , === lines,
        | === columns.
    */

    const content = props.content
    const lines = content.split(', ')
    const full_content: string[][] = []
    lines.map((line) => {
        full_content.push(line.split(' | '))
    })
    return (
        <table className="table-fixed border-gray-300 border-2">
            <tbody className="divide-y divide-gray-300">
                {full_content.map((lines) => {
                    return (
                        <tr key={getRandomElementKey()}>
                            {lines.map((line) => {
                                {
                                    if (!line.search('index')) {
                                        return (
                                            <td className="bg-greenButton text-white w-16 text-lg text-center">
                                                {line.replace('index:', '')}
                                            </td>
                                        )
                                    } else {
                                        return (
                                            <td className="text-black bg-gray-200 text-center border border-gray-300 px-4">
                                                {line}
                                            </td>
                                        )
                                    }
                                }
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
