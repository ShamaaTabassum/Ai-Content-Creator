export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depend on your blog information that you provide',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: `Give me 5-6 blog topic ideas in bullet points only based on given niche and outline and give me result in Rich text editor format but the main heading should be like this "given niche Blog Topic Ideas"`,
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title depend on your blog information',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9079/9079294.png',
        aiPrompt: 'Generate Blog Content based on topic and outline and give me result in Rich text editor format',
        slug: 'blog-content-generation',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title depend on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3959/3959542.png',
        aiPrompt: 'Generate top 5 blog topic ideas in bullet wise only based on given niche and outline and give me result in Rich text editor format',
        slug: 'blog-topic-idea',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title depend on your blog information',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/5312/5312098.png',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas in bullet wise only based on given youtube video topic keywords and youtube description outline and give me result in Rich text editor format',
        slug: 'youtube-seo-title',
        form: [
            {
                label: 'Enter your youtube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter youtube description outline here',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title depend on your blog information',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/15302/15302398.png',
        aiPrompt: 'Generate youtube description with emoji under 4-5 lines based on given blog topic/title and youtube outline and give me result in Rich text editor format',
        slug: 'youtube-description',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter youtube outline here',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title depend on your blog information',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884883.png',
        aiPrompt: 'Generate 10 youtube tags in bullet point based on given youtube title and outline and give me result in Rich text editor format',
        slug: 'youtube-tag',
        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter youtube video outline here',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Rewrite Article',
        desc: 'Use this toolto rewrite existing Article or Blog Post depend on your blog information',
        category: 'Rewriting Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/1864/1864984.png',
        aiPrompt: 'Rewrite given article without any Plagiarism and give me result in Rich text editor format',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Provide your Article/Blogpost',
                field: 'textarea',
                name: 'article',
                required: true
            },
        ]
    },
    {
        name: 'Text Imrpover',
        desc: 'This handy tool refines your writing, eliminating errors in grammar, spelling, and punctuation.',
        category: 'Writing Assistant',
        icon: 'https://cdn-icons-png.flaticon.com/128/4021/4021726.png',
        aiPrompt: 'Take this text and enhance its clarity, tone, and readability. Correct any grammatical or spelling errors, restructure sentences for better flow, and suggest more impactful vocabulary. Ensure the final version is polished, professional, and engaging while maintaining the original message.',
        slug: 'text-improver',
        form: [
            {
                label: 'Enter text that you want to rewrite or improve',
                field: 'textarea',
                name: 'textToImprove',
                required: true
            },
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'This tool enhances your writing by adding relevant emojis, making your messages more engaging and expressive. Perfect for social media, marketing, or casual communication!',
        category: 'Writing Assistant',
        icon: 'https://cdn-icons-png.flaticon.com/128/1665/1665944.png',
        aiPrompt: 'Enhance this text by adding relevant emojis that match the tone and content. Ensure the emojis make the message more engaging and expressive without overwhelming the original text.',
        slug: 'add-emoji-to-text',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            },
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'It helps you create stunning and engaging Instagram posts quickly. It offers customizable templates, content ideas, captions, and hashtags, making it easy to craft professional-quality posts that stand out.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/5692/5692184.png',
        aiPrompt: 'Generate 3 Instagram posts based on the given keywords. Ensure each post is visually appealing and includes relevant captions and hashtags.',
        slug: 'instagram-post-generator',
        form: [
            {
                label: 'Enter keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
]