'use client'

import { CenterDiv } from '@/components/ui/CenterDiv'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { NumberGreenButton } from '@/components/ui/NumberGreenButton'
import { GreenButton } from '@/components/ui/GreenButton'

export default function EndPage() {
    const params = useParams()
    const id = params.id as string
    return (
        <CenterDiv className="font-montserrat-regular">
            <div className="space-y-4">
                <CenterDiv>
                    <Image
                        src="/img/completedlesson.png"
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
                            document.location.href = `/lesson/${id}`
                        }}
                    ></GreenButton>
                </CenterDiv>
            </div>
        </CenterDiv>
    )
}
