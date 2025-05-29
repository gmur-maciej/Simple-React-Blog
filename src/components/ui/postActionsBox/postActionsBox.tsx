import { Box, Field, Flex, IconButton, Input, Show, Stat } from "@chakra-ui/react";
import React from "react";
import { IoRose, IoRoseOutline, IoSend } from "react-icons/io5";

interface IProps {
    isLiked: boolean,
    likesNumber: number,
    like(): any,
    sendComment(text: string): Promise<any>,
}

export default function PostActionsBox(props: IProps) {
    const commentFieldRef = React.useRef<HTMLInputElement>(null);
    const { isLiked, likesNumber } = props;
    const sendComment = async () => {
        if (commentFieldRef.current) {
            try {
                await props.sendComment(commentFieldRef.current.value);
                commentFieldRef.current.value = '';
                
            } catch (error) {
                
            }
        }
    };
    return (
        <Flex m={'0 8px'}>
            <Stat.Root justifyContent={'center'}>
                <Stat.ValueText >{likesNumber}</Stat.ValueText>
            </Stat.Root>
            <IconButton
                onClick={props.like}
                variant={'plain'}
                _hover={{ color: 'red.700' }}
            >
                <Show when={!isLiked}>
                    <IoRoseOutline />
                </Show>
                <Show when={isLiked}>
                    <Box color={'red.700'}>
                        <IoRose />
                    </Box>
                </Show>
            </IconButton>
            <Field.Root>
                <Input
                    variant={'outline'}
                    ref={commentFieldRef}
                    placeholder={"Comment..."}
                />
            </Field.Root>
            <IconButton
                onClick={sendComment}
                variant={'plain'}
                _hover={{ color: 'red.700' }}
            >
                <IoSend />
            </IconButton>
        </Flex>
    )
}