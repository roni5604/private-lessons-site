import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>המורה רוני</h1>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>בית</Link>
        <Link to="/about" style={styles.link}>קצת עליי</Link>
        <Link to="/contact" style={styles.link}>יצירת קשר</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", padding: "15px", background: "#333", color: "#fff" },
  logo: { fontSize: "24px" },
  links: { display: "flex", gap: "15px" },
  link: { color: "#fff", textDecoration: "none", fontSize: "18px" }
};

export default Navbar;
