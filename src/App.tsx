import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tiptap from "./Tiptap";
import EditorMenu from "./EditorMenu";
import Box from "./components/Box";
import styled, { keyframes } from "styled-components";
import SVG from "./components/SVG";

function App() {
  return (
    <div className="App">
      <BaseIntro height={500} textAlign="center">
        <SVG
          icon="ri-booklet-fill"
          className="fill-white inline-block mr-8"
        ></SVG>
        <AppTitle>Your Customize Rich Editor</AppTitle>
      </BaseIntro>
      <ContentBox
        width={750}
        m="auto"
        mt={-200}
        p={1}
        backgroundColor="#fff"
        borderRadius={2}
      >
        <Tiptap content={EXAMPLE_STR}></Tiptap>
      </ContentBox>
      <AppFooter>
        <span>
          It’s customizable, comes with a ton of extensions, is open source and
          has an extensive documentation.
        </span>
      </AppFooter>
    </div>
  );
}

const BaseIntro = styled(Box)`
  background-color: #253038;
  line-height: 300px;
  font-size: 40px;
  color: #fff;
`;

const ContentBox = styled(Box)`
  box-shadow: 0px 0px 6px 3px #253038;
`;

const AppTitle = styled.span`
  font-family: "Unica One", cursive;
  user-select: none;
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 950px }
`;
const blinkCaret = keyframes`from, to { border-color: transparent }
50% { border-color: #e5e5e5; }`;

const AppFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  > span {
    margin: 0 auto;
    font-family: "Unica One", cursive;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid #e5e5e5; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    letter-spacing: 0.15em; /* Adjust as needed */
    text-shadow: 0px 13px 0px black;
    animation: ${typing} 3.5s steps(40, end),
      ${blinkCaret} 0.75s step-end infinite;
  }
`;

const EXAMPLE_STR = `    <h2>
Hi there,
</h2>
<p>
this is a basic <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
<li>
  That’s a bullet list with one …
</li>
<li>
  … or two list items.
</li>
</ul>
<p>
Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
Wow, that’s amazing. Good work, boy! 👏
<br />
— Mom
</blockquote>`;

export default App;
