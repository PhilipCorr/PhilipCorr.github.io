import {Router, Route, Link, RouteHandler} from 'react-router';

const Home = () =>
<div className="home">

<section  id="blog">
    <div className="blog-body">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading blog-heading">Python Interview Questions</h2>
            </div>
        </div>
        <div className="container-fluid">
            <p className="question">
                Talk to me about the GIL. How does it impact concurrency in Python? 
                What kinds of applications does it impact more than others?
            </p>
            <p className="answer">
                This is the answer...
            </p>


            <p className="question">
                How does Python's garbage collection work?
            </p>
            <p className="answer">
                This is the answer...
            </p>


            <p className="question">
                Types of Python:
            </p>
            <p className="answer">
                CPython compiles your python code into bytecode (transparently) and interprets that bytecode in a evaluation loop.

                Jython, IronPython and PyPy are the current 'other' implementations of the Python programming language
                There is a project that does translate Python-ish code to C, and that is called Cython. Cython adds a few extensions to the Python language, and lets you compile your code to C extensions, code that plugs into the CPython interpreter.

                What is the difference between range and xrange? How has this changed over time?
            </p>

            <p className="question">
                What is the difference between range and xrange? How has this changed over time?
            </p>
            <p className="answer">
                Range creates a list, so if you do range(1, 10000000) it creates a list in memory with 9999999 elements.

                xrange is a sequence object that evaluates lazily.
            </p>

            <pre className="language-python">
            def median(pool):
                '''Statistical median to demonstrate doctest.
                >>> median([2, 9, 9, 7, 9, 2, 4, 5, 8])
                7
                '''
                copy = sorted(pool)
                size = len(copy)
                if size % 2 == 1:
                    return copy[(size - 1) / 2]
                else:
                    return (copy[size/2 - 1] + copy[size/2]) / 2

            if __name__ == '__main__':
                import doctest
                doctest.testmod()
            </pre>

        </div>
    </div>
</section>
</div>
export default Home