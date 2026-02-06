// app/page.tsx
export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top, #14532d, #052e16 60%, #020617)",
        color: "#e5e7eb",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 680, padding: "2rem" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            letterSpacing: "-1px",
          }}
        >
          MyFute
        </h1>

        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.25rem",
            opacity: 0.9,
          }}
        >
          Gestão e balanceamento de partidas com base em avaliações de
          desempenho
        </p>

        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.75rem",
            borderRadius: 14,
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <p style={{ fontSize: "1.05rem" }}>🚧 Em construção</p>
          <p style={{ marginTop: "0.5rem", opacity: 0.7 }}>
            Projeto em desenvolvimento ativo.
          </p>
        </div>

        <footer
          style={{
            marginTop: "3rem",
            fontSize: "0.85rem",
            opacity: 0.55,
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <span>© 2026 MyFute</span>

          <a
            href="https://github.com/MatheusFariasRS"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/matheus-aguiar-farias/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            LinkedIn
          </a>

          <a
            href="mailto:matheusaf.contato@gmail.com"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            Email
          </a>
        </footer>
      </div>
    </main>
  );
}
