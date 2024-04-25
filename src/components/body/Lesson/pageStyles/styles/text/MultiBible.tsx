import { StyleInterface } from '../StyleInterface'
import { BibleTextStyle } from './BibleText'

export function MultiBibleStyle(props: StyleInterface) {
    /* bible text | reference , bible text | reference */
    const bibleTexts = props.content.split(' , ')
    return (
        <div>
            {bibleTexts.map((bible) => {
                return (
                    <BibleTextStyle
                        content={bible}
                        className={props.className}
                        key={bible}
                    />
                )
            })}
        </div>
    )
}
