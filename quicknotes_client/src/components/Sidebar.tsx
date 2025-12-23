import { Folder, StickyNote, Plus } from "lucide-react";

const Sidebar = ({ collections }: { collections: any[] }) => (
  <aside className="w-64 border-r border-white/5 h-screen p-4 flex flex-col gap-8 bg-black">
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold px-2">Library</label>
      <SidebarItem icon={<StickyNote size={18}/>} label="All Notes" active />
    </div>

    <div className="space-y-2">
      <div className="flex justify-between items-center px-2">
        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Collections</label>
        <Plus size={14} className="text-zinc-500 cursor-pointer hover:text-white" />
      </div>
      {collections.map(col => (
        <SidebarItem key={col.id} icon={<Folder size={18}/>} label={col.name} />
      ))}
    </div>
  </aside>
);

const SidebarItem = ({ icon, label, active = false }: any) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#FF2D85]/10 text-[#FF2D85]' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}>
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Sidebar;