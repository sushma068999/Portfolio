export function Navbar() {
    return (
        <nav
            style={{
                position: "fixed",
                width: "100%",
                zIndex: 1000,
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 5rem",
                background: "#16352b",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",

                borderBottom: "1px solid rgba(255,255,255,0.25)",
                // color: "#f6f5f2",
                // borderBottom: "1px solid #d8ddd8",
            }}
        >
            {/* Logo */}
            <div
                style={{
                    fontFamily: "Bodoni Moda",
                    fontSize: "1.7rem",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    color: "#e7cf9f",
                }}
            >
                Sushma Rai
            </div>

            {/* Navigation */}
            <ul
                style={{
                    display: "flex",
                    gap: "4rem",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    fontWeight: "500",
                }}
            >
                <li>
                    <a
                        href="#philosophy"
                        style={{
                            fontFamily:"Bodoni Moda",
                            color: "#f6f5f2",
                            textDecoration: "none",
                        }}
                    >
                        About Me
                    </a>
                </li>

                <li>
                    <a
                        href="#skills"
                        style={{
                            fontFamily:"Bodoni Moda",
                            color: "#f6f5f2",
                            textDecoration: "none",
                        }}
                    >
                        Skills
                    </a>
                </li>

                <li>
                    <a
                        href="#projects"
                        style={{
                            fontFamily:"Bodoni Moda",
                            color: "#f6f5f2",
                            textDecoration: "none",
                        }}
                    >
                        Featured Works
                    </a>
                </li>

                <li>
                    <a
                        href="#playground"
                        style={{
                            fontFamily:"Bodoni Moda",
                            color: "#f6f5f2",
                            textDecoration: "none",
                        }}
                    >
                        Playground
                    </a>
                </li>

                <li>
                    <a
                        href="#gallery"
                        style={{
                            fontFamily:"Bodoni Moda",
                            color: "#f6f5f2",
                            textDecoration: "none",
                        }}
                    >
                        Gallery
                    </a>
                </li>

                <li>
                    <a
                        href="#contact"
                        style={{
                            fontFamily:"Bodoni Moda",
                            color: "#f6f5f2",
                            textDecoration: "none",
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>

            {/* Right Side */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >
                <button
                    style={{
                        background: "transparent",
                        color: "#f6f5f2",
                        border: "1px solid #f6f5f2",
                        padding: "0.65rem 1.2rem",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                    }}
                >
                    Resume
                </button>

                <button
                    style={{
                        backgroundColor: "#e7cf9f",
                        color: "#16352b",
                        border: "none",
                        padding: "0.65rem 1.2rem",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                    }}
                >
                    Read Blog →
                </button>
            </div>
        </nav>
    );
}