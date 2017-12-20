import {Router, Route, Link, RouteHandler} from 'react-router';

const Home = () =>
<div className="home">

<section  id="blog">
    <div className="blog-body">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading blog-heading">Spark Installation</h2>
            </div>
        </div>
        <div className="container-fluid">
            <p className="question">
                Steps to install Apache Spark in local mode:
            </p>
            <p className="answer">
                1) Install Java 7 or later. To test java installation is complete, open command prompt type java and hit enter. 
                If you receive a message 'Java' is not recognized as an internal or external command. 
                You need to configure your environment variables, JAVA_HOME and PATH to point to the path of jdk.
            </p>
            <p className="answer">
            2) Download and install Scala.
                just double click installer (msi file) and go through the process.
                Scala automatically added to PATH.
                check here for location of install.
                For me was C:\Program Files (x86)\scala\bin
            </p>
            <p className="answer">
            3) Set SCALA_HOME in Control Panel\System and Security\System goto "Adv System settings" and add %SCALA_HOME%\bin in PATH variable in environment variables.
            </p>
            <p className="answer">
            4) Install Python 2.6 or later from Python Download link.
                My console output:
                (C:\Users\Phil\Anaconda3) C:\Spark\spark\bin>python -V
                Python 3.6.1 :: Anaconda 4.4.0 (64-bit)
            </p>
            <p className="answer">
            5) 
            Download SBT. Install it and set SBT_HOME as an environment variable with value as SBT PATH.
            </p>
            <p className="answer">
            6)
            Download winutils.exe from HortonWorks repo or git repo. 
            Since we don't have a local Hadoop installation on Windows we have to download winutils.exe and place it in a bin directory under a created Hadoop home directory. 
            Set HADOOP_HOME = Hadoop home directory in environment variable.
            We will be using a pre-built Spark package, so choose a Spark pre-built package for Hadoop Spark download. Download and extract it.
            </p>
            <p className="answer">
            7)
            Set SPARK_HOME and add %SPARK_HOME%\bin in PATH variable in environment variables.

            Insert Error here...

            Fix: Permissions issue. See this line specifically:
            Caused by: java.lang.RuntimeException: The root scratch dir: /tmp/hive on HDFS should be writable. Current permissions are: rw-rw-rw-

            This will show the permissions on the c:/tmp/hive file in question:
            c:\work\hadoop-2.2\bin\winutils.exe ls c:/tmp/hive

            This will change the permissions as required:
            D:\winutils\bin\winutils.exe chmod 777 D:\tmp\hive
            </p>
            <p className="answer">
            8)
            setx SPARK_HOME C:\opt\spark\spark-2.1.0-bin-hadoop2.7
            will allow spark to be run from anywhere
            </p>
            <p className="answer">
            8)
            Run command: spark-shell
            </p>
            <p className="answer">
            8)
            Open http://localhost:4040/ in a browser to see the SparkContext web UI.
            </p>
            <p className="answer">
            For standalone applications:
            1) pip install pyspark - what exactly is this for? (Not all of pyspark?)

            For Pycharm:
            1) Run > Edit Configurations > Environment Variables: PYSPARK_PYTHON C:\Users\Phil\Anaconda3\python.exe

            2) File > Settings > Project > Project Interpreter > gear icon > More > Show paths for selected interpreter > add C:\Spark\spark\python\lib\py4j-0.10.4-src.zip
            </p>


            <pre className="prettyprint" className="custom-code">{`
                class Voila {
                public:
                  // Voila
                  static const string VOILA = "Voila";

                  // will not interfere with embedded <a href="#voila2">tags</a>.
                }

            `}</pre>

        </div>
    </div>
</section>
</div>
export default Home