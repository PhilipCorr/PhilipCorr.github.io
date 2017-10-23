import MainMenu from './MainMenu'

const Home = () =>
<div className="home">

<section  id="blog">
    <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading">Blog</h2>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row" id="iOS">
            <div className="row">
                <div className="col-lg-12 text-center project-title">
                    <h3 className="section-heading iOS-title">Neural Networks for iOS</h3>
                </div>
            </div>
                <div className="col-lg-4">
                    First Post
                </div>
                <div className="col-lg-6">
                    Second Post
                </div>
                <div className="col-lg-2">
                    Read More
                </div>
        </div>
    </div>
        <div className="row" id="CNN">
            <div className="row">
                <div className="col-lg-12 text-center project-title">
                    <h3 className="section-heading">Convolutional Neural Networks</h3>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="browser tf-browser">
                    <div className="task-bar">
                        <div className="inshadow"><a></a></div>
                        <div className="buttons"><a></a></div>
                    </div>
                    <div className="address-bar">
                        <div className="address">
                            <div className="input">
                                <div className="search"></div>
                                <div className="input-text">localhost</div>
                            </div>
                        </div>
                    </div> 
                    <img src="img/tensor-board.png" className="img-responsive" alt=""/>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="project-description-right">
                    <p>
                        Convolutional neural networks read in the input images in batches and pass a filter over the pixels of each image. The convolution operation is then performed on the pixels exposed by the filter. The convolution operation allows features to be extracted from the images. Down sampling then occurs in order to reduce the computational power requred to process the data. These steps are then repeated and each iteration is known as a layer in the network. Each consecutive layer results in more and more abstract feature extraction. After completing these iterations there is a fully connected layer. This means that every neuron in the second last layer is connected to every neron in the final layer. The output is then classNameified by applying a logistic function to the final fully connected layer. This results in a percentage which indicates how likely the input is to match each of the possible classNameifications.
                    </p>
                    <p>
                        The network shown on the left was trained using TensorFlow, google's machine learning library. This library is built using python. The graph was generated from tensorboard, a suite of visualisation tools for displaying neural networks created which have been built and trained using TensorFlow. This networks input data is a combination of MNIST and my data set. A combination of data was used as this networks was created and trained during initial stages of the project. I used python and pycharm to preprocess my data to ensure that it was in the same format as the MNIST dataset.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-12 text-center project-title">
            <h3 className="section-heading">Beech Lane Farmhouse</h3>
        </div>
        <div className="row" id="farm-house">
            <div className="col-lg-8">
                <div className="browser">
                    <div className="task-bar">
                        <div className="inshadow"><a></a></div>
                        <div className="buttons"><a></a></div>
                    </div>
                    <div className="address-bar">
                        <div className="address">
                            <div className="input">
                                <div className="search"></div>
                                <div className="input-text">www.beechlanefarmhouse.com</div>
                            </div>
                        </div>
                    </div>
                    <a href="http://www.beechlanefarmhouse.com">   
                        <img src="img/beech-lane-farm-house.jpg" className="img-responsive" alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="project-description-right">
                    <div className="row">
                    </div>
                    <p>Website for self catering accomodation designed using HTML, CSS, bootstrap, jQuery and Ajax. Using Ajax, pages are fetched asynchonously. This allows page content to change dynamically without reloading the page. Jquery is responsible for the dynamic page transitions. </p> 
                </div>
            </div>
        </div>
        <div className="row" id="roasted-pepper">
            <div className="row">
                <div className="col-lg-12 text-center project-title">
                    <h3 className="section-heading">Roasted Pepper</h3>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="browser">
                    <div className="task-bar">
                        <div className="inshadow"><a></a></div>
                        <div className="buttons"><a></a></div>
                    </div>
                    <div className="address-bar">
                        <div className="address">
                            <div className="input">
                                <div className="search"></div>
                                <div className="input-text">https://roasted-pepper.herokuapp.com</div>
                            </div>
                        </div>
                    </div>
                    <a href="https://roasted-pepper.herokuapp.com"> 
                        <img src="img/roasted-pepper.png" className="img-responsive" alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="project-description-right">
                    <p>
                        AngularJS single page application built as part of a 2 week agile sprint in college. Best practices and design patterns were used to ensure clean code. Two way data binding ensures that the model and view are consistently synchronised. The MVC pattern was implemented and a number of controllers and services manage the business logic for the application. Custom directives and filters manipulate the dom as needed.
                    </p>

                    <p>
                        Nodejs is responsible for handling the server side logic and serves the application's initial state when initially requested by the client. Further page changes use the angular router to load and inject the necessary html partials and controllers asynchronously. Heroku, the cloud application PaaS, was used to host the application.
                    </p>

                </div>
            </div>
        </div>
        <div className="row" id="roasted-pepper-responsive">
            <div className="col-lg-4">
                <a href="https://roasted-pepper.herokuapp.com">
                    <div className="iphone-border">
                        <span className="top left">
                            <span className="ringer"></span>
                            <span className="volume up"></span>
                            <span className="volume down"></span>
                        </span>
                        <span className="top right">
                            <span className="power"></span>
                        </span>
                        <span className="bottom left"></span>
                        <span className="bottom right"></span>

                        <div className="iphone">    
                            <span className="speaker"></span>
                            <div className="screen">
                                <img className="phone-img" src="img/recipe.png" alt="" />
                            </div>
                        </div>
                    </div>
                </a>
            </div>  
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-lg-12 text-center project-title">
                        <h3 className="section-heading">API and Database</h3>
                    </div>
                </div>
                <div className="project-description-middle ">
                    <p>Requests are created from the users input and these requests are then sent to Spoonacular's database using their RESTful API. The JSON returned is then parsed and the data is used to populate the view. Postman, Google chrome's extension, allows for quick verification of API calls and it provides insight into how to best parse the returned JSON. Unit tests were written to test the application. Jasmine was used as the test framework, Karma as a test runner and Grunt was used to automate testing. Github was used to collaboratively develop the app with two other team members. Merge conflicts were also handled through git. 
                    </p>

                    <p>All of my projects are tested across a number of devices and browsers to ensure that the design is reponsive across platforms. Chrome's developer tools allow multiple devices to be tested effectively.</p> 
                </div>
            </div>
            <div className="col-lg-4">
                <a href="https://roasted-pepper.herokuapp.com">
                    <div className="iphone-border">
                        <span className="top left">
                            <span className="ringer"></span>
                            <span className="volume up"></span>
                            <span className="volume down"></span>
                        </span>
                        <span className="top right">
                            <span className="power"></span>
                        </span>
                        <span className="bottom left"></span>
                        <span className="bottom right"></span>

                        <div className="iphone">    
                            <span className="speaker"></span>
                            <div className="screen">
                                <img className="phone-img" src="img/shopping-list.png" alt="" />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="row" id="qlik">
            <div className="row">
                <div className="col-lg-12 text-center project-title">
                    <h3 className="section-heading">Qlik Financial Services</h3>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="browser">
                    <div className="task-bar">
                        <div className="inshadow"><a></a></div>
                        <div className="buttons"><a></a></div>
                    </div>
                    <div className="address-bar">
                        <div className="address">
                            <div className="input">
                                <div className="search"></div>
                                <div className="input-text"></div>
                            </div>
                        </div>
                    </div>    
                    <a src="http://www.qlik.com/us/solutions/industries/financial-services">
                        <img src="img/qlik.png" className="img-responsive" alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="project-description-right">
                    <p>Demo website built for the Qlik financial services team. Provides a single consistent access point to various resources required by the financial services team such as banking apps, risk management apps, credit risk apps, webinars and blogs. Uses standard web technologies such as HTML, CSS and JS. Also included a contact form. Bootstrap was used to quickly create a responsive website and this was then built upon to provide the solution that the financial team were looking for. Photoshop was also used to create custom icons for these resources</p> 
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col-lg-12 text-center project-title">
                        <h3 className="section-heading" id="hybris">Hybris E-Commerce Solution</h3>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="browser">
                        <div className="task-bar">
                            <div className="inshadow"><a></a></div>
                            <div className="buttons"><a></a></div>
                        </div>
                        <div className="address-bar">
                            <div className="address">
                                <div className="input">
                                    <div className="search"></div>
                                    <div className="input-text">https://www.hybris.com/en/</div>

                                </div>
                            </div>
                        </div> 
                        <a href="https://www.hybris.com/en/">  
                            <img src="img/hybris.png" className="img-responsive" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="project-description-right">
                        <p>Interned with the Hybris team in SAP for 7 months. Worked on full stack java and javascript development of Hybris, SAP's Omnichannel e-commerce solution. This work involved developing a product comparison feature for Hybris and creating a QA framework for testing Hybris. The QA framework ran end to end tests using the Silenium testing framework. While there, I also implemented REST and SOAP based web services to automate credit report transfers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
export default Home