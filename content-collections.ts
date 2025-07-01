import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { z } from "zod";

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const posts = defineCollection({
  name: "posts",
  directory: "addon/blog/content",
  include: "*.md",
  schema: z.object({
    _id: z.string(),
    title: z.string(),
    published: z.string(),
    slug: z.string(),
    description: z.string(),
    categories: z.array(z.string()),
    author: z.string(),
    authorImage: z.string(),
    type: z.string(),
    url: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
