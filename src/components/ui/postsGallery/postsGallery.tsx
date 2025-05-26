import { For } from "@chakra-ui/react";
import Post from "../post/post";
import MockData from "../post/MockData";

export default function PostsGallery() {
    return (
        <For each={[MockData.longPost, MockData.shortPost]}>
            {(post) => (
                <Post post={post} asPreview/>
            )}
        </For>
    )
}