import { Button, Card, Flex, Show, Text } from "@chakra-ui/react";
import type IPost from "../../../models/post";
import React from "react";
import "./animations.css"

interface IProps {
    post: IPost,
}

const _maxPostContentHeight = 150;
const _maxPostContentLines = 5;

export default function PostPreview(props: IProps) {
    const [isContentExtended, setIsContentExtended] = React.useState(false);
    const [displayReadMore, setDisplayReadMore] = React.useState(false);
    const postContentRef = React.useRef<HTMLParagraphElement>(null);
    React.useEffect(() => {
        setDisplayReadMore(postContentRef.current !== null && postContentRef.current.scrollHeight > postContentRef.current.clientHeight);
    }, [postContentRef.current])

    const { post } = props;

    return (
        <Card.Root w={'100%'} boxShadow={'inset 0 0 10px 0 rgba(0, 0, 0, 0.25)'} _hover={{ animation: '200ms linear forwards levitate'}}>
            <Card.Body>
                <Flex justify={'space-between'}>
                    <Card.Title>{post.title}</Card.Title>
                    <Text>{post.date.toLocaleDateString()}</Text>
                </Flex>
                <Card.Description overflow={'clip'} ref={postContentRef} lineClamp={isContentExtended ? undefined : 3}>
                    {post.content}
                </Card.Description>
                <Card.Footer mt={5} pb={0}>
                    <Show when={displayReadMore}>
                        <Button onClick={() => setIsContentExtended(value => !value)}>{isContentExtended ? 'Show less' : 'Show more'}</Button>
                    </Show>
                </Card.Footer>
            </Card.Body>
        </Card.Root>
    )
}