export const Header = ({onOpenModal}) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <button className="btn btn-outline-success" onClick={onOpenModal}>Open Modal</button>
      </div>
    </nav>
  );
};
