import { profile } from "@/data/resume";

export default function Header() {
  return (
    <header>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="photo"
        src={profile.photo}
        alt={`Photo of ${profile.name}`}
        width={120}
        height={120}
      />
      <h1>{profile.name}</h1>
      <p className="contact">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span>|</span>
        <a href={profile.linkedin.href}>{profile.linkedin.label}</a>
        <span>|</span>
        <a href={profile.github.href}>{profile.github.label}</a>
      </p>
      <p className="download">
        <a href={profile.pdf} download>
          Download PDF
        </a>
      </p>
    </header>
  );
}
