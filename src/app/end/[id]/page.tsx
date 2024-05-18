'use client'

import { CenterDiv } from '@/components/ui/CenterDiv'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { NumberGreenButton } from '@/components/ui/NumberGreenButton'
import { GreenButton } from '@/components/ui/GreenButton'
import { SetCookie } from '@/functions/cookies/SetCookie'
import { GetCookie } from '@/functions/cookies/GetCookie'

export default function EndPage() {
    const params = useParams()
    const id = params.id as string

    const removeLastPage = () => {
        let json
        try {
            json = JSON.parse(GetCookie('lastLessonAndPage'))
        } catch (err) {
            // cookie is not a json
            json = {}
        }
        delete json[id]
        SetCookie('lastLessonAndPage', JSON.stringify(json))
    }
    return (
        <CenterDiv className="font-montserrat-regular">
            <div className="space-y-4">
                <CenterDiv>
                    <Image
                        src="/img/completedlesson.webp"
                        alt="completed lesson"
                        width={200}
                        height={200}
                    />
                </CenterDiv>
                <h1 className="text-xl text-greenButton font-bold text-center">
                    Parabéns
                </h1>
                <h2 className="text-lg text-center">Você Completou a Lição!</h2>
                <CenterDiv>
                    <NumberGreenButton text={id} enable />
                </CenterDiv>
                <p className="text-center">
                    Agora não se esqueça de compartilhar com sua família e
                    vínculos com a igreja.
                </p>
                <CenterDiv>
                    <GreenButton
                        text="Continuar"
                        onClick={() => {
                            removeLastPage()
                            document.location.href = `/lesson/${id}`
                        }}
                    ></GreenButton>
                </CenterDiv>
            </div>
        </CenterDiv>
    )
}
