interface GreenButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    text: string
    divClassName?: string
}

export function GreenButton(props: GreenButtonProps) {
    return (
        <div
            className={`mt-4 border border-gray-200 rounded bg-greenButton text-white px-4 cursor-pointer ${props.divClassName}`}
            {...props}
        >
            {props.text}
        </div>
    )
}
