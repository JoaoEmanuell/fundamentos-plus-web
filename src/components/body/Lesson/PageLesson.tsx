import { lessonInterface } from '@/interfaces/interfaces'
import { getRandomElementKey } from '@/lib/randomElementKey'
import { PageStyles } from './pageStyles/PageStyle'
import { CenterDiv } from '@/components/ui/CenterDiv'

interface PageLessonInterface {
    page: number
    lesson: lessonInterface
}

export function PageLesson(props: PageLessonInterface) {
    const page = props.lesson['pages'][props.page]
    return (
        <div className="space-y-4 font-montserrat-regular">
            {page.map((line) => {
                return (
                    <CenterDiv key={getRandomElementKey()}>
                        <PageStyles content={line.content} type={line.type} />
                    </CenterDiv>
                )
            })}
        </div>
    )
}
