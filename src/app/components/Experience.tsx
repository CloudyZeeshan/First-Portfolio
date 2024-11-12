// src/components/Experience.tsx
export default function Experience() {
    return (
      <section className="bg-[#111827] text-gray-100 p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#267cd1] mb-8 md:mb-10">Professional Experience</h2>
        <div className="space-y-6 md:space-y-10">
          <div className="relative pl-6 md:pl-10 border-l-4 border-[#267cd1]">
            <div className="absolute w-4 h-4 bg-[#267cd1] rounded-full left-[-8px] md:left-[-10px] top-4"></div>
            <div className="text-gray-400 text-sm mb-2">Freelance Projects (2023 - Present)</div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Freelance Web Developer</h3>
              <ul className="space-y-1 md:space-y-2 list-disc list-inside">
                <li>Developed dynamic and responsive websites for various clients.</li>
                <li>Collaborated with clients to understand their vision and create custom websites.</li>
                <li>Worked with HTML, CSS, JavaScript, React, and Next.js to deliver polished projects.</li>
                <li>Enhanced user experience through optimized performance and SEO strategies.</li>
              </ul>
            </div>
          </div>
          <div className="relative pl-6 md:pl-10 border-l-4 border-[#267cd1]">
            <div className="absolute w-4 h-4 bg-[#267cd1] rounded-full left-[-8px] md:left-[-10px] top-4"></div>
            <div className="text-gray-400 text-sm mb-2">Personal Projects (2021 - 2023)</div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Personal Web Development Projects</h3>
              <ul className="space-y-1 md:space-y-2 list-disc list-inside">
                <li>Built and maintained a personal portfolio website using Next.js and React.</li>
                <li>Created a blog platform to share insights on web development topics and tutorials.</li>
                <li>Designed custom UI components and developed projects to enhance technical skills.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }