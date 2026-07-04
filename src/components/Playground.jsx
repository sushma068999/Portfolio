export function Playground() {

    const projects = [
        {
            title: "Calculator",
            image: "/calculator.PNG",
            description:
                "A responsive calculator supporting basic arithmetic operations with a clean modern interface.",
            tech: ["Python", "Tkinter"],
            github: "https://github.com/sushma068999/calculator-app-py",
            demo: "#",
        },
        {
            title: "Tic-Tac-Toe",
            image: "/tictactoe.PNG",
            description:
                "Classic Tic-Tac-Toe game with turn tracking, winner detection and interactive gameplay.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/sushma068999/tictactoe-game-web",
            demo: "#",
        },
    ];

    return (
        <section
            style={{
                background: "#16352B",
                padding: "7rem 5rem",
                color: "white",
            }}
        >
            <p
                style={{
                    color: "#C8A96A",
                    letterSpacing: "3px",
                    marginBottom: "1rem",
                }}
            >
                PLAYGROUND
            </p>

            <h1
                style={{
                    fontFamily: "Bodoni Moda",
                    fontSize: "4.5rem",
                    marginBottom: "1rem",
                }}
            >
                Small Builds, Big Lessons
            </h1>

            <p
                style={{
                    color: "#c8d6cf",
                    maxWidth: "700px",
                    lineHeight: "2",
                    fontSize: "1.35rem",
                    marginBottom: "4rem",
                    fontFamily: "Garamond Cormorant",
                }}
            >
                A collection of smaller projects where I experiment, practice concepts, and improve my development skills.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(280px, 1fr))",
                    justifyContent: "center",
                    gap: "2rem",
                }}
            >
                {projects.map((project) => (
                    <div
                        key={project.title}
                        style={{
                            background: "#1A342B",
                            borderRadius: "18px",
                            overflow: "hidden",
                            border:
                                "1px solid rgba(255,255,255,.08)",
                            boxShadow:
                                "0 20px 50px rgba(0,0,0,.25)",
                            transition: ".35s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(-10px)";
                            e.currentTarget.style.boxShadow =
                                "0 35px 70px rgba(0,0,0,.35)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(0)";
                            e.currentTarget.style.boxShadow =
                                "0 20px 50px rgba(0,0,0,.25)";
                        }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: "100%",
                                height: "160px",
                                objectFit: "cover",
                            }}
                        />

                        <div
                            style={{
                                padding: "1.4rem",
                            }}
                        >
                            <h2
                                style={{
                                    margin: 0,
                                    marginBottom: "1rem",
                                    fontSize: "2rem",
                                }}
                            >
                                {project.title}
                            </h2>

                            <p
                                style={{
                                    color: "#c8d6cf",
                                    lineHeight: "1.8",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {project.description}
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    gap: ".75rem",
                                    flexWrap: "wrap",
                                    marginBottom: "2rem",
                                }}
                            >
                                {project.tech.map((tool) => (
                                    <span
                                        key={tool}
                                        style={{
                                            padding:
                                                ".55rem 1rem",
                                            borderRadius:
                                                "999px",
                                            background:
                                                "rgba(255,255,255,.08)",
                                            fontSize:
                                                ".9rem",
                                        }}
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                }}
                            >
                                <button
                                    style={{
                                        flex: 1,
                                        background:
                                            "#C8A96A",
                                        border: "none",
                                        borderRadius:
                                            "12px",
                                        padding:
                                            "1rem",
                                        fontWeight:
                                            "600",
                                        cursor:
                                            "pointer",
                                    }}
                                >
                                    GitHub
                                </button>

                                <button
                                    style={{
                                        flex: 1,
                                        background:
                                            "transparent",
                                        color:
                                            "white",
                                        border:
                                            "1px solid rgba(255,255,255,.12)",
                                        borderRadius:
                                            "12px",
                                        padding:
                                            "1rem",
                                        cursor:
                                            "pointer",
                                    }}
                                >
                                    Live Demo
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}