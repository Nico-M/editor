import { ChainedCommands, Editor } from "@tiptap/react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";

interface EditorMenuProps {
  editor: Editor;
}

const EditorMenu: FunctionComponent<EditorMenuProps> = ({ editor }) => {
  const excuteCommand = (command: string) => {
    const focus = editor.chain().focus();
    let commandFn: ChainedCommands;
    switch (command) {
      case "bold":
        commandFn = focus.toggleBold();
        break;
      case "italic":
        commandFn = focus.toggleItalic();
        break;
      case "strike":
        commandFn = focus.toggleStrike();
        break;
      case "highlight":
        commandFn = focus.toggleHighlight();
        break;
      case "code":
        commandFn = focus.toggleCode();
        break;
      case "h-1":
        commandFn = focus.toggleHeading({ level: 1 });
        break;
      case "h-2":
        commandFn = focus.toggleHeading({ level: 2 });
        break;
      case "h-3":
        commandFn = focus.toggleHeading({ level: 4 });
        break;
      case "paragraph":
        commandFn = focus.setParagraph();
        break;
      case "unorder":
        commandFn = focus.toggleBulletList();
        break;
      case "order":
        commandFn = focus.toggleOrderedList();
        break;
      case "task":
        commandFn = focus.toggleTaskList();
        break;
      default:
        break;
    }

    commandFn!.run();
  };
  return (
    <EditorHeader>
      <MenuButton
        icon="ri-bold"
        onClick={() => excuteCommand("bold")}
        active={editor.isActive("bold")}
        title="Bold"
      />
      <MenuButton
        icon="ri-italic"
        onClick={() => excuteCommand("italic")}
        active={editor.isActive("italic")}
        title="Italic"
      />
      <MenuButton
        icon="ri-strikethrough"
        onClick={() => excuteCommand("strike")}
        active={editor.isActive("strike")}
        title="Strike"
      />
      <MenuButton
        icon="ri-mark-pen-line"
        onClick={() => excuteCommand("highlight")}
        active={editor.isActive("highlight")}
        title="Highlight"
      />

      <MenuDivder />
      <MenuButton
        icon="ri-h-1"
        onClick={() => excuteCommand("h-1")}
        active={editor.isActive("heading", {
          level: 1,
        })}
        title="Heading 1"
      />
      <MenuButton
        icon="ri-h-2"
        onClick={() => excuteCommand("h-2")}
        active={editor.isActive("heading", {
          level: 2,
        })}
        title="Heading 2"
      />
      <MenuButton
        icon="ri-h-3"
        onClick={() => excuteCommand("h-3")}
        active={editor.isActive("heading", {
          level: 4,
        })}
        title="Heading 3"
      />
      <MenuButton
        icon="ri-paragraph"
        onClick={() => excuteCommand("paragraph")}
        active={editor.isActive("paragraph")}
        title="Paragraph"
      />
      <MenuDivder />
      <MenuButton
        icon="ri-list-unordered"
        onClick={() => excuteCommand("unorder")}
        active={editor.isActive("bulletList")}
        title="Unorder List"
      />
      <MenuButton
        icon="ri-list-ordered"
        onClick={() => excuteCommand("order")}
        active={editor.isActive("orderedList")}
        title="Order List"
      />
      <MenuButton
        icon="ri-list-check-2"
        onClick={() => excuteCommand("task")}
        active={editor.isActive("taskList")}
        title="Task List"
      />
      <MenuDivder />
      {/* <MenuButton icon="ri-code-box-line" />
      <MenuButton icon="ri-double-quotes-l" />
      <MenuButton icon="ri-separator" />
      <MenuDivder />
      <MenuButton icon="ri-text-wrap" />
      <MenuButton icon="ri-format-clear" />
      <MenuDivder />
      <MenuButton icon="ri-arrow-go-back-line" />
      <MenuButton icon="ri-arrow-go-forward-line" /> */}
    </EditorHeader>
  );
};

const EditorHeader = styled.div`
  padding: 4px;
  > button {
    margin-right: 2px;
  }
`;
const MenuDivder = styled.div`
  display: inline-block;
  background-color: #0000001a;
  height: 1.25rem;
  margin-left: 0.5rem;
  margin-right: 0.75rem;
  width: 2px;
`;

export default EditorMenu;
