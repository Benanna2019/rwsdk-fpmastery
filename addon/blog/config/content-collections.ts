import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const posts = defineCollection({
  name: "posts",
  directory: "addon/blog/content/posts",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    published: z.string(),
    updated: z.string(),
    categories: z.array(z.string()),
    coverImage: z.string(),
    coverWidth: z.number(),
    coverHeight: z.number(),
    excerpt: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
    };
  },
});

const cybertronWorkshop = defineCollection({
  name: "cybertron-workshop",
  directory: "addon/blog/content/workshops/cybertron",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    workshop: z.string(),
    contentType: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    categories: z.array(z.string()),
    coverImage: z.string(),
    coverWidth: z.number(),
    coverHeight: z.number(),
    excerpt: z.string(),
    stackBlitzUrl: z.string().optional(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
      type: "workshop",
      tag: "cybertron",
    };
  },
});

const lessons = defineCollection({
  name: "lessons",
  directory: "addon/blog/content/lessons",
  include: "*.mdx",
  schema: z.object({}).passthrough(),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

const courseBlog = defineCollection({
  name: "course-blog",
  directory: "addon/blog/content/course-blog",
  include: "*.mdx",
  schema: z.object({}).passthrough(),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts, cybertronWorkshop, lessons, courseBlog],
});
