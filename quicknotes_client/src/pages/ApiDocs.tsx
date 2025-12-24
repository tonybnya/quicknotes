// import { motion } from "motion/react";

// const API_DATA = [
//   {
//     group: "Authentication",
//     endpoints: [
//       {
//         method: "POST",
//         path: "/api/auth/register",
//         description: "Register a new user and receive JWT tokens.",
//         request: `POST /api/auth/register HTTP/1.1\nHost: api.quicknotes.com\nContent-Type: application/json\n\n{ "username": "tony", "email": "tony@example.com", "password": "securepassword" }`,
//         response: `HTTP/1.1 201 CREATED\nContent-Type: application/json\n\n{\n  "user": { "id": 1, "username": "tony", "email": "tony@example.com" },\n  "refresh": "eyJhbG...",\n  "access": "eyJhbG..."\n}`
//       },
//       {
//         method: "POST",
//         path: "/api/auth/login/",
//         description: "Obtain access and refresh tokens.",
//         request: `POST /api/auth/login/ HTTP/1.1\nHost: api.quicknotes.com\nContent-Type: application/json\n\n{ "username": "tony", "password": "securepassword" }`,
//         response: `HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "refresh": "eyJhbG...",\n  "access": "eyJhbG..."\n}`
//       }
//     ]
//   },
//   {
//     group: "Collections",
//     endpoints: [
//       {
//         method: "GET",
//         path: "/api/collections/",
//         description: "List all collections belonging to the authenticated user.",
//         request: `GET /api/collections/ HTTP/1.1\nHost: api.quicknotes.com\nAuthorization: Bearer <token>`,
//         response: `HTTP/1.1 200 OK\n{\n  "count": 1,\n  "next": null,\n  "prev": null,\n  "data": [\n    { "id": 1, "name": "Work", "user": 1 }\n  ]\n}`
//       },
//       {
//         method: "POST",
//         path: "/api/collections/",
//         description: "Create a new folder for notes.",
//         request: `POST /api/collections/ HTTP/1.1\nHost: api.quicknotes.com\nAuthorization: Bearer <token>\n\n{ "name": "Personal" }`,
//         response: `HTTP/1.1 201 CREATED\n{\n  "id": 2, "name": "Personal", "user": 1\n}`
//       }
//     ]
//   },
//   {
//     group: "Notes",
//     endpoints: [
//       {
//         method: "GET",
//         path: "/api/notes/?collection_id={id}",
//         description: "List notes, optionally filtered by collection ID.",
//         request: `GET /api/notes/?collection_id=1 HTTP/1.1\nHost: api.quicknotes.com\nAuthorization: Bearer <token>`,
//         response: `HTTP/1.1 200 OK\n{\n  "data": [\n    {\n      "id": 10,\n      "title": "Project Alpha",\n      "content": "Meeting notes...",\n      "collection": 1,\n      "collection_data": { "name": "Work" }\n    }\n  ]\n}`
//       }
//     ]
//   }
// ];

// const CodeBlock = ({ title, code, color }: { title: string; code: string; color: string }) => (
//   <div className="mb-4">
//     <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">{title}</div>
//     <pre className="bg-zinc-900/50 p-4 rounded-xl border border-white/5 text-xs text-zinc-300 font-mono overflow-x-auto leading-relaxed">
//       {code.split('\n').map((line, i) => (
//         <div key={i}>
//           <span className="text-zinc-600 mr-4 select-none inline-block w-4">{i + 1}</span>
//           <span className={line.startsWith('POST') || line.startsWith('GET') || line.startsWith('HTTP') ? `text-${color}` : ''}>
//             {line}
//           </span>
//         </div>
//       ))}
//     </pre>
//   </div>
// );

// const ApiDocs = () => {
//   return (
//     <div className="min-h-screen bg-black text-white py-20 px-6 sm:px-12">
//       <div className="max-w-7xl mx-auto">
//         <header className="mb-20">
//           <h1 className="text-5xl font-bold tracking-tighter mb-4 uppercase">
//             API <span className="text-[#FF2D85]">Documentation</span>
//           </h1>
//           <p className="text-zinc-400 max-w-2xl">
//             Welcome to the Quicknotes API. Our API is built on REST principles and uses JWT for authentication. 
//             Base URL: <code className="text-[#A855F7] bg-[#A855F7]/10 px-2 py-1 rounded">http://127.0.0.1:8000/api</code>
//           </p>
//         </header>

//         {API_DATA.map((section, sIdx) => (
//           <div key={sIdx} className="mb-24">
//             <h2 className="text-2xl font-bold mb-10 border-b border-white/10 pb-4 text-[#A855F7]">
//               {section.group}
//             </h2>
            
//             {section.endpoints.map((ep, eIdx) => (
//               <div key={eIdx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
//                 {/* Text Explanation */}
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <span className={`px-3 py-1 rounded-md text-[10px] font-bold ${
//                       ep.method === 'POST' ? 'bg-[#FF2D85]/20 text-[#FF2D85]' : 'bg-blue-500/20 text-blue-400'
//                     }`}>
//                       {ep.method}
//                     </span>
//                     <code className="text-lg font-mono text-zinc-200">{ep.path}</code>
//                   </div>
//                   <p className="text-zinc-400 leading-relaxed">{ep.description}</p>
//                 </div>

//                 {/* Code column */}
//                 <div className="bg-zinc-950/50 p-6 rounded-2xl border border-white/5 shadow-2xl">
//                   <CodeBlock title="Request" code={ep.request} color="blue-400" />
//                   <CodeBlock title="Response" code={ep.response} color="[#FF2D85]" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ApiDocs;

import { motion } from "motion/react";

const API_DATA = [
  {
    group: "Pagination & Global Headers",
    endpoints: [
      {
        method: "GLOBAL",
        path: "Pagination Wrapper",
        description: "All list endpoints return data wrapped in this pagination structure. Use 'limit' and 'offset' or 'page' query parameters.",
        request: `GET /api/notes/?page=2 HTTP/1.1\nHost: api.quicknotes.com\nAuthorization: Bearer <token>`,
        response: `HTTP/1.1 200 OK\n{\n  "count": 42,\n  "next": "http://api.quicknotes.com/api/notes/?page=3",\n  "prev": "http://api.quicknotes.com/api/notes/?page=1",\n  "data": [ ... ]\n}`
      }
    ]
  },
  {
    group: "Authentication",
    endpoints: [
      {
        method: "POST",
        path: "/api/auth/register",
        description: "Register a new user and receive JWT tokens.",
        request: `POST /api/auth/register HTTP/1.1\nHost: api.quicknotes.com\nContent-Type: application/json\n\n{ "username": "tony", "email": "tony@example.com", "password": "securepassword" }`,
        response: `HTTP/1.1 201 CREATED\n{\n  "user": { "id": 1, "username": "tony", "email": "tony@example.com" },\n  "refresh": "eyJhbG...",\n  "access": "eyJhbG..."\n}`
      },
      {
        method: "POST",
        path: "/api/auth/login/",
        description: "Obtain access and refresh tokens.",
        request: `POST /api/auth/login/ HTTP/1.1\nHost: api.quicknotes.com\nContent-Type: application/json\n\n{ "username": "tony", "password": "securepassword" }`,
        response: `HTTP/1.1 200 OK\n{\n  "refresh": "eyJhbG...",\n  "access": "eyJhbG..."\n}`
      }
    ]
  },
  {
    group: "Collections",
    endpoints: [
      {
        method: "GET",
        path: "/api/collections/",
        description: "List all collections for the user (Paginated).",
        request: `GET /api/collections/ HTTP/1.1\nHost: api.quicknotes.com\nAuthorization: Bearer <token>`,
        response: `HTTP/1.1 200 OK\n{\n  "count": 5,\n  "next": null,\n  "prev": null,\n  "data": [\n    { "id": 1, "name": "Work", "user": 1 }\n  ]\n}`
      },
      {
        method: "GET",
        path: "/api/collections/{id}/notes/",
        description: "Retrieve a specific collection along with its nested notes (Prefetched).",
        request: `GET /api/collections/1/notes/ HTTP/1.1\nHost: api.quicknotes.com\nAuthorization: Bearer <token>`,
        response: `HTTP/1.1 200 OK\n{\n  "data": {\n    "id": 1,\n    "name": "Work",\n    "user": 1,\n    "notes": [\n      { "id": 5, "title": "Todo", "content": "..." }\n    ]\n  }\n}`
      }
    ]
  },
  {
    group: "Notes",
    endpoints: [
      {
        method: "GET",
        path: "/api/notes/",
        description: "List all notes. Supports 'collection_id' filter and pagination.",
        request: `GET /api/notes/?collection_id=1&page=1 HTTP/1.1\nHost: api.quicknotes.com\nAuthorization: Bearer <token>`,
        response: `HTTP/1.1 200 OK\n{\n  "count": 12,\n  "next": "http://.../api/notes/?page=2",\n  "prev": null,\n  "data": [\n    {\n      "id": 10,\n      "title": "Project Alpha",\n      "content": "...",\n      "collection": 1,\n      "collection_data": { "id": 1, "name": "Work" }\n    }\n  ]\n}`
      },
      {
        method: "PATCH",
        path: "/api/notes/{id}/",
        description: "Update a note partially. Note must belong to the authenticated user.",
        request: `PATCH /api/notes/10/ HTTP/1.1\nContent-Type: application/json\n\n{ "title": "Updated Title" }`,
        response: `HTTP/1.1 200 OK\n{\n  "id": 10,\n  "title": "Updated Title",\n  "content": "...",\n  "user": 1\n}`
      }
    ]
  }
];

const CodeBlock = ({ title, code }: { title: string; code: string; colorClass: string }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{title}</span>
      <button 
        onClick={() => navigator.clipboard.writeText(code)}
        className="text-[10px] text-zinc-600 hover:text-[#FF2D85] transition-colors uppercase font-bold"
      >
        Copy
      </button>
    </div>
    <pre className="bg-zinc-900/80 p-5 rounded-2xl border border-white/5 text-[13px] text-zinc-300 font-mono overflow-x-auto leading-relaxed shadow-inner">
      {code}
    </pre>
  </div>
);

const ApiDocs = () => {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 selection:bg-[#FF2D85]/30">
      <div className="max-w-6xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-[#FF2D85]/30 text-[#FF2D85] text-[10px] font-bold uppercase tracking-widest mb-6">
            v1.0.0
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
            REST <span className="text-[#FF2D85]">API</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Our API is designed to be predictable and follows REST conventions. 
            All responses are returned in JSON format, including paginated lists.
          </p>
        </motion.header>

        {API_DATA.map((section, sIdx) => (
          <section key={sIdx} className="mb-32">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#A855F7] font-black mb-12 flex items-center gap-4">
              <span className="h-px w-8 bg-[#A855F7]/30"></span>
              {section.group}
            </h2>
            
            {section.endpoints.map((ep, eIdx) => (
              <div key={eIdx} className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-16 mb-24 last:mb-0">
                <div className="sticky top-24 self-start">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter ${
                      ep.method === 'POST' ? 'bg-[#FF2D85] text-white' : 
                      ep.method === 'GET' ? 'bg-blue-600 text-white' : 
                      ep.method === 'PATCH' ? 'bg-amber-500 text-white' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {ep.method}
                    </span>
                    <span className="font-mono text-zinc-200 text-sm font-bold tracking-tight">{ep.path}</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-7 mb-8">
                    {ep.description}
                  </p>
                  
                  {/* Parameter Table Placeholder if needed */}
                  {ep.path.includes('?') && (
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] font-bold text-zinc-500 uppercase mb-2">Query Parameters</div>
                      <div className="flex justify-between text-xs border-b border-white/5 py-2">
                        <span className="text-zinc-300 font-mono">page</span>
                        <span className="text-zinc-500 italic">integer</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF2D85]/5 to-[#A855F7]/5 rounded-[2rem] -z-10 blur-xl"></div>
                  <CodeBlock title="Request Example" code={ep.request} colorClass="text-blue-400" />
                  <CodeBlock title="Response Example" code={ep.response} colorClass="text-[#FF2D85]" />
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

export default ApiDocs;