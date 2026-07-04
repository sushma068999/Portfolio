export function Footer() {
    return (
        <footer
            style={{
                background: "#16352B",
                color: "#EDE9E3",
                padding: "1rem 5rem 1.7rem",
            }}
        >
            {/* Golden Divider */}

            <div
                style={{
                    height: "1px",
                    width: "100%",
                    background:
                        "linear-gradient(to right, transparent, #C8A96A, transparent)",
                    marginBottom: "1.7rem",
                }}
            />

            {/* Footer Content */}

            <div
                style={{
                    // display: "flex",
                    // justifyContent: "space-between",
                    // alignItems: "center",
                    // textAlign: "center",
                    // flexWrap: "wrap",
                    // gap: "2rem",
                }}
            >
                {/* Name */}

                <div>
                    <p
                        style={{
                            textAlign: "center",
                            marginTop: "0rem",
                            color: "#b9c9c2",
                            letterSpacing: "2px",
                            fontSize: ".85rem",
                        }}
                    >
                        SushmaRai@2026
                    </p>
                </div>
            </div>
        </footer>
    );
}