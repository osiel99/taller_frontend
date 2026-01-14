export default function Topbar() {
  return (
    <div style={{
      width: "100%",
      height: "60px",
      background: "#f1f5f9",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 20px",
      boxSizing: "border-box",
      borderBottom: "1px solid #e2e8f0"
    }}>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        style={{
          background: "#ef4444",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
