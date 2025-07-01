import { allPosts } from "content-collections";
import { RequestInfo } from "rwsdk/worker";
import { parse, compareDesc, isValid } from "date-fns";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import React from "react";
// Helper function to parse "Month Day, Year" format using date-fns
export function parsePublishedDate(dateString: string): Date {
    // Try parsing with date-fns using the exact format "MMMM d, yyyy"
    const parsedDate = parse(dateString, "MMMM d, yyyy", new Date());

    if (isValid(parsedDate)) {
        return parsedDate;
    }

    // Fallback to native Date parsing
    const fallbackDate = new Date(dateString);
    if (isValid(fallbackDate)) {
        return fallbackDate;
    }

    console.warn(`Could not parse date: ${dateString}`);
    return new Date(0); // Return epoch as fallback
}

export function BlogIndex({ ctx }: RequestInfo) {

    const filteredPosts = allPosts
        .filter((post) => post.published) // Fixed: should be post.published, not !post.published
        .sort((a, b) => compareDesc(parsePublishedDate(a.published), parsePublishedDate(b.published)))

    return (
        <React.Fragment key="blog-index">
            <Section><Heading title="Posts" /></Section>
            <Section>
                {
                    filteredPosts.map((post: any) => (
                        <div key={post._id} className="mb-4 basis-1 last:mb-0">
                            <Card post={post} />
                        </div>
                    ))
                }
            </Section>
        </React.Fragment>
    );
}
