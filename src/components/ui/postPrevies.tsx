import { Card } from "@chakra-ui/react";
import type IPost from "../../models/post";

interface IProps {
    post: IPost,
}

export default function PostPreview(props: IProps) {
    const { post } = props;
    return (
        <Card.Root>
            <Card.Header>{post.title}</Card.Header>
            <Card.Body>{post.content}</Card.Body>
            <Card.Footer></Card.Footer>
        </Card.Root>
    )
}