import MainMenu from './MainMenu'
import {Router, Route, Link, RouteHandler} from 'react-router';

const Home = () =>
<div className="home">

<section  id="blog">
    <div className="blog-body">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading blog-heading">Blog</h2>
            </div>
        </div>
        <div className="container-fluid">
            <Link to="/Spark-Installation">
                <div className="row blog-snippet">
                    <div className="col-lg-4 blog-picture">
                        <img src="img/logos/spark.png" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-lg-8 blog-text">
                        <h3 className="blog-title">How to install spark on windows</h3>
                            <p className="blog-p"></p>
                    </div>
                </div>
            </Link>

                {/*
                <div className="row blog-snippet">
                    <div className="col-lg-4 blog-picture">
                        <img src="img/logos/python-xl.png" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-lg-8 blog-text">
                        <h3 className="blog-title">Python interview Questions</h3>
                            <p className="blog-p">List of python questions I put together while preparing for interviews.
                            My main language is python so I decided to focus on that.</p>
                    </div>
                    <Link to="/Python-Interview-Questions" className="read-more">Read More</Link>
                </div>
                */}
        </div>
    </div>
</section>
</div>
export default Home