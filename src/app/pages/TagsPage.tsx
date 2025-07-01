import { allPosts } from '@/.content-collections/generated';
import { Heading } from '@/app/components/Heading';
import { Section } from '@/app/components/Section';
import { Tag } from '@/app/components/Tag';
import React from 'react';

export function TagsPage() {
    const allTags = allPosts.map((post) => post.categories).flat();
    const uniqueTags: Set<string> = new Set(allTags);
    let tagMap: Record<string, number> = {};

    [...uniqueTags].forEach((tag) => {
        const count = allTags.filter((t) => t === tag).length;
        tagMap[tag] = count;
    });

    tagMap = Object.fromEntries(Object.entries(tagMap).sort((a, b) => b[1] - a[1]));
    return (
        <React.Fragment key="tags-page">
            <Section><Heading title="Posts by Tag" /></Section>
            <div className="mx-auto grid w-full max-w-screen-md grid-cols-1 gap-x-6 px-4 md:grid-cols-2 md:px-0">
                {
                    Object.entries(tagMap).map(([tag, count]) => (
                        <a
                            key={tag}
                            className="group row-span-1 flex justify-between py-2 hover:text-orange-600"
                            href={`/tags/${tag}`}
                        >
                            <Tag tag={tag} />
                            <p>{count}</p>
                        </a>
                    ))
                }
            </div>
        </React.Fragment>
    );
}