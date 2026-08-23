import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { useTranslations } from "#i18n/helper.ts";

export async function GET(context) {
  const posts = await getCollection("blog");
  const t = useTranslations(Astro.currentLocale, "head");
  return rss({
    description: t("description"),
    items: posts.map((post) => {
      const item = Object.assign(post.data, { link: `/blog/${post.id}/` });
      return item;
    }),
    site: context.site,
    title: t("title"),
  });
}
