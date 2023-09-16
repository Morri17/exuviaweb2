import "../CSS/Header.css";
import logoexuvia from "../assets/Imagenes/ExuviaAgro - Isotipo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = ({ sections }) => {
  const handleSectionChange = (sectionId) => {
    const section = sections.find((section) => section.id === sectionId);
    if (section) {
      section.ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderNavLinks = () => {
    return sections.map((section) => (
      <Nav.Item key={section.id}>
        <Nav.Link href="#" onClick={() => handleSectionChange(section.id)}>
          {section.label}
        </Nav.Link>
      </Nav.Item>
    ));
  };

  return (
    <Navbar expand="lg" bg="light">
      <div className="container">
        <Navbar.Brand href="/">
          <img className="logo" src={logoexuvia} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="ml-auto">
            {sections.map((section) => (
              <Nav.Item key={section.id}>
                <Nav.Link
                  href="#"
                  onClick={() => handleSectionChange(section.id)}
                >
                  {section.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
