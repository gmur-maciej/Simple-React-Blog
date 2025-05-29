import { Card, Text } from "@chakra-ui/react";
import type IComment from "../../../models/comment";

interface IProps {
    comment: IComment,
}

export default function Comment(props: IProps) {
    const { content, createdAt } = props.comment;
    return (
        <Card.Root w={'100%'} boxShadow={'inset 0 0 10px 0 rgba(0, 0, 0, 0.25)'} _hover={{ animation: '200ms linear forwards levitate' }}>
            <Card.Body>
                <Text>{createdAt.toLocaleDateString()}</Text>
                <Card.Description>
                    {content}
                </Card.Description>
            </Card.Body>
        </Card.Root>

    )
}