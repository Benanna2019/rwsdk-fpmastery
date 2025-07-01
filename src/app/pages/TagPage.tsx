import { Section } from '@/app/components/Section';
import { Card } from '@/app/components/Card';
import { BaseLayout } from '@/app/Layout';
import { Heading } from '@/app/components/Heading';
import { RequestInfo } from 'rwsdk/worker';
import { allPosts } from '@/.content-collections/generated';
import React from 'react';


export function TagPage(requestInfo: RequestInfo) {
    const { tag } = requestInfo.params;

    const filteredPosts = tag
        ? allPosts.filter((post: any) => post.categories?.includes(decodeURIComponent(tag)))
        : [];

    return (
        <React.Fragment key="tag-page">
            <Section>
                <Heading title={`Posts with #${decodeURIComponent(tag)}`} />
                <div className="pt-2 text-center">
                    <a href="/tags" className="underline hover:text-orange-600">all tags →</a>
                </div>
            </Section>
            <Section>
                {
                    filteredPosts.map((post) => (
                        <div className="mb-4 basis-1 last:mb-0">
                            <Card post={post} />
                        </div>
                    ))
                }
            </Section>
        </React.Fragment>
    );
}