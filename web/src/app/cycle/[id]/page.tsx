import { useParams } from 'next/navigation'

export default function Cycle() {
    const params = useParams()
    const id = params.id as string
    return <h1>{id}</h1>
}
