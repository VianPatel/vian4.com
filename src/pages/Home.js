import PageContainer from "../components/PageContainer";
import TextContainer from "../components/TextContainer";

import MarkdownBlock from "../components/MarkdownBlock";

import { pages } from "../generated/Config";

export default function Home() {
  return (
    <PageContainer>
      <h2 class="pb-4 text-center text-3xl">Home</h2>
      <TextContainer>
        <MarkdownBlock markdown={pages.home}></MarkdownBlock>
      </TextContainer>
    </PageContainer>
  );
}