import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      description: z.string(),
      heroImage: z.optional(image()),
      pubDate: z.coerce.date(),
      title: z.string(),
      // Transform string to Date object
      updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { blog };
