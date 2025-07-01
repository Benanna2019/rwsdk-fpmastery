import { allPosts } from "content-collections";
import { RequestInfo } from "rwsdk/worker";
import { PostHeader } from "../components/PostHeader";
import Markdown from 'markdown-to-jsx'

export function BlogPost(requestInfo: RequestInfo) {
    const slug = requestInfo.params.slug;
    const post = allPosts.find(post => post.slug === slug || post.url === slug);

    if (!post || !slug) {
        return <div>Post not found</div>;
    }

    return (
        <div className="mx-auto w-full max-w-screen-md">
            <PostHeader
                title={post.title}
                author={post.author}
                tags={post.categories}
                pubDate={post.published}
                isPinned={false}
            />
            <div className="prose">
                <Markdown>{post.content}</Markdown>
            </div>
        </div>
    );
}
