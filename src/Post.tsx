interface PostProps {
        author: string;
        content: string;
    }

export function Post(Props: PostProps) {

    return (
        <div>
            <strong>{Props.author}</strong>
            <p>{Props.content}</p>
        </div>
    )
}