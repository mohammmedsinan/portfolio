import rss from '@astrojs/rss';
import { getPublishedPosts } from '../utils/blog';
import { SITE } from '../data/site';

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${SITE.name} · Blog`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
