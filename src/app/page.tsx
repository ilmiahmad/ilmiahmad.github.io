import EntryItem from "@/components/EntryItem";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import Section from "@/components/Section";
import { education, experience, profile, projects, skills } from "@/data/resume";

export default function Home() {
  return (
    <>
      <a className="skip" href="#projects-title">
        Skip to content
      </a>
      <Hero />
      <main>
        <Section id="projects" title="Projects">
          <ProjectList projects={projects} />
        </Section>

        <Section id="experience" title="Experience">
          <ExperienceTimeline />
          {experience.map((e) => (
            <EntryItem key={e.title} entry={e} />
          ))}
        </Section>

        <Section id="education" title="Education">
          {education.map((e) => (
            <EntryItem key={e.title} entry={e} />
          ))}
        </Section>

        <Section id="skills" title="Skills & certifications">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.label} className="skill">
                <dt>{s.label}</dt>
                <dd>
                  {s.value}
                  {s.link && (
                    <>
                      {" "}
                      <a href={s.link.href}>{s.link.label}</a>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </main>
      <footer>
        <p>© {profile.name}</p>
      </footer>
    </>
  );
}
