import { lessonInterface } from '@/interfaces/interfaces'
import { authorImages } from '@/lib/authorImages'
import { getRandomElementKey } from '@/lib/randomElementKey'
import { CenterDiv } from '../../ui/CenterDiv'
import { GreenButtonWithText } from '../../ui/GreenButtonWithText'
import { YouTubeIframe } from '../../ui/YouTubeIframe'
import Image from 'next/image'

interface IndexLessonInterface {
    id: string
    lesson: lessonInterface
}

export function IndexLesson(props: IndexLessonInterface) {
    const title = props.lesson['title']

    const author = props.lesson['author']
    const authorImage = authorImages[author]

    const videoUrl = props.lesson['video']

    const lessonTranscription = props['lesson-transcription']
    const deezerCompleted = props.lesson['deezer-completed']
    const deezerResumed = props.lesson['deezer-resumed']

    const description = props.lesson['description']
    return (
        <div className="space-y-2">
            <CenterDiv>
                <GreenButtonWithText
                    buttonNumber={props.id}
                    text={title}
                    buttonEnable
                    textClassName="text-greenButton font-bold text-2xl"
                />
            </CenterDiv>
            <CenterDiv>Por: {author}</CenterDiv>
            <CenterDiv className="py-4">
                <Image
                    src={authorImage}
                    alt={`Image of ${author}`}
                    width={128}
                    height={128}
                />
            </CenterDiv>
            <div className="space-y-2">
                {description.map((paragraph) => {
                    return (
                        <p className="text-center" key={getRandomElementKey()}>
                            {paragraph}
                        </p>
                    )
                })}
            </div>
            <div>
                <h1 className="text-greenButton font-bold text-xl text-center">
                    Conteúdos de apoio
                </h1>
                <CenterDiv className="mt-4 border border-gray-300">
                    <table className="table-fixed">
                        <tbody className="divide-y divide-gray-300">
                            <tr>
                                <td className="flex items-center">
                                    <a
                                        href={`/assets/lessons_pdfs/${lessonTranscription}`}
                                        target="_blank"
                                        className="flex items-center"
                                    >
                                        <Image
                                            src="/img/documentation.png"
                                            alt="Docs icon"
                                            width={88}
                                            height={88}
                                            className="bg-greenButton p-2"
                                        />
                                        <span className="px-1">
                                            Ensino Transcrito
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex items-center">
                                    <a
                                        href={deezerResumed}
                                        target="_blank"
                                        className="flex items-center"
                                    >
                                        <Image
                                            src="/img/deezerpodcasticon.png"
                                            alt="Docs icon"
                                            width={88}
                                            height={88}
                                            className="bg-greenButton p-2"
                                        />
                                        <span className="px-1">
                                            Deezer Podcast [Resumo da Lição]
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex items-center">
                                    <a
                                        href={deezerCompleted}
                                        target="_blank"
                                        className="flex items-center"
                                    >
                                        <Image
                                            src="/img/deezerpodcasticon.png"
                                            alt="Docs icon"
                                            width={88}
                                            height={88}
                                            className="bg-greenButton p-2"
                                        />
                                        <span className="px-1">
                                            Deezer Podcast [Live completa]
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </CenterDiv>
                <div className="mt-4">
                    <h2 className="text-lg text-center">Vídeo da Lição</h2>
                    <CenterDiv className="mt-4">
                        <YouTubeIframe url={videoUrl} />
                    </CenterDiv>
                </div>
            </div>
        </div>
    )
}
