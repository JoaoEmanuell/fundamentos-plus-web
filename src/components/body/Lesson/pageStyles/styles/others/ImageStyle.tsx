import { StyleInterface } from '../StyleInterface'

import Image from 'next/image'

export function ImageStyle(props: StyleInterface) {
    /* 
    image_name (save in public/assets/lessons_images) | sizes config (using tailwind to adjust)
    Note: read the README.md located in lessons_images
    Note: if do you use custom classes, include in tailwindClass.js located in public/js because if the custom class is include using js, he is not compiled and not work.
    */
    const contentSplit = props.content.split(' | ')
    const image = `/assets/lessons_images/${contentSplit[0]}`
    const sizes = contentSplit[1]

    return (
        <div className={`relative ${sizes}`}>
            <Image src={image} alt="image" fill className={`object-fill`} />
        </div>
    )
}
