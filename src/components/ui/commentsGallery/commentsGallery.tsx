import { Box, For, Show, Text } from "@chakra-ui/react";
import type IComment from "../../../models/comment";
import Comment from "../comment/comment";

interface IProps {
    comments: IComment[],
}

export default function CommentsGallery(props: IProps) {
    return (
        <>
            <For each={[...props.comments].reverse()}>
                {comment => (
                    <Box data-state={'open'} _open={{ animation: 'slide-from-top-full 600ms ease-in'}}>
                        <Comment comment={comment} />
                    </Box>
                )}
            </For>
            <Show when={props.comments.length === 0}>
                <Text
                    textAlign={'center'}
                    color={'fg.subtle'}>
                    There are no comments.
                </Text>
            </Show>
        </>
    )
}