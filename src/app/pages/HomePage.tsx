import { allPosts } from "content-collections";
import { RequestInfo } from "rwsdk/worker";
import { parseISO, parse, compareDesc, isValid } from "date-fns";
import { PostContent } from "../components/PostContent";
import { PostHeader } from "../components/PostHeader";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { LatestPosts } from "../components/LatestPosts";
import { Hero } from "../components/Hero";

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

export function HomePage({ ctx }: RequestInfo) {
  const recentPosts = allPosts
    .filter((post) => post.published) // Fixed: should be post.published, not !post.published
    .sort((a, b) => compareDesc(parsePublishedDate(a.published), parsePublishedDate(b.published)))
    .slice(0, 3);

  return (
    <>
      <Hero />
      <LatestPosts posts={recentPosts} />
    </>

  );
}
