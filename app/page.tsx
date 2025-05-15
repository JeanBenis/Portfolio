import { ArrowDown, Code, Database, Cpu, LineChart, BrainCircuit, Layers } from "lucide-react"
import Image from "next/image"
import ProjectCard from "@/components/project-card"
import SkillCard from "@/components/skill-card"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import { Link } from "@/components/link"
import EducationCard from "@/components/education-card"
import ExperienceCard from "@/components/experience-card"
import ProcessTimeline from "@/components/process-timeline"
import LanguageCard from "@/components/language-card"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-800 px-4 text-white">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="z-10 flex flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Bonjour, je suis</span>
            <span className="mt-2 block bg-gradient-to-r from-blue-200 to-sky-100 bg-clip-text text-transparent">
              Jean Bénis
            </span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-blue-100 sm:text-xl md:text-2xl">
            Ingénieur & Développeur Web spécialisé en solutions techniques innovantes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
              <Link href="#projets">Voir mes projets</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-300 bg-blue-800/70 text-blue-100 hover:bg-blue-700 hover:text-white hover:border-blue-200 backdrop-blur-sm"
            >
              <Link href="#contact">Me contacter</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <Link
            href="#a-propos"
            className="flex items-center justify-center rounded-full bg-white/10 p-2 backdrop-blur-sm"
          >
            <ArrowDown className="h-6 w-6 text-white" />
          </Link>
        </div>
      </section>

      {/* À propos Section */}
      <section id="a-propos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            À Propos <span className="text-blue-600">de Moi</span>
          </h2>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="md:w-1/2">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-blue-200 shadow-xl">
                <Image
                  src="/photo-profil.jpg?height=320&width=320" //Modif
                  alt="Votre photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-blue-600">Qui suis-je?</h3>
              <p className="mb-6 text-lg text-gray-700">
                Diplômé en ingénierie, j'allie une solide formation technique à une expertise en développement web.
                Cette double compétence me permet d'aborder les projets avec une approche analytique et structurée, tout
                en créant des solutions numériques performantes et innovantes.
                Je suis un ingénieur passionné avec une expertise dans la création de sites web et
                d&apos;applications modernes. Avec plusieurs années d&apos;expérience, j&apos;ai travaillé sur divers projets
                allant des sites vitrines aux applications complexes.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                Ma formation d'ingénieur m'a doté d'une méthodologie rigoureuse pour résoudre des problèmes complexes,
                optimiser les performances et garantir la fiabilité des systèmes que je développe. Je m'appuie sur ces
                fondamentaux pour créer des applications web robustes et évolutives.
                Ma philosophie est de créer des expériences numériques qui allient esthétique et fonctionnalité, tout en
                garantissant des performances optimales et une expérience utilisateur exceptionnelle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="#approche">Mon approche</Link>
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#competences">Mes compétences</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ma <span className="text-blue-600">Formation</span>
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <EducationCard
                degree="Diplôme d'Ingénieur"
                school="ENIB : École Nationale d'Ingénieurs de Brest"
                period="2016 - 2021"
                description="Formation en informatique, électronique et mécatronique.
                 Projets majeurs incluant la mise en place d'une station météo en groupe. 
                 Mon apport personnel étant la création du site web affichant les informations envoyées par la station."
                skills={[
                  "Mathématiques appliquées",
                  "Analyse des besoins",
                  "Modélisation",
                  "Gestion de projet",
                  "Résolution de problèmes complexes",
                  "Languages de programation",
                ]}
              />
              <EducationCard
                degree="Spécialisation en école d'Ingénieur"
                school="ENIB : École Nationale d'Ingénieurs de Brest"
                period="2021 - 2022"
                description="Spécialisation en développement web et applications distribuées. 
                Rapport de stage de fin d'études sur l'automatisation de la mise à jour des iPhones en 10 minutes via un PC."
                skills={[
                  "Algorithmique avancé",
                  "Architecture logicielle",
                  "Bases de données",
                  "Sécurité informatique",
                  "Développement de logiciel Windows",
                  "Développement de site web"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Langues Section */}
      <section id="langues" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mes <span className="text-blue-600">Langues</span>
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <LanguageCard
                language="Français"
                level={5}
                flag="🇫🇷"
                description="Langue maternelle. Excellente maîtrise de la communication écrite et orale dans un contexte professionnel."
              />
              <LanguageCard
                language="Anglais"
                level={4}
                flag="🇬🇧"
                description="Communication professionnelle courante. Expérience de travail dans des environnements internationaux."
              />
            </div>
            <div className="mt-10 text-center">
              <p className="text-lg text-gray-700">
                Ma maîtrise de plusieurs langues me permet de collaborer efficacement avec des clients et partenaires
                internationaux, et de m'adapter à des environnements de travail multiculturels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expériences Professionnelles Section */}  {/*Modif*/}
      <section id="experiences" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mes <span className="text-blue-600">Expériences</span>
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <ExperienceCard
                position="Ingénieur Freelance"
                company="Jean Bénis Freelance"
                period="Mai 2025 - Présent"
                description="Après mes expérience professionelles et un voyage de plus de 6 mois à travers l'Asie, j'ai eu le recul nécessaire pour me lancer à mon compte. "
                achievements={[
                  "Création de la micro-entreprise",
                  "Développement et hébergement du site",
                  "Création des documents légaux",
                  "Démarchage auprès de potentiels clients",
                ]}
                technologies={[
                  "React.js",
                  "Next.js",
                  "Html",
                  "CSS",
                  "JavaScript / TypeScript",
                ]}
              />
              <ExperienceCard
                position="Ingénieur développeur"
                company="Cordon Electronics"
                period="Janvier 2022 - Novembre 2023"
                description="Développeur dans l'équipe applications mobiles de Cordon electronics. Deux volets à ce poste : 
                la partie industrielle comprenant majoritairement la mise à jour des iPhone en réparation en moins de 10mn et la partie prestataire.
                J'administrais et améliorais en continu l'outil de transfert des donées d'un mobile à un autre chez un des plus grands opérateur télécom francais."
                achievements={[
                  "Conception et implémentation d'une solution de mise à jour des iPhone en un temps record",
                  "Création d'un service windows couplé à une interface utilisateur permettant de télécharger automatique et manuellement les firmwares Apple",
                  "Mise en place d'une CI/CD pipeline complète qui a amélioré la qualité du code et réduit les bugs en production",
                  "Chef de projet sur un projet de plusieurs millions d'euros annuel pour un des leaders du télécom français",
                  "Optimisation des performances d'une application, et d'un site existant",
                ]}
                technologies={[
                  "C#",
                  "Html",
                  "CSS",
                  "Angular",
                  "Concepteur XAML",
                  "Développement de service Windows",
                  "Android",
                  "iOS",
                  "CI/CD",
                ]}
              />

              <ExperienceCard
                position="Stage Ingénieur Développement Full Stack"
                company="Département d'Ille et Vilaine"
                period="Septembre 2020 - Janvier 2021"
                description="Conception et développement du site Data Ille et Vilaine. Le premier site d'open data du département 35."
                achievements={[
                  "Conception du site en accord avec les administrateurs du département",
                  "Implémentation de CKAN pour gérer la partie open data",
                  "Liaison à la base de données existante d'open data du département",
                  "Mise en place d'un visuel attirant et réussi",
                ]}
                technologies={[
                  "CKAN",
                  "Html",
                  "CSS",
                  "Javascript",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie Section avec Timeline */}
      <section id="methodologie" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ma <span className="text-blue-600">Méthodologie</span>
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
            Je suis une approche structurée et éprouvée pour développer des solutions web de qualité. Chaque étape est
            essentielle pour garantir un produit final qui répond parfaitement à vos besoins.
          </p>
          <ProcessTimeline />
        </div>
      </section>

      {/* Approche Section */}
      <section id="approche" className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mon <span className="text-blue-200">Approche d'Ingénieur</span>
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800">
                <Layers className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Architecture solide</h3>
              <p>
                Je conçois des architectures logicielles robustes et évolutives, en appliquant les principes SOLID et
                les patterns de conception adaptés à chaque projet.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800">
                <LineChart className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Optimisation continue</h3>
              <p>
                J'analyse et optimise constamment les performances, en identifiant les goulots d'étranglement et en
                implémentant des solutions efficaces.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800">
                <Database className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Gestion des données</h3>
              <p>
                Je conçois des modèles de données efficaces et sécurisés, en optimisant les requêtes et en assurant
                l'intégrité des informations.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800">
                <Cpu className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Infrastructure scalable</h3>
              <p>
                Je développe des infrastructures cloud évolutives qui s'adaptent automatiquement à la charge et aux
                besoins du projet.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800">
                <Code className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Code maintenable</h3>
              <p>
                J'écris un code propre, bien documenté et testé, facilitant la maintenance et l'évolution des projets
                sur le long terme.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-800">
                <BrainCircuit className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Innovation technique</h3>
              <p>
                J'intègre les dernières avancées technologiques de manière pertinente pour créer des solutions
                innovantes et efficaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mes <span className="text-blue-600">Compétences</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              title="Développement Frontend"
              description="Création d'interfaces utilisateur modernes et réactives avec les dernières technologies."
              icon="Code"
              skills={["React", "Next.js", "Vue.js", "HTML5/CSS3", "JavaScript/TypeScript"]}
            />
            <SkillCard
              title="Développement Backend"
              description="Conception d'APIs robustes et de systèmes backend performants."
              icon="Server"
              skills={["Node.js", "Express", "PHP", "MySQL", "MongoDB", "Firebase"]}
            />
            <SkillCard
              title="UI/UX Design"
              description="Création d'expériences utilisateur intuitives et esthétiquement plaisantes."
              icon="Palette"
              skills={["Figma", "Adobe XD", "Responsive Design", "Prototypage", "Wireframing"]}
            />
            <SkillCard
              title="CMS & E-commerce"
              description="Développement de sites e-commerce et de systèmes de gestion de contenu."
              icon="ShoppingCart"
              skills={["WordPress", "WooCommerce", "Shopify", "Strapi", "Contentful"]}
            />
            <SkillCard
              title="Outils & Méthodes"
              description="Utilisation des meilleurs outils et pratiques pour un développement efficace."
              icon="Tool"
              skills={["Git", "Docker", "CI/CD", "Agile/Scrum", "Testing"]}
            />
            <SkillCard
              title="Performance & SEO"
              description="Optimisation des sites pour les moteurs de recherche et les performances."
              icon="Search"
              skills={["Lighthouse", "Google Analytics", "SEO Technique", "Web Vitals", "Optimisation"]}
            />
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mes <span className="text-blue-600">Projets</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Data Ille et Vilaine"
              description="Site d'Open data du département d'Ille et Vilaine. Ce site permet a chaque citoyen d'acceder a des données publiques administrées par le département."
              image="/data-ille-et-vilaine.png?height=400&width=600"
              tags={["CKAN", "Html", "CSS", "BDD"]}
              demoUrl="https://data.ille-et-vilaine.fr/"
              codeUrl="#"
            />
            <ProjectCard
              title="Jean Bénis"
              description="Mon site de présentation de mon activité de freelance."
              image="/portfolio.png?height=400&width=600"
              tags={["React", "Next.js", "Html", "CSS"]}
              demoUrl="#"
              codeUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Témoignages Section hidden*/}
      <section className="bg-blue-900 py-20 text-white hidden">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ce que disent <span className="text-blue-200">mes clients</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-blue-200">
                    <Image
                      src={`/placeholder.svg?height=48&width=48`}
                      alt="Client"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Client {i}</h4>
                    <p className="text-sm text-blue-200">Entreprise {i}</p>
                  </div>
                </div>
                <p className="italic">
                  "Un travail exceptionnel! Le site web créé a dépassé toutes nos attentes. Communication claire,
                  respect des délais et résultat professionnel."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Me <span className="text-blue-600">Contacter</span>
          </h2>
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-blue-600">Parlons de votre projet</h3>
                <p className="mb-6 text-gray-700">
                  Vous avez un projet en tête? N&apos;hésitez pas à me contacter pour discuter de vos besoins et de
                  comment je peux vous aider à les réaliser.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span>+33 7 89 60 62 39</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span>benisjean.pro@gmail.com</span> {/*Modif*/}
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span>St Malo, France</span>
                  </div>
                </div>
              </div>
              <ContactForm /> {/*Modif*/}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-xl font-bold">Jean Bénis</h3>
              <p className="text-gray-400">Ingénieur Web Freelance</p>
            </div>
            <div className="flex space-x-4">
              <a // Linkedin
                href="https://www.linkedin.com/in/jean-b%C3%A9nis-1231951ab/" //Modif
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-colors hover:bg-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a // GitHub
                href="https://github.com/JeanBenis" //Modif
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-colors hover:bg-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a // Youtube hidden
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-colors hover:bg-blue-600 hidden"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a // Facebook
                href="https://www.facebook.com/profile.php?id=61575940063406&locale=fr_FR" //Modif
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-colors hover:bg-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Jean Bénis. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
