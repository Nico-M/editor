import { FunctionComponent } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styled from "styled-components";
import EditorMenu from "./EditorMenu";

interface TiptapProps {
  height?: number;
  content?: string
}

const Tiptap: FunctionComponent<TiptapProps> = ({ height = 300,content="" }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-lg m-5 focus:outline-none",
      },
    },
    content: content,
  });

  return (
    <EditorBox className="editor">
      {editor && <EditorMenu editor={editor}></EditorMenu>}
      <StyledEditorContent editor={editor} height={height} />
    </EditorBox>
  );
};

const EditorBox = styled.div`
  border: 3px solid #0d0d0d;
  color: #0d0d0d;
  display: flex;
  flex-direction: column;
`;
const StyledEditorContent = styled(EditorContent)`
  border-top: 3px solid #0d0d0d;
  overflow-x: hidden;
  overflow-y: auto;
  .ProseMirror {
    height: ${(props: any) => props.height}px;
  }
`;

export default Tiptap;
