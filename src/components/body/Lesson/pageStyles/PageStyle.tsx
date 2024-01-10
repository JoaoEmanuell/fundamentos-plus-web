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
import { TableWithGreenHeaderStyle } from './styles/table/TableWithGreenHeaderStyle'
import { ListWithGrayBackgroundStyle } from './styles/list/ListWithGrayBackgroundStyle'
import { CheckListStyle } from './styles/list/CheckListStyle'
import { ImageStyle } from './styles/others/ImageStyle'
import { TextHighlight } from './styles/text/TextHighlight'
import { GreenBackgroundTitleStyle } from './styles/green/GreenBackgroundTitleStyle'
import { FrameWithTitleAndBorder } from './styles/others/FrameWithTitleAndBorder'
import { ListWithArrowStyle } from './styles/list/ListWithArrowStyle'
import { MultiTextStyle } from './styles/text/MultiText'

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
        'table-with-green-header': TableWithGreenHeaderStyle,
        'list-with-gray-background': ListWithGrayBackgroundStyle,
        'check-list': CheckListStyle,
        image: ImageStyle,
        'text-highlight': TextHighlight,
        'green-background-title': GreenBackgroundTitleStyle,
        'frame-with-title-and-border': FrameWithTitleAndBorder,
        'list-with-arrow': ListWithArrowStyle,
        'multi-text': MultiTextStyle,
    }

    // If not exists the type in styles
    if (!styles.hasOwnProperty(props.type)) {
        return <p className={props.className}>{props.content}</p>
    }

    const Component = styles[props.type]

    return <Component content={props.content} className={props.className} />
}
