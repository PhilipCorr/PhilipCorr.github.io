import {Router, Route, Link, RouteHandler} from 'react-router';

const Home = () =>
<div className="home">

<section  id="blog">
    <div className="blog-header">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="blog-heading">Spark Installation On Windows</h2>
                <h4 className="blog-heading date">20/12/2017</h4>
            </div>
        </div>
    </div>
    <div className="blog-body">
        <div className="container-fluid">
            <p className="step">
                Necessary Components:
                <ul>
                    <li>Anaconda with python installed</li>
                    <li>Java</li>
                    <li>Scala</li>
                    <li>SBT (Scala Build Tool)</li>
                    <li>Hadoop</li>
                    <li>Spark</li>
                </ul>

            </p>
            <ol>
                <li className="step">
                    <p> Install <a href="https://conda.io/docs/user-guide/install/index.html"> Anaconda </a> 
                        and create an environment with Python 3.6 or later (3.6 was latest at time of writing).
                    </p>
                    <p> After correct installation python -V should show the following output:
                        (C:\Users\Phil\Anaconda3) C:\Spark\spark\bin>python -V
                        Python 3.6.1 :: Anaconda 4.4.0 (64-bit)</p>
                </li>
                <li className="step">
                    <p>
                        Check Which version of java you have by typing "java -version" into Command prompt.
                    </p>
                    <p>
                        We need Java because Spark runs on the JVM.
                        You may need to change the version of Java running on your computer. 
                        Java 9 had issues at the time of writing.
                        I switched back to Java 8 and I was good to go. Download Java 8 from 
                    <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"> here</a>. 
                    </p>
                    <p>
                        If you receive a message: 'Java' is not recognized as an internal or external command. 
                        You need to configure your environment variables, JAVA_HOME and PATH to point to the path of jdk.
                    </p>
                    <p>
                        Path: C:\Program Files\Java\jdk1.8.0_151\bin
                    </p>
                    <p>
                        JAVA_HOME: C:\Program Files\Java\jdk1.8.0_151
                    </p>
                </li>
                <li className="step">
                    <p>
                        Download the Scala binaries for windows 
                        from the <a href="https://www.scala-lang.org/download/">Scala website</a>. 
                        After downloading, double click the installer (msi file) and go through each of the steps.
                        Scala should be automatically added to your PATH environment variables.
                        check your path environment variables for the location.
                    </p>
                    <p>
                        For me it installed to: 
                        C:\Program Files (x86)\scala\bin
                    </p>
                </li>
                <li className="step">
                    <p>
                    Similarly to the previous step, download SBT, Scala Build Tool, for windows 
                    from the <a href="http://www.scala-sbt.org/download.html">Scala-sbt website</a>. 
                    After downloading, double click the installer (msi file) and go through each of the steps.
                    SBT should be automatically added to your PATH environment variables.
                    check your path environment variables for the location.
                     
                    </p>
                    <p>
                    For me it installed to:
                    C:\Program Files (x86)\sbt\bin
                    </p>
                </li>
                <li className="step">
                    Download winutils.exe from HortonWorks repo or git repo.

                    This curl command should allow you to download from command prompt:

                    curl -k -L -o winutils.exe https://github.com/steveloughran/winutils/blob/master/hadoop-2.6.0/bin/winutils.exe?raw=true

                    This is required as we don't have a local Hadoop installation on Windows.
                    Place it in a bin directory inside an empty created Hadoop home directory. 
                    Set HADOOP_HOME to the Hadoop home directory in environment variables.
                    HADOOP_HOME: C:\Spark\Hadoop

                </li>
                <li className="step">
                    Download Spark from: 
                    https://spark.apache.org/downloads.html
                    
                    Extract into a spark directory inside the Spark parent directory.

                    Set the SPARK_HOME variable. This will allow spark to be run from anywhere. 
                    For me it was C:\Spark\spark

                    Append %SPARK_HOME%\bin to the PATH variable in environment variables.

                    Java may throw an error here similar to:
                    The root scratch dir: /tmp/hive on HDFS should be writable. Current permissions are: ---------

                    Fix: This will show the permissions on the c:/tmp/hive file in question:
                    c:\work\hadoop-2.2\bin\winutils.exe ls c:/tmp/hive

                    This will change the permissions as required:
                    D:\winutils\bin\winutils.exe chmod 777 D:\tmp\hive

                </li>
                <li className="step">
                
                    Run command: spark-shell
                </li>
                <li className="step">
                    
                    Open http://localhost:4040/ in a browser to see the SparkContext web UI.
                </li>
            </ol>

            <p className="section-heading">
                For Standalone Applications:
            </p>
            <ol>
                <li className="step">
                <p>
                    pip install pyspark
                </p>
                <p>
                    This Python packaged version of Spark is suitable for 
                    interacting with an existing cluster (be it Spark standalone, YARN, or Mesos).
                    It does not contain the tools required to setup your own standalone Spark cluster.
                    Using PySpark requires the Spark JARs.
                </p>
                </li>
            </ol>
            <p className="section-heading">
                To Run In Pycharm:
            </p>
            <ol>
                <li className="step">
                    <p>These steps come from here:</p>
                    <p>https://stackoverflow.com/questions/34685905/how-to-link-pycharm-with-pyspark/36415945</p>
                    <p>
                    For running spark from pycharm and environment variable must be added from within pycharm:
                    </p>
                    <p>
                    Run > Edit Configurations > Environment Variables: PYSPARK_PYTHON C:\Users\Phil\Anaconda3\python.exe
                    </p>
                </li>
                <li className="step">
                    <p>
                        You also need to add a path to the python interpreter:
                    </p>
                    <p>
                        File > Settings > Project > Project Interpreter > gear icon > More > Show paths for selected interpreter > add C:\Spark\spark\python\lib\py4j-0.10.4-src.zip
                    </p>
                </li>
            </ol>
        </div>
    </div>
</section>
</div>
export default Home