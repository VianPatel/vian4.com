import remarkGFM from 'remark-gfm';
import remarkGEMOJI from 'remark-gemoji';
import rehypeRAW from 'rehype-raw';
import Markdown from 'react-markdown';


export default function MarkdownBlock({ markdown }) {
  return (
    
    <article class="prose dark:prose-invert">
      <Markdown remarkPlugins={[remarkGFM, remarkGEMOJI]} rehypePlugins={[rehypeRAW]}>{markdown}</Markdown>
    </article>
  );
}

