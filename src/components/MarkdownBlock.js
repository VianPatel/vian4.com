import remarkGFM from 'remark-gfm';
import remarkGEMOJI from 'remark-gemoji';
import rehypeRAW from 'rehype-raw';
import Markdown from 'react-markdown';

import 'github-markdown-css';



export default function MarkdownBlock({ markdown }) {
  return (
    
    <article class="markdown-body" style={{"background-color": "transparent"}}>
      <Markdown remarkPlugins={[remarkGFM, remarkGEMOJI]} rehypePlugins={[rehypeRAW]}>{markdown}</Markdown>
    </article>
  );
}

