export let Navig = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow-lg">
                <div className="container">
                    <a className="navbar-brand mx-auto d-lg-none" href="index.html">
                        Medic Care
                        <strong className="d-block">Health Specialist</strong>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#hero">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#timeline">Timeline</a>
                            </li>
                            <li className="mb-3">
                                
                            </li>

                            <a className="navbar-brand d-none d-lg-block text-primary" href="index.html">
                                Medic Care
                                <strong className="d-block text-dark">Health Specialist</strong>
                            </a>

                            <li className="nav-item">
                                <a className="nav-link" href="#reviews">Testimonials</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#booking">Booking</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
}