export function Workbench() {
  const sections = [
    {
      title: "Frontend",
      subtitle: "Interfaces & Experiences",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "React-Native"],
    },
    {
      title: "Backend",
      subtitle: "Logic & Database",
      skills: ["Supabase", "Authentication", "SQL", "REST APIs"],
    },
    {
      title: "AI & Vision",
      subtitle: "Learning & Building",
      skills: ["Python", "Machine Learning", "Prompt Engineering"],
    },
    {
      title: "Infrastructure",
      subtitle: "Daily Workflow",
      skills: ["Git", "VS Code", "Figma", "GitHub", "Vercel"],
    },
  ];

  return (
    <section
      style={{
        background: "#16352B",
        padding: "7rem 5rem",
        color: "#fff",
      }}
    >
      <p
        style={{
          color: "#C8A96A",
          letterSpacing: "4px",
          marginBottom: "1rem",
        }}
      >
        WORKBENCH
      </p>

      <h1
        style={{
          fontFamily: "Bodoni Moda",
          fontSize: "4.5rem",
          marginBottom: "2rem",
        }}
      >
        Tools I Build With
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "2rem",
        }}
      >
        {sections.map((section) => (
          <div
            key={section.title}
            style={{
              background:
                "linear-gradient(135deg,#203A31,#27463B)",
              borderRadius: "12px",
              padding: "2rem",
              border: "1px solid rgba(255,255,255,.08)",
              boxShadow: "0 20px 45px rgba(0,0,0,.22)",
              transition: ".35s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 35px 65px rgba(0,0,0,.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 20px 45px rgba(0,0,0,.22)";
            }}
          >
            <p
              style={{
                color: "#C8A96A",
                letterSpacing: "3px",
                marginBottom: ".6rem",
              }}
            >
              {section.title}
            </p>

            <h3
              style={{
                fontSize: "2rem",
                marginBottom: ".4rem",
                fontFamily: "Garamond Cormorant",
              }}
            >
              {section.subtitle}
            </h3>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexWrap: "wrap",
                gap: ".8rem",
              }}
            >
              {section.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: ".45rem 1.2rem",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,.08)",
                    border:
                      "1px solid rgba(255,255,255,.08)",
                    color: "#dce8e3",
                    fontWeight: "500",
                    transition: ".3s",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}