import React from "react";
import { useParams } from "react-router";
import postsContext from "../../contexts/postsContext";
import Post from "../ui/post/post";
import PostActionsBox from "../ui/postActionsBox/postActionsBox";
import { VStack } from "@chakra-ui/react";
import CommentsGallery from "../ui/commentsGallery/commentsGallery";
import type IComment from "../../models/comment";

export default function SinglePostPage() {
    const posts = React.useContext(postsContext);
    const [isLiked, setIsLiked] = React.useState(false);
    const [likesNumber, setLikesNumber] = React.useState(5);
    const [comments, setComments] = React.useState<IComment[]>([]);

    const { id } = useParams<{ id: string }>();

    const post = posts?.find(p => p.id === id);

    const like = () => {
        setIsLiked(value => !value);
        if (isLiked)
            setLikesNumber(likesNumber - 1);
        else
            setLikesNumber(likesNumber + 1);
    }

    const sendComment = (text: string) => {
        const newComment: IComment = { content: text, createdAt: new Date() };
        setComments(value => value.concat(newComment));
        return Promise.resolve();
    }

    if (post) {
        return (
            <VStack align={'stretch'}>
                <Post post={post} />
                <PostActionsBox
                    isLiked={isLiked}
                    likesNumber={likesNumber}
                    like={like}
                    sendComment={sendComment}
                />
                <CommentsGallery comments={comments} />
            </VStack>
        )
    } else return (
        'Something wrong'
    );
}