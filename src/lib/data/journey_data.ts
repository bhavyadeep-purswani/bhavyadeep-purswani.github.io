import { journeyType } from "$lib/enum/journey_type";

export const journeySteps = [
    {
        title: 'BNM Institute of Technology',
        type: journeyType.education,
        image: 'icons/bnmit.png',
        description: `Although I had been coding since my school days, my real journey into the world of computer science began during my Bachelor of Engineering in Computer Science & Engineering at BNMIT. <br /><br />This phase laid a solid foundation in algorithms, programming, and software development. It was here that I honed my skills in problem-solving, built innovative projects, and developed a strong passion for leveraging technology to create impactful solutions. <br /><br />This academic experience not only strengthened my technical expertise but also shaped my ability to learn and adapt in the ever-evolving tech landscape.`,
        visible: false,
        bgColor: 'bg-[#1E1E1E]',
        timePeriod: "JUN 2016 - JUN 2020",
        subtitle: "B.E. Computer Science & Engineering",
        projects: new Map<string, string>([
            ["Animatronic Hand", "The Animatronic Hand was a project designed to assist the disabled by replicating hand motions remotely. Built by a team of two, it featured a wireless, internet-controlled robotic hand operated through a custom-designed glove that mimicked real hand movements. The hand was mounted on a rover, enabling it to navigate to different locations, adding mobility and flexibility to its use. This innovative project aimed to blend robotics and accessibility, pushing the boundaries of assistive technology."],
            ["Interactive System For ML Implementation", "The Interactive System for ML Implementation was designed to simplify the process of running machine learning models on datasets. The platform automated all the necessary boilerplate code, including dataset reading and model execution, allowing users to focus solely on their data and models. With an intuitive interface, it made running a machine learning model as easy as uploading a dataset, selecting a model, and clicking 'run.' This project aimed to democratize access to machine learning, making it accessible to both beginners and experienced users alike."],
        ]),
    },
    {
        title: 'Nuclei',
        type: journeyType.job,
        image: 'icons/nuclei.png',
        description: `My journey at Nuclei marked the starting point of my professional career, spanning an enriching 4.5 years. <br /><br />Joining as a fresh graduate, I experienced exponential growth both personally and professionally. Within two years, I was promoted to <i>SDE-II</i>, and by the third year, I was <i>leading a team of my own</i>, managing projects and mentoring peers. <br /><br />Nuclei provided the perfect environment for me to sharpen my technical skills, take on new challenges, and embrace leadership responsibilities. This transformative experience laid the groundwork for my career, instilling confidence and adaptability that continue to drive me forward.`,
        visible: false,
        bgColor: 'bg-[#36454F]',
        timePeriod: "JAN 2020 - JUN 2024",
        subtitle: "Software Develpoment Engineer - II",
        projects: new Map<string, string>([
            ["SaaS Marketplace", "A plug-and-play platform for banks, that can be customised according to their brand, using which they can increase their offerings for business customers by providing them offers on SaaS. Currently live with 10+ banks (like <a target=\"_blank\" href=\"https://bizdeals.gonuclei.com/\">HDFC</a>, <a target=\"_blank\" href=\"https://bizbank.gonuclei.com/\">ICICI</a>, <a target=\"_blank\" href=\"https://kotakbank.gonuclei.com/\">Kotak</a> etc.). <br/><b>Role:</b> Lead a team of 4 to build the frontend of the platform. Built it in a way that any new bank can be onboarded (customisation & deployment) within a day. <br/><b>Tech used:</b> Flutter Web for development, Azure Storage with CDN for deployment."],
            ["ARISE", "A localised (English & Arabic) mobile application built for ADCB Bank (UAE), as an offering to their retail customers, providing a platform to manage all subscriptions (like Netflix, etc.) and get bank offers on them. <br/><b>Role:</b> Part of a 3 member team to build the mobile application. <br/><b>Tech Used:</b> Flutter."],
            ["Firefly", "A mobile application built for Rakbank (UAE), as an offering to their premium retail customers, providing them a platform to avail all the offers and privileges provided by the bank. <br/><b>Role:</b> Part of a 3 member team to build the application. <br/><b>Tech Used:</b> Flutter."],
        ]),
    },
    {
        title: 'ByChoice',
        type: journeyType.startup,
        image: 'icons/bychoice.png',
        description: `At ByChoice, we embarked on a mission to redefine community building in modern cities. <br /><br />ByChoice was born out of a vision to foster stronger, interest-led local communities. We identified a gap in the current events ecosystem, which felt under-served and overly transactional, despite the crucial role social events play in bringing people together. With this in mind, we set out to build a platform that went beyond being just a marketplace – a space designed to encourage meaningful connections and experiences. <br /><br />Leading the technical direction of ByChoice, I was able to channel my passion for innovation, creating solutions that bridged the gap between technology and human connection.`,
        visible: false,
        bgColor: 'bg-[#183A37]',
        timePeriod: "JUL 2024 - DEC 2024",
        subtitle: "Co-founder & CTO",
        projects: new Map<string, string>([
            ["End-to-End platform for listing and booking events", "<b>Single handedly built the entire frontend</b>, consisting of two portals: User and Partner. <br /><br /><b>User Portal:</b> Included features like cataloging (Listing, searching, filtering etc.), ticketing, checkout, ticket history etc. <br /><b>Partner Portal:</b> Included features like vendor onboarding, creating events, event approvals, event management etc. <br /><br /><b>Tech Used:</b> SvelteKit, TypeScript, TailwindCSS and other UI libraries for development, Docker, Kubernetes and AWS for deployment. <br /><br />Launched a successful pilot with BLR Hubba (30 Nov-15 Dec 2024). Traffic: <b>10-11k sessions with 1k bookings per day.</b>"],
        ]),
    }
];