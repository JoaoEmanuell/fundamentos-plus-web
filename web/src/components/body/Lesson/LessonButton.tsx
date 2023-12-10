interface LessonButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    text: string
}

export function LessonButton(props: LessonButtonProps) {
    return (
        <div
            className="mt-4 border border-gray-200 rounded bg-greenButton text-white px-4"
            {...props}
        >
            {props.text}
        </div>
    )
}
