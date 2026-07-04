export function TechStack() {
    const stacks = [
        {
            title: "Languages",
            items: ["Python", "JavaScript", "SQL"],
        },
        {
            title: "Frontend",
            items: ["HTML5", "CSS3", "React", "React-Native"],
        },
        {
            title: "Backend",
            items: [
                "Supabase",
                "REST APIs",
                "Authentication",
            ],
        },
        {
            title: "Tools",
            items: [
                "Git",
                "GitHub",
                "VS Code",
                "Vite",
                "Expo",
            ],
        },
        {
            title: "Currently Learning",
            items: [
                "Machine Learning",
                "Portfolio Design",
                "UI/UX",
            ],
        },
    ];

    return (
        <section
            style={{
                // background: "#10261F",
                background: "#16352B",
                color: "#f5f5f5",
                padding: "7rem 5rem",
            }}
        >
            <p
                style={{
                    color: "#C8A96A",
                    letterSpacing: "3px",
                    fontSize: ".95rem",
                    marginBottom: "1rem",
                }}
            >
                TECH STACK
            </p>

            <h1
                style={{
                    fontFamily: "Bodoni Moda",
                    fontSize: "4.5rem",
                    margin: 0,
                    marginBottom: "1rem",
                    color: "#fff",
                }}
            >
                The Tools Behind My Work
            </h1>

            <p
                style={{
                    color: "#c6d2cc",
                    maxWidth: "760px",
                    fontSize: "1.1rem",
                    lineHeight: "1.9",
                    marginBottom: "4rem",
                }}
            >
                Every project I build is a combination of curiosity,
                experimentation, and craftsmanship. These are the
                technologies I'm comfortable working with and the
                ones I'm actively sharpening.
            </p>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.3rem",
                }}
            >
                {stacks.map((stack) => (
                    <div
                        key={stack.title}
                        style={{
                            borderTop:
                                "1px solid rgba(200,169,106,.25)",
                            paddingTop: "1.5rem",
                        }}
                    >
                        <h3
                            style={{
                                color: "#C8A96A",
                                fontSize: "1rem",
                                letterSpacing: "3px",
                                marginBottom: "1.2rem",
                                textTransform: "uppercase",
                            }}
                        >
                            {stack.title}
                        </h3>

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "1rem",
                            }}
                        >
                            {stack.items.map((item) => (
                                <div
                                    key={item}
                                    style={{
                                        padding:
                                            ".85rem 1.4rem",
                                        borderRadius: "999px",
                                        background:
                                            "rgba(255,255,255,.05)",
                                        border:
                                            "1px solid rgba(255,255,255,.08)",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        transition:
                                            ".35s ease",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background =
                                            "#C8A96A";
                                        e.currentTarget.style.color =
                                            "#10261F";
                                        e.currentTarget.style.transform =
                                            "translateY(-4px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background =
                                            "rgba(255,255,255,.05)";
                                        e.currentTarget.style.color =
                                            "#fff";
                                        e.currentTarget.style.transform =
                                            "translateY(0)";
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                
            </div>
        </section>
    );
}