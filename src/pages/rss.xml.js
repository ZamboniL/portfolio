import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";


export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    description: SITE_DESCRIPTION,
    items: posts.map((post) => {
      const item = Object.assign(post.data, { link: `/blog/${post.id}/` });
      return item;
    }),
    site: context.site,
    title: SITE_TITLE,
  });
}
