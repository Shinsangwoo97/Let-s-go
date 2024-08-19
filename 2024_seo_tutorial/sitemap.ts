import { getAllArticles } from "@/utils/actions/articles/get-all-articles";

export default async function sitemap() {
    const baseUrl = "https://heytorontofoodie.com"

    const response = await getAllArticles()

    const blogPosts = response?.map((post: any) => {
        return {
            url: `${baseUrl}/blog/${post?.slug}`,
            lastModified: post?.created_at,
        };
    } );

    return [{
        url: "https://heytorontofoodie.com",
        lastModified: new Date()
    },
    ...blogPosts,  // 여부 에따라 링크가 추가됌! ex)yoursite/sitemap.xml 로 확인가능
];
}