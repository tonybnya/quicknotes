import Sidebar from "@/components/Sidebar";
import NoteGrid from "@/components/NoteGrid";
import NoteEditor from "@/components/NoteEditor";

const Quicknotes = () => {
  // In a real scenario, you'd fetch these from your Django API
  const mockCollections = [{ id: 1, name: "Work" }, { id: 2, name: "Personal" }];
  const mockNotes = [{ id: 1, title: "Meeting Notes", content: "Discuss project..." }];

  return (
    <div className="flex h-[calc(100-navbarHeight)] bg-black overflow-hidden">
      <Sidebar collections={mockCollections} />
      
      {/* Scrollable List of Notes */}
      <div className="flex-1 overflow-y-auto border-r border-white/5">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white uppercase tracking-tighter">All Notes</h2>
            <div className="text-xs text-zinc-500">{mockNotes.length} Notes</div>
        </div>
        <NoteGrid notes={mockNotes} />
      </div>

      {/* Editor Area */}
      <div className="flex-[1.5] hidden lg:block">
        <NoteEditor />
      </div>
    </div>
  );
};

export default Quicknotes;