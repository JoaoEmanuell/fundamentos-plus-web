export const ProgressCircle = ({ size, progress }) => {
    const radius = size / 2
    const strokeWidth = 4.5
    const normalizedRadius = radius - strokeWidth * 2
    const circumference = normalizedRadius * 2 * Math.PI
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
        <svg height={size} width={size} className="block">
            <circle
                stroke="#e3e1e1"
                fill="#fff"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke="#769335"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                className="transition-all duration-300"
            />
            <text
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle"
                className="text-xs"
                fill="#55730e"
            >
                {progress}%
            </text>
        </svg>
    )
}
