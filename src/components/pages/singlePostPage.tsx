import React from "react";
import { useParams } from "react-router";
import postsContext from "../../contexts/postsContext";
import Post from "../ui/post/post";

export default function SinglePostPage() {
    const posts = React.useContext(postsContext);
    const { id } = useParams<{ id: string }>();
    const post = posts?.find(p => p.id === id);

    if (post) {
        return (
            <Post post={post} />
        )
    } else return (
        'Something wrong'
    );
}