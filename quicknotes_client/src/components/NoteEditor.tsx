import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const NoteEditor = ({ initialContent }: { initialContent?: string }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent || '<p>Start writing your masterpiece...</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-invert focus:outline-none max-w-none text-white min-h-[500px] p-8',
      },
    },
  });

  return (
    <div className="flex-1 bg-black border-l border-white/5">
      {/* Editor Toolbar */}
      <div className="border-b border-white/5 p-4 flex gap-4">
         <button onClick={() => editor?.chain().focus().toggleBold().run()} className="text-zinc-400 hover:text-white">Bold</button>
         <button onClick={() => editor?.chain().focus().toggleBulletList().run()} className="text-zinc-400 hover:text-white">List</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default NoteEditor;