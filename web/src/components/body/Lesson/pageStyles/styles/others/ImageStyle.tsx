import { StyleInterface } from '../StyleInterface'

import Image from 'next/image'

export function ImageStyle(props: StyleInterface) {
    const contentSplit = props.content.split(' | ')
    const image = `/assets/lessons_images/${contentSplit[0]}`
    const sizes = contentSplit[1]

    return (
        <div className={`relative ${sizes}`}>
            <Image src={image} alt="image" fill className="object-fill" />
        </div>
    )
}
