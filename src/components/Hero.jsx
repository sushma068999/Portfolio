export function Hero() {
  return (
    <section
      style={{
        paddingTop: "90px",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#16352B",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left Side */}

      <div
        style={{
          width: "55%",
          paddingLeft: "6rem",
          zIndex: 2,
          color: "white",
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
          PORTFOLIO 2026
        </p>

        <h1
          style={{
            fontFamily: "Bodoni Moda",
            fontSize: "6rem",
            lineHeight: "0.95",
            margin: 0,
            fontWeight: "800",
          }}
        >
          Sushma Rai
        </h1>

        <p
          style={{
            fontFamily: "Garamond Cormorant",
            fontSize: "1.35rem",
            marginTop: "2rem",
            color: "#d8e4de",
            width: "80%",
            lineHeight: "1.7",
          }}
        >
          As someone who enjoys building thoughtful digital experiences that combine clean design with powerful functionality, I m an AI/ML student who's constantly exploring new technologies, refining my skills and turning ideas into projects that challenge me as a developer.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "3rem",
          }}
        >
          <button
            style={{
              padding: "1rem 2rem",
              border: "none",
              borderRadius: "12px",
              background: "#C8A96A",
              color: "#16352B",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            View Projects
          </button>

          <button
            style={{
              padding: "1rem 2rem",
              borderRadius: "12px",
              border: "2px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Resume
          </button>
        </div>
      </div>

      {/* Right Side */}

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 1,
          width: "55%",
          height: "100%",
        }}
      >
        <img
          src="/me.jpeg"
          alt="Me"
          style={{
            paddingTop: "40px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Fade Overlay */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right,#16352B 0%,rgba(22,53,43,0.95) 18%,rgba(22,53,43,0.65) 35%,rgba(22,53,43,0.15) 60%,rgba(22,53,43,0) 100%)",
          }}
        />
      </div>
    </section>
  );
}