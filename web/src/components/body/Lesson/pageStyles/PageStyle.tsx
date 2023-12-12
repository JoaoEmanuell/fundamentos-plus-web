import { lessonPageInterface } from '@/interfaces/interfaces'
import { GreenTitleStyle } from './styles/GreenTitleStyle'
import { TextBoldStyle } from './styles/TextBold'
import { TextStyle } from './styles/Text'
import { BibleTextStyle } from './styles/BibleText'
import { GreenSeparatorStyle } from './styles/GreenSeparator'
import { GreenSubTitleStyle } from './styles/GreenSubTitleStyle'

export function PageStyles(props: lessonPageInterface) {
    const styles = {
        'green-title': GreenTitleStyle,
        text: TextStyle,
        'text-bold': TextBoldStyle,
        'bible-text': BibleTextStyle,
        'green-separator': GreenSeparatorStyle,
        'green-sub-title': GreenSubTitleStyle,
    }

    // If not exists the type in styles
    if (!styles.hasOwnProperty(props.type)) {
        return <p className={props.className}>{props.content}</p>
    }

    const Component = styles[props.type]

    return <Component content={props.content} className={props.className} />
}
