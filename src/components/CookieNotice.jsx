import { useState, useEffect } from "react";

function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-accepted", "yes");
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#222",
        color: "#fff",
        padding: "1em 0.5em",
        zIndex: 9999,
        textAlign: "center",
        fontSize: "1em",
      }}
    >
      Este sitio utiliza cookies para mejorar tu experiencia. Al continuar
      navegando aceptas nuestra{" "}
      <a href="#" style={{ color: "#ffe066", textDecoration: "underline" }}>
        Política de Cookies
      </a>
      .
      <button
        onClick={acceptCookies}
        style={{
          marginLeft: 16,
          background: "#3bb77e",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "0.5em 1.2em",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Aceptar
      </button>
    </div>
  );
}

export default CookieNotice;
