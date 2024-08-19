// 유튜버 예제 
//링크 
// https://www.youtube.com/watch?v=dmikdnfpCw0&t=317s  15분

import type { Metadata, ResolvingMetadata } from 'next'
import { describe } from 'node:test'
import { title } from 'process'
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata( { params }: { params: { slug: string } }){
    try {
        const response = await getAllArticleBySlug(params?.slug)

        if (response?.length ===  0) {
            return {
                title: "Not Found",
                description: "the page you are looking for does not exist"
            }
        }

        return {
            openGraph: {
                title: response?.[0]?.title,
                describe: response?.[0]?.subtitle,
                images: [response?.[0]?.image],
            }
        }
    } catch (error) {
        console.error(error)
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist"
        }
    }
}
export async function generateStaticParams() {
    try {
        const response = await fetch(`https:www.heytorontofoodie.com/api/articles`);

        if (!response.ok) {
            throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }
        const result = await response.json()
    } catch (error) {
        console.error('Error fetching articles:', error)
        return [];
    }
    
}
 
export default function Page({ params, searchParams }: Props) {}