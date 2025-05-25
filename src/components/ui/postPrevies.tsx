import { Card } from "@chakra-ui/react";

interface IProps {
    title: string,
    content: string,
}

export default function PostPreview(props: IProps) {
    return (
        <Card.Root>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>{props.content}</Card.Body>
            <Card.Footer></Card.Footer>
        </Card.Root>
    )
}