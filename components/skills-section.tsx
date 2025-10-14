import Image from "next/image"
import { Code, Database, Layers, Rocket, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Lenguajes de Programación",
    icon: Code,
    skills: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "SQL Server",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    title: "Frameworks & Librerías",
    icon: Layers,
    skills: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        logoLight: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
      },
      {
        name: "ASP.NET Core",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "Entity Framework Core",
        logo: "https://static.gunnarpeipman.com/wp-content/uploads/2019/12/ef-core-featured.png",
      },
      {
        name: "TailwindCSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      },
      {
        name: "jQuery",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
      },
      {
        name: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      },
      {
        name: "Ionic Framework",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg"
      },
      {
        name: "BCrypt.NET",
        logo: "https://avatars.githubusercontent.com/u/22194067?v=4"
      },
    ],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        logoLight: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
    ],
  },
  {
    title: "Despliegue & Infraestructura",
    icon: Rocket,
    skills: [
      {
        name: "AWS",
        logoLight: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
      },
      {
        name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"

      },
      {
        name: "Vercel",
        logo: "https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-white.svg",
        logoLight: "https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-black.svg"
      },
      {
        name: "Neon",
        logo: "https://neon.com/brand/neon-logo-dark-color.svg",
        logoLight: "https://neon.com/brand/neon-logo-light-color.svg"
      },
      {
        name: "Somee",
        logo: "https://somee.com/Images/Img/logo-white.svg",
        logoLight: "https://somee.com/Images/Img/logo-dark.svg"
      },
      {
        name: "Windows Server",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
        {/* Muchísimos símbolos de programación, más grandes y visibles */}
        <div className="absolute top-4 left-4 text-8xl font-mono text-primary/70">{`{}`}</div>
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-7xl font-mono text-primary/60">{`</>`}</div>
        <div className="absolute top-1/4 right-10 text-7xl font-mono text-primary/70">{`[]`}</div>
        <div className="absolute bottom-1/4 left-1/3 text-8xl font-mono text-primary/80">{`()`}</div>
        <div className="absolute bottom-10 right-1/4 text-8xl font-mono text-primary/70">{`=>`}</div>
        <div className="absolute top-1/2 left-1/5 text-7xl font-mono text-primary/60">{`&&`}</div>
        <div className="absolute bottom-1/2 right-1/5 text-7xl font-mono text-primary/60">{`!==`}</div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-8xl font-mono text-primary/80">{`/* */`}</div>
        <div className="absolute bottom-1/3 right-1/2 translate-x-1/2 text-7xl font-mono text-primary/70">{`//`}</div>
        <div className="absolute top-1/6 left-1/6 text-8xl font-mono text-primary/80">{`$`}</div>
        <div className="absolute bottom-1/6 right-1/6 text-8xl font-mono text-primary/80">{`@`}</div>
        <div className="absolute top-1/8 right-1/8 text-7xl font-mono text-primary/70">{`?`}</div>
        <div className="absolute bottom-1/8 left-1/8 text-7xl font-mono text-primary/70">{`:`}</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-[10rem] font-mono text-primary/40">{`<Skills />`}</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Wrench className="h-8 w-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Habilidades Técnicas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.title} className="space-y-6 bg-card p-6 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center space-x-3 group hover:bg-muted/50 p-3 rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        <div className="w-8 h-8 flex-shrink-0">
                          {/* Neon y Somee: mostrar logo según tema */}
                          {skill.logoLight ? (
                            <>
                              {/* Logo negro en modo claro */}
                              <Image
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                width={32}
                                height={32}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform hidden dark:inline"
                              />
                              {/* Logo blanco en modo claro */}
                              <Image
                                src={skill.logoLight}
                                alt={`${skill.name} logo light`}
                                width={32}
                                height={32}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform inline dark:hidden"
                              />
                            </>
                          ) : (
                            <Image
                              src={skill.logo || "/placeholder.svg"}
                              alt={`${skill.name} logo`}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                            />
                          )}
                        </div>
                        <span className="text-foreground text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
