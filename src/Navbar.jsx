import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (

    <main className="focus-page">
      <nav className="navbar navbar-expand-md px-4 py-3">
        <div className="container-fluid">
          <div className="d-flex align-items-center gap-3">
            <a className="navbar-brand text-white fw-bold fs-2 m-0" href="#">
                <i className="title bi-stack me-2">
                  FocusStack
                </i>
            </a>

            <button className="glass-button">
              <i className="bi bi-link-45deg">
                Deep Focus
              </i>
            </button>
          </div>

          {/* Add the navbar toggler button for mobile view */}
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#focusNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="focusNavbar" className="collapse navbar-collapse justify-content-end">
            <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
              <button className="glass-button">
                <i className="bi bi-fire">
                  2
                </i>
              </button>

              <button id="timeSpentButton" className="glass-button">
                <i className="bi bi-clock">
                  10h 15m
                </i>
              </button>

              <button id="analyticsButton" className="glass-button icon-button">
                <i className="bi bi-bar-chart"></i>
              </button>

              <button id="videoButton" className="glass-button icon-button">
                <i className="bi bi-camera-video"></i>
              </button>

              <button id="userProfileButton" className="glass-button">
                Isaac Diaz
              </button>

              <button id="profileButton" className="profile-button">
                ID
              </button>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Header;
