import { For } from "@chakra-ui/react";
import Post from "../post/post";
import React from "react";
import postsContext from "../../../contexts/postsContext";
import { NavLink } from "react-router";

export default function PostsGallery() {
    const posts = React.useContext(postsContext);
    return (
        <For each={posts}>
            {(post) => (
                <NavLink to={'/post/' + post.id}>
                    <Post post={post} asPreview />
                </NavLink>
            )}
        </For>
    )
}