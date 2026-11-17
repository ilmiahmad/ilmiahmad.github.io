import EntryItem from "@/components/EntryItem";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { education, experience, profile, projects, skills } from "@/data/resume";

export default function Home() {
  return (
    <main>
      <Header />

      <p className="summary">{profile.summary}</p>

      <Section title="Education">
        {education.map((e) => (
          <EntryItem key={e.title} entry={e} />
        ))}
      </Section>

      <Section title="Skills & Certifications">
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

      <Section title="Experience">
        {experience.map((e) => (
          <EntryItem key={e.title} entry={e} />
        ))}
      </Section>

      <Section title="Projects">
        {projects.map((e) => (
          <EntryItem key={e.title} entry={e} />
        ))}
      </Section>

      <footer>
        <p>© {profile.name}</p>
      </footer>
    </main>
  );
}
