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
                <div className="row">
                    <div className="col-lg-4 blog-picture">
                        <img src="img/tensor-board.png" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-lg-8 blog-text">
                        <h3 className="blog-title">An Introduction to Convolutional Neural Networks</h3>
                            <Link className="read-more" to="/CNN">Read More</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 blog-picture">
                        <img src="img/qlik.png" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-lg-8 blog-text">
                        <h3 className="blog-title">An Introduction to Convolutional Neural Networks</h3>
                            <Link className="read-more" to="/CNN">Read More</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 blog-picture">
                        <img src="img/hybris.png" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-lg-8 blog-text">
                        <h3 className="blog-title">An Introduction to Convolutional Neural Networks</h3>
                            <Link className="read-more" to="/CNN">Read More</Link>
                    </div>
                </div>
        </div>
    </div>
</section>
</div>
export default Home