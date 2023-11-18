interface YouTubeIframe {
    url: string
}

export function YouTubeIframe(props: YouTubeIframe) {
    return (
        <iframe
            className="w-80 h-52 rounded-sm"
            src={props.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    )
}
