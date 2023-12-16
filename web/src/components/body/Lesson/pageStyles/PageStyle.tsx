import { lessonPageInterface } from '@/interfaces/interfaces'
import { GreenTitleStyle } from './styles/green/GreenTitleStyle'
import { TextBoldStyle } from './styles/text/TextBold'
import { TextStyle } from './styles/text/Text'
import { BibleTextStyle } from './styles/text/BibleText'
import { GreenSeparatorStyle } from './styles/green/GreenSeparator'
import { GreenSubTitleStyle } from './styles/green/GreenSubTitleStyle'
import { TableWithIndexStyle } from './styles/table/TableWithIndexStyle'
import { TextItalicStyle } from './styles/text/TextItalic'
import { ListWithNumberGreenButtonWithTextStyle } from './styles/list/ListWithNumberGreenButtonWithTextStyle'
import { TextForComplementReadingStyle } from './styles/text/TextForComplementReading'
import { TextGreenStyle } from './styles/text/TextGreen'
import { TextImportantNote } from './styles/text/TextImportantNote'
import { TableWithGreenHeaderStyle } from './styles/table/TableWithGreenHeaderStyle'
import { ListWithGrayBackgroundStyle } from './styles/list/ListWithGrayBackgroundStyle'

export function PageStyles(props: lessonPageInterface) {
    const styles = {
        'green-title': GreenTitleStyle,
        text: TextStyle,
        'text-bold': TextBoldStyle,
        'bible-text': BibleTextStyle,
        'green-separator': GreenSeparatorStyle,
        'green-sub-title': GreenSubTitleStyle,
        'table-with-index': TableWithIndexStyle,
        'text-italic': TextItalicStyle,
        'list-with-number-green-button-with-text':
            ListWithNumberGreenButtonWithTextStyle,
        'text-for-complement-reading': TextForComplementReadingStyle,
        'text-green': TextGreenStyle,
        'text-important-note': TextImportantNote,
        'table-with-green-header': TableWithGreenHeaderStyle,
        'list-with-gray-background': ListWithGrayBackgroundStyle,
    }

    // If not exists the type in styles
    if (!styles.hasOwnProperty(props.type)) {
        return <p className={props.className}>{props.content}</p>
    }

    const Component = styles[props.type]

    return <Component content={props.content} className={props.className} />
}
