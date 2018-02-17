import {Link} from 'react-router';

const blog = () =>
	<div className="home">
		<section id="blog">
			<div className="blog-body">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading blog-heading">Blog</h2>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row blog-snippet">
						<div className="col-lg-4 blog-picture">
							<img src="img/logos/python-xl.png" className="img-responsive" alt="" />
						</div>
						<div className="col-lg-8 blog-text">
							<h3 className="blog-title">Python interview Questions</h3>
							<p className="blog-p">List of python questions I put together while preparing for interviews.
							My main language is python so I decided to focus on that.</p>
						</div>
						<Link to="/Python-Interview-Questions" className="read-more">Read More</Link>
					</div>
					<div className="row blog-snippet">
						<div className="col-lg-4 blog-picture">
							<img src="img/qlik.png" className="img-responsive" alt="" />
						</div>
						<div className="col-lg-8 blog-text">
							<h3 className="blog-title">An Introduction to Convolutional Neural Networks</h3>
						</div>
						<Link className="read-more" to="/CNN">Read More</Link>
					</div>
					<div className="row blog-snippet blog-final-snippet">
						<div className="col-lg-4 blog-picture">
							<img src="img/hybris.png" className="img-responsive" alt="" />
						</div>
						<div className="col-lg-8 blog-text">
							<h3 className="blog-title">An Introduction to Convolutional Neural Networks</h3>
						</div>
						<Link className="read-more" to="/CNN">Read More</Link>

					</div>
				</div>
			</div>
		</section>
	</div>
export default blog;