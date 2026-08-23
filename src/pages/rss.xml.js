import { getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import rss from "@astrojs/rss";
import { useTranslations } from "#i18n/helper.ts";


export async function GET(context) {
  const posts = await getCollection("writing");
  const t = useTranslations(context.currentLocale, "head");
  return rss({
    description: t("description"),
    items: posts.map((post) => ({
      description: post.data.description,
      link: getRelativeLocaleUrl(context.currentLocale, `/writing/${post.id}/`),
      pubDate: post.data.pubDate,
      title: post.data.title,
    })),
    site: context.site,
    title: t("title"),
  });
}
