import './Skills.css'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="600">
                {/* frontend skills */}
                <div className="skills__content">
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Html</h3>
                                    <span className='skills__level'>Basic</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Bootstrap</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Redux</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                        {/* 2nd group */}
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Css</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Tailwind</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">TypeScript</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">RTK Query</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* backend skills */}
                <div className="skills__content">

                    <div className="skills__box">
                        <div className="skills__group">
                            {/* <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">React router</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div> */}
                            {/* <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Tanstack Query</h3>
                                    <span className='skills__level'>Basic</span>
                                </div>
                            </div> */}
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">React</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Framer Motion</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Node.js</h3>
                                    <span className='skills__level'>Basic</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">MongoDB</h3>
                                    <span className='skills__level'>Basic</span>
                                </div>
                            </div>
                            {/* <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Git</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div> */}
                        </div>
                        {/* 2nd group */}
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Next Js</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Firebase</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                            {/* <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Axios</h3>
                                    <span className='skills__level'>Firebase</span>
                                </div>
                            </div> */}
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Express.js</h3>
                                    <span className='skills__level'>Basic</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Github</h3>
                                    <span className='skills__level'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;