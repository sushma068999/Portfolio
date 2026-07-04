export function Philosophy() {
    const cards = [
        {
            title: "Curently",
            value: "Diploma Student (AI/ML)",
        },
        {
            title: "Experience",
            value: "Intern at Elite Forums",
        },
        {
            title: "Learning",
            value: "React • Python • Machine Learning",
        },
        {
            title: "Current Project",
            value: "LifeOS - Personal OS",
        },
    ];

    return (
        <section
            style={{
                background: "#16352B",
                color: "#f5f5f5",
                padding: "7rem 5rem",
                display: "flex",
                gap: "5rem",
                justifyContent: "space-between",
                alignItems: "flex-start",
            }}
        >
            {/* LEFT */}
            <div
                style={{
                    flex: "1.5",
                    maxWidth: "800px",
                }}
            >
                <p
                    style={{
                        color: "#C8A96A",
                        letterSpacing: "3px",
                        fontSize: "1rem",
                        marginBottom: "1rem",
                    }}
                    >
                    PHILOSOPHY
                </p>

                <h1
                    style={{
                        fontFamily: "Bodono Moda",
                        fontSize: "5rem",
                        lineHeight: "0.95",
                        margin: 0,
                        marginBottom: "2rem",
                        color: "#ffffff",
                    }}
                >
                    Building With Intention
                </h1>

                <p
                    style={{
                        fontFamily: "Garamond Cormorant",
                        fontSize: "1.35rem",
                        color: "#c9d8d1",
                        lineHeight: "2",
                    }}
                >
                    I believe meaningful software begins with curiosity.
                    <br/>
                    <br/>
                    Every project I build is an opportunity to understand people better, solve problems thoughtfully, and improve my craft. Rather than chasing trends, I focus on building experiences that are clean, purposeful, and designed with intention.
                    <br/>
                    <br/>
                    As an AI & Machine Learning student, I see technology as a lifelong pursuit of learning. Every challenge teaches something new, every mistake becomes experience, and every finished project represents another step toward becoming the engineer I aspire to be.
                </p>
            </div>

            {/* RIGHT */}
            <div
                style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    // alignItems: "center",
                }}
            >
                {cards.map((card) => (
                    <div
                        key={card.title}
                        style={{
                            // background: "rgba(255,255,255,0.06)",
                            // border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "12px",
                            padding: "18px 34px",
                            background: "linear-gradient(135deg,#203A31,#27463B)",
                            border: "1px solid rgba(255,255,255,.08)",
                            boxShadow: "0 12px 35px rgba(0,0,0,.18)",
                            transition: "all .35s ease",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(-8px)";
                            e.currentTarget.style.boxShadow =
                                "0 28px 55px rgba(0,0,0,.35)";
                            e.currentTarget.style.border =
                                "1px solid rgba(217,179,106,.35)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(0)";
                            e.currentTarget.style.boxShadow =
                                "0 18px 35px rgba(0,0,0,.18)";
                            e.currentTarget.style.border =
                                "1px solid rgba(255,255,255,.08)";
                        }}
                    >
                        <p
                            style={{
                            color: "#C8A96A",
                            letterSpacing: "3px",
                            fontSize: "1rem",
                            marginBottom: "1rem",
                            }}
                        >
                            {card.title}
                        </p>

                        <h3
                            style={{
                                fontFamily: "Modoni Boda",
                                marginTop: "16px",
                                marginBottom: 0,
                                fontSize: "2rem",
                                fontWeight: "700",
                                color: "#f6f3eb",
                            }}
                        >
                            {card.value}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}