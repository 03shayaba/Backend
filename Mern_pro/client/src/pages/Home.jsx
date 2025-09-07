import { Analytics } from "../component/Analytics";

export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the world Best Series</p>
                            <h1>welcome to My Portfolio</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis nostrum deserunt, exercitationem optio libero ullam! Quod dicta doloribus, iste, perspiciatis ipsum aperiam maiores sed eos architecto modi, ipsa magnam alias vero repellat accusamus voluptas sunt explicabo impedit non voluptatibus! Doloribus quasi accusantium repellendus maiores! Perferendis possimus sunt, tempora explicabo earum, hic praesentium expedita ea magni corporis nesciunt, aliquid aperiam.</p>
                            <div className="btn btt-group">
                                <a href="/contact">
                                    <button className="btn">connect Now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn  secondary-btn">Learn More</button>
                                </a>
                            </div>
                        </div>


                        {/* hero images */}
                        <div className="hero-image">
                            <img src="/images/home.png" alt="coding together " width="400" height="500" />
                        </div>

                    </div>
                </section>
            </main>

            {/* second section */}
            

            <Analytics />


            {/* 3rd section */}
            <section className="section-hero">



                <div className="container grid grid-two-cols">
                    
                        <div className="hero-image">
                            <img src="/images/design.png" alt="coding together " width="400" height="500" />
                        </div>
                        <div className="hero-content">
                        <p>We are the world Best Series</p>
                        <h1>welcome to My Portfolio</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis nostrum deserunt, exercitationem optio libero ullam! Quod dicta doloribus, iste, perspiciatis ipsum aperiam maiores sed eos architecto modi, ipsa magnam alias vero repellat accusamus voluptas sunt explicabo impedit non voluptatibus! Doloribus quasi accusantium repellendus maiores! Perferendis possimus sunt, tempora explicabo earum, hic praesentium expedita ea magni corporis nesciunt, aliquid aperiam.</p>
                        <div className="btn btt-group">
                            <a href="/contact">
                                <button className="btn">connect Now</button>
                            </a>
                            <a href="/services">
                                <button className="btn  secondary-btn">Learn More</button>
                            </a>
                        </div>
                    </div>


                    {/* hero images */}


                </div>
            </section>
        </>
    );
};