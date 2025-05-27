import React from "react";
import { useParams } from "react-router";
import postsContext from "../../contexts/postsContext";
import Post from "../ui/post/post";
import PostActionsBox from "../ui/postActionsBox/postActionsBox";
import { VStack } from "@chakra-ui/react";

export default function SinglePostPage() {
    const posts = React.useContext(postsContext);
    const [isLiked, setIsLiked] = React.useState(false);
    const [likesNumber, setLikesNumber] = React.useState(5);
    const { id } = useParams<{ id: string }>();
    const post = posts?.find(p => p.id === id);
    const like = () => {
        setIsLiked(value => !value);
        if (isLiked)
            setLikesNumber(likesNumber - 1);
        else
            setLikesNumber(likesNumber + 1);
    }
    if (post) {
        return (
            <VStack align={'stretch'}>
                <Post post={post} />
                <PostActionsBox
                    isLiked={isLiked}
                    likesNumber={likesNumber}
                    sendComment={text => console.log(text)}
                    like={like}
                />
            </VStack>
        )
    } else return (
        'Something wrong'
    );
}