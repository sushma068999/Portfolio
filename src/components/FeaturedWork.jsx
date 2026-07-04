import { useRef, useState } from "react";

export function FeaturedWork() {
    const scrollRef = useRef(null);
    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -820,
            behavior: "smooth",
        });
    };
    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 820,
            behavior: "smooth",
        });
    };

    const projects = [
        {
            title: "Roast & Ritual",
            status: "Completed",
            image: "/roastnritual.PNG",
            tools: ["React", "Vite", "CSS", "Vercel", "Supabase", "Supabase-Auth"],
            description:
                "A modern coffee-inspired blog built with React and Vite.",
            github: "https://github.com/sushma068999/Roast-and-Ritual",
            demo: "https://coffee-blog-roast-and-ritual.vercel.app/",
        },
        {
            title: "LifeOS",
            status: "In Progress",
            image: "/lifeos.PNG",
            tools: ["React", "Supabase", "AI"],
            description:
                "An AI-powered productivity operating system combining planning, journaling and personal growth into one workspace.",
            github: "#",
            demo: "#",
        },
        {
            title: "ScrollSet",
            status: "In Progress",
            image: "/scrollset.PNG",
            tools: ["React Native", "Expo", "TypeScript"],
            description:
                "A minimal scrolling experience designed to reduce doomscrolling while keeping useful content accessible.",
            github: "https://github.com/sushma068999/ScrollSet",
            demo: "https://scrollset1.lovable.app/",
        },
        {
            title: "WheelScape",
            status: "In Progress",
            image: "/wheelscape.png",
            tools: ["HTML", "CSS", "JavaScript", "Flexbox", "Animations"],
            description:
                "A modern wheel-based decision maker focused on beautiful interactions and clean animations.",
            github: "https://github.com/sushma068999/Wheelscape",
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
                FEATURED WORK
            </p>

            <h1
                style={{
                    fontFamily: "Bodoni Moda",
                    fontSize: "4.5rem",
                    marginBottom: "1rem",
                }}
            >
                Ideas Brought To Life
            </h1>
            <p
                    style={{
                        fontFamily: "Garamond Cormorant",
                        fontSize: "1.35rem",
                        color: "#c9d8d1",
                        lineHeight: "2",
                        marginBottom: "3rem",
                    }}
                >
                    I'm still at the beginning of my jounrey but every project here represents another step forward.
            </p>

            <div
                style={{
                    position: "relative",
                    width: "100%",
                }}
            >
                {/* LEFT ARROW */}

                <button
                    onClick={scrollLeft}
                    style={{
                        position: "absolute",
                        left: "-15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,.08)",
                        background: "#203A31",
                        color: "#C8A96A",
                        fontSize: "2rem",
                        cursor: "pointer",
                        zIndex: 100,
                        transition: ".3s",
                    }}
                >
                    ‹
                </button>

                {/* PROJECT CONTAINER */}

                <div
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2rem",
                        overflowX: "hidden",
                        overflowY: "hidden",
                        scrollBehavior: "smooth",
                        alignItems: "stretch",
                        // whiteSpace: "nowrap",
                    }}
                >

                    {projects.map((project) => (
                        <div
                            key={project.title}
                            style={{
                                width: "700px",
                                flexShrink: 0,

                                display: "flex",
                                background: "#1A342B",
                                borderRadius: "12px",
                                overflow: "hidden",
                                border: "1px solid rgba(255,255,255,.08)",
                                boxShadow: "0 25px 60px rgba(0,0,0,.25)",
                                transition: ".35s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(-10px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(0)";
                            }}
                        >
                            {/* Image */}

                            <div
                                style={{
                                    width: "45%",
                                    background: "#27463B",
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>

                            {/* Content */}

                            <div
                                style={{
                                    width: "55%",
                                    padding: "2rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent:
                                                "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <h2
                                            style={{
                                                margin: 0,
                                                fontSize: "2.3rem",
                                            }}
                                        >
                                            {project.title}
                                        </h2>

                                        <span
                                            style={{
                                                background:
                                                    project.status ===
                                                    "Completed"
                                                        ? "#2E7D32"
                                                        : "#8C6A2B",
                                                padding:
                                                    ".45rem .9rem",
                                                borderRadius:
                                                    "999px",
                                                fontSize: ".9rem",
                                            }}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    <p
                                        style={{
                                            color: "#C8A96A",
                                            marginTop: "1.5rem",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        Built With
                                    </p>

                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: ".7rem",
                                            marginBottom: "2rem",
                                        }}
                                    >
                                        {project.tools.map(
                                            (tool) => (
                                                <span
                                                    key={tool}
                                                    style={{
                                                        background:
                                                            "rgba(255,255,255,.08)",
                                                        padding:
                                                            ".6rem 1rem",
                                                        borderRadius:
                                                            "999px",
                                                    }}
                                                >
                                                    {tool}
                                                </span>
                                            )
                                        )}
                                    </div>

                                    <p
                                        style={{
                                            lineHeight: "1.9",
                                            color: "#c8d6cf",
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "1rem",
                                        marginTop: "2rem",
                                    }}
                                >
                                    <button
                                        style={{
                                            background:
                                                "#C8A96A",
                                            border: "none",
                                            padding:
                                                ".9rem 1.5rem",
                                            borderRadius:
                                                "12px",
                                            cursor: "pointer",
                                            fontWeight: "600",
                                        }}
                                    >
                                        GitHub
                                    </button>

                                    <button
                                        style={{
                                            background:
                                                "transparent",
                                            color: "white",
                                            border:
                                                "1px solid rgba(255,255,255,.15)",
                                            padding:
                                                ".9rem 1.5rem",
                                            borderRadius:
                                                "12px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Live Demo
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                        {/* RIGHT ARROW */}
                        <button
                            onClick={scrollRight}
                            style={{
                                position: "absolute",
                                right: "-15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "52px",
                                height: "52px",
                                borderRadius: "50%",
                                border: "1px solid rgba(255,255,255,.08)",
                                background: "#203A31",
                                color: "#C8A96A",
                                fontSize: "2rem",
                                cursor: "pointer",
                                zIndex: 100,
                                transition: ".3s",
                            }}
                        >
                            ›
                        </button>
                    </div>
        </section>
    );
}