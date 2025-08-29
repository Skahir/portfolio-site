import { remark } from 'remark';
import html from 'remark-html';

export default function Blog() {
    const fs = require('fs');
    const matter = require('gray-matter');
    const str = fs.readFileSync('../posts/test-blog-post.md', 'utf8');

    return (
        <div>
            {/* {str} */}
        </div>
    );
}