import Link from "next/link";

export const metadata = {
  title: 'Work',
  description: 'Work experiences over the years.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          With five years of experience designing and developing web applications. Proven
          expertise in developing and maintaining high-quality user interfaces. Skilled in creating documented,
          efficient and testable code for complex applications.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Doodl, Ltd.</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Senior Software Engineer, New Zealand, Mar 2023 — present
        </p>
        <p>
          The role involves collaborating with a project team to create and sustain web applications
          using React.js, TypeScript, PHP, Laravel, Shopify, Sanity CMS, and GraphQL. Responsibilities include writing clean,
          well-documented code, optimizing applications for speed and scalability,
          managing APIs, and ensuring responsive design across devices and browsers.
          Collaboration with teams is crucial for an intuitive user interface.
          Additionally, the role includes troubleshooting, participating in code reviews,
          and staying updated on emerging technologies and industry trends.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Rakso Creative Technology, Inc.</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Fullstack Software Engineer, Philippines, Mar 2021 — Mar 2023
        </p>
        <p>
          I was involved in designing and developing a SaaS platform for an Online School Management system.
          Responsibilities include understanding user problems through feedback and analysis, collaborating
          with cross-functional teams to define product strategy and roadmaps, verifying project requirements,
          preparing technical designs, recommending hardware and software requirements,
          and actively participating in planning and work estimations. Additionally,
          the role entails developing components according to specifications and established standards,
          ensuring timely delivery with proper quality.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">HireTrades, Inc.</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, Australia, Mar 2020 — Mar 2021
        </p>
        <p>
          I was involved in designing and developing business logic, maintaining and optimizing APIs for
          HIRETrades using Laravel. The accomplishments include enhancing overall performance, reducing costs,
          and improving stability through advanced caching strategies and database query optimizations.
          The implementation of an automated deployment and continuous integration system was part
          of the responsibilities. Execution of unit tests, integration tests, monitoring and incident resolution were conducted,
          with documentation of unit test defects using the client's recommended tool.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Catanduanes State University</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Computer Programmer, Philippines, Jun 2019 — Mar 2020
        </p>
        <p>
          The individual designed and developed multiple systems for various university departments,
          including the student portal, online admission, alumni tracer, technical support system, and
          human resource management. Responsibilities also included identifying and resolving issues
          within application systems, ensuring successful implementation of system improvements, writing,
          modifying, integrating, and testing software codes, creating applications based on technical specifications,
          and providing ad hoc modules in response to end-user requests.
        </p>
      </div>
    </section>
  );
}
