interface GreenButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    text: string
}

export function GreenButton(props: GreenButtonProps) {
    return (
        <div
            className="mt-4 border border-gray-200 rounded bg-greenButton text-white px-4 cursor-pointer"
            {...props}
        >
            {props.text}
        </div>
    )
}
