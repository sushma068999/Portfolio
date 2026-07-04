export function Contact() {
    const socials = [
        {
            name: "GitHub",
            icon: "/github.png",
            link: "https://github.com/sushma068999",
        },
        {
            name: "LinkedIn",
            icon: "/linkedin.png",
            link: "https://www.linkedin.com/in/sushma-rai-257722411/",
        },
        {
            name: "Mail",
            icon: "/mail.png",
            link: "mailto:sushma08.rai@gmail.com",
        },
        {
            name: "Phone",
            icon: "/call.png",
            link: "tel:+91 82629 63798",
        },
    ];

    return (
        <section
            style={{
                background: "#16352B",
                color: "white",
                padding: "8rem 5rem",
                textAlign: "center",
            }}
        >
            <p
                style={{
                    color: "#C8A96A",
                    letterSpacing: "3px",
                    marginBottom: "1rem",
                }}
            >
                CONTACT
            </p>

            <h1
                style={{
                    fontFamily: "Bodoni Moda",
                    fontSize: "4.5rem",
                    marginBottom: "1.5rem",
                }}
            >
                Let's Build Something Together
            </h1>

            <p
                style={{
                    fontFamily: "Garamond Cormorant",
                    color: "#c8d6cf",
                    maxWidth: "900px",
                    margin: "0 auto",
                    lineHeight: "2",
                    fontSize: "1.25rem",
                }}
            >
                Whether it's a project, collaboration, or simply a conversation,
                my inbox is always open.
            </p>

            <div
                style={{
                    width: "100%",
                    maxWidth: "700px",
                    margin: "2rem auto",
                    borderTop: "1px solid rgba(255,255,255,.08)",
                    // borderBottom: "1px solid rgba(255,255,255,.08)",
                    padding: "1rem 0",
                }}
            >
                {/* <div style={{ marginBottom: "2rem" }}>
                    <p
                        style={{
                            color: "#C8A96A",
                            letterSpacing: "2px",
                            fontSize: ".8rem",
                            marginBottom: ".6rem",
                        }}
                    >
                        EMAIL
                    </p>

                    <h2
                        style={{
                            fontWeight: "500",
                            margin: 0,
                            fontSize: "1.3rem",
                        }}
                    >
                        sushma08.rai@gmail.com
                    </h2>
                </div>

                <div>
                    <p
                        style={{
                            color: "#C8A96A",
                            letterSpacing: "2px",
                            fontSize: ".8rem",
                            marginBottom: ".6rem",
                        }}
                    >
                        PHONE
                    </p>

                    <h2
                        style={{
                            margin: 0,
                            fontWeight: "500",
                            fontSize: "1.3rem",
                        }}
                    >
                        +91 82629 63798
                    </h2>
                </div> */}
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1.5rem",
                }}
            >
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                            background: "#203A31",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid rgba(255,255,255,.08)",
                            transition: ".35s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(-8px)";
                            e.currentTarget.style.boxShadow =
                                "0 25px 60px rgba(0,0,0,.25)";
                            e.currentTarget.style.border =
                                "1px solid rgba(200,169,106,.35)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.border =
                                "1px solid rgba(255,255,255,.08)";
                        }}
                    >
                        <img
                            src={social.icon}
                            alt={social.name}
                            style={{
                                marginTop: 0,
                                width: "38px",
                                height: "38px",
                            }}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}