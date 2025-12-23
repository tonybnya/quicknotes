import { motion } from "motion/react";

const NoteGrid = ({ notes }: { notes: any[] }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div 
      variants={container} initial="hidden" animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6"
    >
      {notes.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
    </motion.div>
  );
};

const NoteCard = ({ note }: any) => (
  <motion.div 
    variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
    whileHover={{ y: -4, borderColor: "rgba(255,45,133,0.5)" }}
    className="p-5 rounded-2xl bg-zinc-900 border border-white/5 transition-colors cursor-pointer"
  >
    <h3 className="text-white font-semibold mb-2">{note.title}</h3>
    <p className="text-zinc-400 text-sm line-clamp-3">{note.content}</p>
    <div className="mt-4 text-[10px] text-zinc-600 uppercase font-bold tracking-tighter">
      {note.collection_data?.name || "Uncategorized"}
    </div>
  </motion.div>
);

export default NoteGrid;