'use client'
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { Navigation } from "../components/navbar";


import Footer from "../components/footer";

export default function Cv() {
    const [openSections, setOpenSections] = useState({});
    const cvRef = useRef();
    const [html2pdfModule, setHtml2pdfModule] = useState(null);

    useEffect(() => {
        import('html2pdf.js').then(module => {
            setHtml2pdfModule(module);
        });
    }, []);

    const toggleSection = (section) => {
        setOpenSections((prevOpenSections) => ({
            ...prevOpenSections,
            [section]: !prevOpenSections[section]
        }));
    };

    const handleDownloadPdf = () => {
        if (html2pdfModule) {
            const element = cvRef.current;
            const opt = {
                margin: 1,
                filename: 'CV-Hery-Rakotomanana-Andrianjohany.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdfModule.default().from(element).set(opt).save();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 p-6 flex flex-col justify-center items-center">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <Navigation></Navigation>
            </div>
            <button
                onClick={handleDownloadPdf}
                className="ml-4 px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-700 transition-colors"
            >
                Télécharger PDF
            </button>
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full relative" ref={cvRef}>
                <header className="flex justify-between items-center mb-6">
                    <div className="text-left">
                        <h1 className="text-4xl font-bold mb-2 text-black">Hery Rakotomanana Andrianjohany</h1>
                        <p className="text-gray-600 font-bold mb-2">Lead Developer</p>
                        <a href="mailto:me@hery.website" >
                            <p className="text-gray-600">me@hery.website</p>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                            <img src="/hery_black_white.png" alt="Hery's photo" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </header>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4 text-black">Profile</h2>
                    <p className="text-gray-700">
                        I'm a dedicated mobile application developer with a strong foundation in Flutter, Java (Spring Framework), React (Next.js) and SQL (Mysql, Sqlite, PostgreSQL). I'm skilled in managing projects from inception to completion, ensuring meticulous attention to detail and optimized code. My approach is rooted in SOLID principles, clean coding practices, and effective design patterns, enabling me to deliver robust and maintainable solutions.
                        In addition to my existing skills, I have recently developed an interest in artificial intelligence (AI), with a particular focus on integrating machine learning and natural language processing into various projects. I also possess expertise in building and managing AI teams, which allows me to effectively coordinate efforts to develop innovative and high-performance solutions.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4 text-black">Work experience</h2>
                    <div className="space-y-4">
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section1')}>
                                Mobile App Designer-Developer
                                <span className="float-right">{openSections['section1'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section1'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-red-500">Annexx SA - Montpellier, Oct 2024 - now</p>
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Lead the development and maintenance of a suite of mobile applications, resulting in [quantifiable improvement, e.g., increased user engagement, reduced support costs], consistently delivering new features and improvements</li>
                                        <li>Conceived and developed a full-stack internal staff app (Flutter, Supabase, n8n), boosting onsite agent productivity and implementing tailored site monitoring dashboards.</li>
                                        <li>Built and deployed multiple custom internal apps to address specific business needs, distributed via Apple Business Manager and private Android links.</li>
                                        <li>Deployed and managed Eset Protect MDM across the company's entire mobile fleet (Android & iOS), designing and applying security policies adapted to business requirements.</li>
                                        <li>Set up and managed the Apple Business Manager account, integrating MDM, provisioning managed accounts tied to the company domain, onboarding Apple devices via App Configurator, and delivering Annexx’s overarching ABM device management strategy.</li>
                                        <li>Developed a full-stack autonomous delivery solution featuring a NextJS front-end with PWA capabilities, Supabase backend, and n8n workflow automation, integrated with AI-powered label decryption toolsDesigned and developed a full-stack autonomous delivery solution: NextJS front-end with PWA layer, Supabase and n8n back-end, Google Vision API, and AI-powered labeling tools.Setup and management of the company's Apple Business Manager account</li>
                                        <li>Led the implementation of automation solutions, including the deployment of AI agents and integration of AI into business processes. Established department-wide debugging and monitoring tools for web and mobile development.</li>
                                        <li>Successfully delivered all projects on schedule and within budget, contributing to measurable business improvements such as increased productivity and operational efficiency.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section2')}>
                                Work-study mobile developer
                                <span className="float-right">{openSections['section2'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section2'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-red-500">Annexx SA - Montpellier, Sept 2023 - Sept 2024</p>
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Fixing compilation errors, updating the previous Android Annexx application, and submitting it to the Play Store</li>
                                        <li>Fixing compilations errors, recompiling an internally developed application using Swift,and integrating it with the Apple Business Store</li>
                                        <li>Publishing internally developed applications on the Apple Business Store</li>
                                        <li>Development from scratch of version 2.0.0 of the Annexx application using Flutter, followed by uploading it to the App Store and Play Store</li>
                                        <li>Introducing new features to the Annexx App : biometric authentication, private gallery....</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section3')}>
                                Lead Developper student
                                <span className="float-right">{openSections['section3'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section3'] && (
                                <div className="mt-2  text-gray-700">
                                    <p className="text-red-900">Doranco - Sup des Tech créatives - Paris, Sept 2023 - now</p>
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Development from scratch of an e-commerce site, using Java, Spring boot, hibernate on the back-end and Angular on the front-end</li>
                                        <li>Requirements specifications</li>
                                        <li>Design of teh database and application based on the Conceptual Data Model and Unified Language Model</li>
                                        <li>Project deployment</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section4')}>
                                Founding manager
                                <span className="float-right">{openSections['section4'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section4'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-yellow-900">Le Grenier à épices - Montpellier, Apr 2021 - Dec 2023</p>
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Company establishment, supply chain setup, market conquest</li>
                                        <li>Creation of the website ‘www.legrenieraepices.com,’ - using Wordpress and Woocommerce - implementation of the digital and marketing strategy, and SEO development</li>
                                        <li>Administrative and financial management</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section5')}>
                                Web and mobile web development student
                                <span className="float-right">{openSections['section5'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section5'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-blue-600">Beweb Fondespierre Ressources Humaines - Montpellier, Dec 2022 - Oct 2023</p>
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Proxigo: Multi-service geolocation application with a frontend developed in Flutter and Flutter BloC and a backend developed in
                                            NestJS with an Apollo Server, mysql and apiREST overlay
                                            graphQL.</li>
                                        <li>Symfoot: Football application developed under Symfony 6.3 with
                                            using Twig and mysql.</li>
                                        <li>PokeFight: Combat application, developed under PHP 8.8 and mysql</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section6')}>
                                Web application developer intern
                                <span className="float-right">{openSections['section6'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section6'] && (
                                <div className="mt-2  text-gray-700">
                                    <p className="text-pink-600">PP Limted - Paris, Dec 2022 - Oct 2023</p>
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Creation of a web application intended for the implementation of a
                                            UX-optimized online quote tool.
                                        </li>
                                        <li>Fullstack project developed in Front-end with NextJS, Tailwind
                                            CSS and back-end with Supabase and a database
                                            Postgres</li>
                                        <li>Project deployment on Digital Ocean</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section7')}>
                                Logistic Manager
                                <span className="float-right">{openSections['section7'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section7'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-green-700">Soredim SA - Madagascar, Feb 2005 - Mar 2015</p>
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Creation and implementation of the logistics department</li>
                                        <li>KPI's implementation</li>
                                        <li>Key contributor to the successful implementation of the SAGE X3 ERP</li>
                                        <li>Negotiations...</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4 text-black">Diplomas and certifications</h2>
                    <div className="space-y-4">
                    <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section8')}>
                                Initiation to Agentic Agents 
                                <span className="float-right">{openSections['section8'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section8'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-gray-600">CrewAI - Delaware, USA, March 2025</p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section9')}>
                                Databases - Relationnal Databases and SQL Certification
                                <span className="float-right">{openSections['section9'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section9'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-gray-600">Stanford University Online, still running</p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section10')}>
                                Lead Developer Certification
                                <span className="float-right">{openSections['section10'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section10'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-gray-600">Doranco - Sup des Tech créatives - Paris, Oct 2024</p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section11')}>
                                Front-end Web and mobile web development Certification
                                <span className="float-right">{openSections['section11'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section11'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-gray-600">Beweb Fondespierre Ressources Humaines - Montpellier, Oct 2023 </p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section12')}>
                                Google adds display Certification
                                <span className="float-right">{openSections['section12'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section12'] && (
                                <div className="mt-2 text-gray-700">    
                                    <p className="text-gray-600">Google programm, Sept 2022</p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section13')}>
                                Google numeric marketing Certification
                                <span className="float-right">{openSections['section13'] ? '-' : '+'}</span>
                            </button>   
                            {openSections['section13'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-gray-600">Google programm, Jun 2022</p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section14')}>
                                RGPDR Certification
                                <span className="float-right">{openSections['section14'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section14'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-gray-600">CNIL MOOC, Dec 2020</p>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section15')}>
                                License
                                Management Science
                                <span className="float-right">{openSections['section15'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section15'] && (
                                <div className="mt-2 text-gray-700">
                                    <p className="text-gray-600">Antananarivo University Madagascar, Feb 2007</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>


                <section className="mt-8">
                    <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4 text-black">Skills</h2>
                    <div className="space-y-4">
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section16')}>
                                Front-end
                                <span className="float-right">{openSections['section16'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section16'] && (
                                <div className="mt-2 text-gray-700">
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Languages : HTML, CSS, JavaScript, Dart</li>
                                        <li>Libraries, Frameworks and SDKs : React, Angular, Next JS, Tailwind, Bootstrap, Twig, Thymeleaf, Flutter, Next-PWA...</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section17')}>
                                Back-end
                                <span className="float-right">{openSections['section17'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section17'] && (
                                <div className="mt-2 text-gray-700">
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Languages : Java, PHP, NodeJs</li>
                                        <li>Libraries, Frameworks and SDKs : Spring, Symfony, Express, Next JS</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section18')}>
                                Database
                                <span className="float-right">{openSections['section18'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section18'] && (
                                <div className="mt-2 text-gray-700">
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Languages : SQL, PostgreSQL</li>
                                        <li>Libraries, Frameworks and SDKs : MySql, Sqlite, Sqflite, Doctrine, JPA, Hibernate, Firebase, Supabase</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section19')}>
                                DevOps
                                <span className="float-right">{openSections['section19'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section19'] && (
                                <div className="mt-2 text-gray-700">
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Tools : Github, Gitlab, Docker, Vercel</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section20')}>
                                IDE
                                <span className="float-right">{openSections['section20'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section20'] && (
                                <div className="mt-2 text-gray-700">
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Visual Studio Code, Android Studio, XCode, IntelliJ IDEA, Eclipse, Cursor, Claude Code</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-xl font-semibold w-full text-left text-black" onClick={() => toggleSection('section21')}>
                                Tools, Methodology and usual languages
                                <span className="float-right">{openSections['section21'] ? '-' : '+'}</span>
                            </button>
                            {openSections['section21'] && (
                                <div className="mt-2 text-gray-700">
                                    <ul className="list-disc list-inside text-gray-600">
                                        <li>Figma, Draw.io, Looping, Agile, Scrum, Kanban, Obsidian </li>
                                        <li>French - native, Malagasy - native, Strong English Language Skills  </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}
