import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://heytorontofoodie.com";

    return {
        rules: {
            userAgent: "*",
            allow:  ["/", "/blog"],
            disallow: []
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
    
}

// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots 참고 링크