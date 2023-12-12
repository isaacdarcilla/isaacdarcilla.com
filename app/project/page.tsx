import Link from "next/link";

export const metadata = {
  title: 'Projects',
  description: 'Projects handled over the years.',
};
function ArrowIcon() {
  return (
    <svg
      width="11"
      height="11"
      className="mr-1"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const projects = [
  {
    name: "Speak Māori",
    description: "Speak Māori is an online language learning system that delivers accelerated learning of Māori - indigenous Polynesian people of mainland New Zealand. The frontend of our project was crafted with Next.js and Next UI, a combination that significantly expedited the UI development process. Leveraging these frontend tools proved to be a game-changer, enhancing the speed and efficiency of our UI development. On the backend, we employed Laravel and Filament PHP for the admin panel, empowering administrators to seamlessly add new courses or lessons with heightened efficiency. It's worth noting that I undertook the sole responsibility as the developer for this project, and I take pride in the accomplishments and contributions I've made to bring it to fruition.",
    location: "Doodl, Ltd., New Zealand",
    link: "https://test.speakmaori.co.nz/",
    links: [],
  },
  {
    name: "Powered By Volt",
    description: "Volt stands as a cutting-edge online learning platform tailored for producers, performers, and artists. As the sole developer on this project, I orchestrated the integration of Laravel and Next.js, incorporating essential third-party elements such as Stripe, Xero Accounting, OneSignal, MailChimp, SendGrid, TypeForms, and more. The client's insistence on implementing GraphQL in Laravel added a layer of complexity, albeit a bit of an overkill. A standout feature during the development of this pivotal project was the Offline mode. Leveraging the Progressive Web App (PWA) architecture facilitated the seamless implementation of this functionality. Notably, I utilized IndexDB to efficiently store video blobs directly in the user's browser. This innovative approach added an extra layer of interactivity and user experience to the project, making it an exceptionally enjoyable endeavor.",
    location: "Doodl, Ltd., New Zealand",
    link: "https://poweredbyvolt.com/",
    links: [],
  },
  {
    name: "Waiata Māori",
    description: "Learning platform focused on Māori Language Songs, where individuals can delve deeper into the rich world of Māori language songs, karakia, himene, haka, and mōteatea. This project encompasses a straightforward landing page dedicated to showcasing language songs in New Zealand. Developed with Next.js and styled with Tailwind, the simplicity of the design harmonizes with the project's purpose. The form functionality seamlessly directs user input to a private Google Sheet, effectively utilizing it as a discreet database to store user details. This streamlined approach ensures a user-friendly experience while efficiently managing and organizing the collected information.",
    location: "Doodl, Ltd., New Zealand",
    link: "https://www.waiatamaori.nz/",
    links: [],
  },
  {
    name: "SchoolAide",
    description: "SchoolAide stands as a dedicated Software as a Service platform meticulously designed to meet the unique requirements of both public and private schools in the Philippines. It serves as a catalyst, streamlining administrative tasks and elevating the overall efficiency of educational institutions. In my capacity as the Lead Developer for this project, I spearheaded a team of two members, overseeing the project from its initial planning stages to deployment. Currently, SchoolAide is actively utilized by 16 schools across the Philippines, benefiting over 20,000 faculties and students. The platform has successfully become an integral tool in the educational landscape, contributing to the seamless operation of schools and enhancing the academic experience for both educators and learners. Below are the links to all the schools that uses this project.",
    location: "Rakso Creative Technology, Inc., Philippines",
    link: "https://app.schoolaide.xyz/",
    links: [
      {
        "domain": "https://schoolaide.pcsian.edu.ph",
        "sub_domain": "Pateros Catholic School"
      },
      {
        "domain": "https://schoolaide.mcsmanila.edu.ph",
        "sub_domain": "Malate Catholic School"
      },
      {
        "domain": "https://schoolaide.scpspasay.edu.ph",
        "sub_domain": "Sta. Clara Parish School"
      },
      {
        "domain": "https://schoolaide-ecs.scpspasay.edu.ph",
        "sub_domain": "Ermita Catholic School"
      },
      {
        "domain": "https://schoolaide.goodshepherdcathedralschool.edu.ph",
        "sub_domain": "Good Shephard Cathedral School"
      },
      {
        "domain": "https://schoolaide.bscs.edu.ph",
        "sub_domain": "Blessed Sacrament Catholic School"
      },
      {
        "domain": "https://schoolaide.csbn.edu.ph",
        "sub_domain": "Colegio de San Bartolome de Novaliches"
      },
      {
        "domain": "https://schoolaide.inangbuhaycatholicschool.edu.ph",
        "sub_domain": "Inang Buhay Catholic School"
      },
      {
        "domain": "https://schoolaide.ollcs.edu.ph",
        "sub_domain": "Our Lady of Lourdes Catholic School"
      },
      {
        "domain": "https://schoolaide.silcs.edu.ph",
        "sub_domain": "San Isidro Labrador Catholic School"
      },
      {
        "domain": "https://schoolaide.sfxcs.edu.ph",
        "sub_domain": "St. Francis Xavier Catholic School"
      },
      {
        "domain": "https://schoolaide.sfsa.edu.ph",
        "sub_domain": "St. Francis de Sales Academy, Inc."
      },
      {
        "domain": "https://schoolaide.rcs.edu.ph",
        "sub_domain": "Resurrection Catholic School"
      },
      {
        "domain": "https://schoolaide.spcpasig.edu.ph",
        "sub_domain": "St. Paul Pasig"
      },
      {
        "domain": "https://stcs.schoolaide.xyz",
        "sub_domain": "St. Therese Catholic School"
      },
      {
        "domain": "https://sjps.schoolaide.xyz",
        "sub_domain": "St. Jude Parish School"
      }
    ]
  },
  {
    name: "Alagang Silka",
    description: "Pioneered the creation of a comprehensive scholarship management system tailored for Cosmetique Asia Corporation, revolutionizing the application process for prospective student candidates. Undertaking the role of the sole developer on this initiative, I meticulously designed and executed the entire project. The core functionality revolves around a user-friendly form that seamlessly collects and processes detailed information and documents from students. This system not only simplifies the application procedure but also enhances the overall efficiency of the scholarship management process for both the organization and the applicants. It has been instrumental in optimizing the workflow and ensuring a smooth and transparent experience for all stakeholders involved.",
    location: "Rakso Creative Technology, Inc., Philippines",
    link: "https://www.palabastayo.com/2021/09/06/silka-alaga-scholarship-program-in-search-for-20-scholars/",
    links: [],
  },
  {
    name: "Aimed.jp",
    description: "Aimed.jp stands as a leading online e-commerce platform committed to offering a diverse range of vital medical items and medicines in Japan. As part of this ambitious project, I collaborated closely with a sizable and dynamic team, contributing my expertise to various aspects of its development and functionality. Our collective efforts were focused on creating a seamless and user-friendly experience for individuals seeking essential medical supplies. From product selection to checkout, the platform is meticulously designed to meet the unique needs of the Japanese market. The collaborative spirit within the team played a crucial role in shaping Aimed.jp into a premier destination for reliable and convenient access to crucial healthcare products in Japan.",
    location: "Vananaz Systems, Inc., Japan",
    link: "https://aimed.jp/",
    links: [],
  },
  {
    name: "HIRETrades",
    description: "HIRETrades marks a transformative shift in the job market landscape, serving as a vibrant online platform that seamlessly connects job seekers with a myriad of part-time opportunities. In my role, I played a pivotal part in shaping the backend infrastructure, focusing on designing the database structure and implementing robust business logic within the API. My responsibilities involved architecting a scalable and efficient database system that underpins the platform's functionality. Additionally, I contributed to the formulation of intricate business logic embedded in the API, ensuring a seamless flow of information and operations. This behind-the-scenes work played a crucial role in providing users with a reliable and intuitive experience, solidifying HIRETrades as a pioneering force in the dynamic realm of online job platforms.",
    location: "Hire Trades, Inc., Australia",
    link: "https://www.hiretrades.com.au/",
    links: [],
  },
  {
    name: "Online Addmission Form",
    description: "The official online application and admission system represent a transformative solution crafted to streamline the intricate process for incoming college students. This comprehensive system goes beyond the traditional application methods, incorporating an array of features tailored to enhance user experience and operational efficiency. Central to its functionality is a meticulously designed form catering to the unique needs of students. This form encompasses detailed sections to gather essential information, ensuring a thorough understanding of each applicant. Beyond the surface, the system incorporates intuitive navigation, real-time status updates, and secure document submission protocols, creating a seamless and user-friendly experience for both applicants and administrators.",
    location: "Catanduanes State University, Philippines",
    link: "https://oas.catsu.edu.ph/",
    links: [],
  },
]

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my project</h1>
      <div>
        {projects.map(item => (
          <>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-xl mb-1 tracking-tighter">{item.name}</h2>
              <a className="flex items-center hover:text-neutral-600 dark:hover:text-neutral-100 transition-all" href={item.link} target="_blank">
                <ArrowIcon/>
                <p className="ml-1">project link</p>
              </a>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm -mt-1">
              {item.location}
            </p>
            <p className="mt-4">
              {item.description}
            </p>

            <ul className="flex flex-col mt-4 mx-3 font-xs text-neutral-600 dark:text-neutral-300">
              {item.links.length > 0 && item.links.map(l => (
                <li>
                  <a className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all" rel="noopener noreferrer" target="_blank" href={l.domain}>
                    <ArrowIcon/>
                    <p className="ml-1 font-xs">{l.sub_domain}</p>
                  </a>
                </li>
                ))}
            </ul>
          </>
        ))}
      </div>
    </section>
  );
}
