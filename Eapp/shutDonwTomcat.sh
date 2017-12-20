#!/bin/bash  


startTomcat(){
	cd /Users/user/Desktop/apache-tomcat-8.0.30-${1}/bin/
	./startup.sh
}

stopTomcat(){
	cd /Users/user/Desktop/apache-tomcat-8.0.30-${1}/bin/
	./shutdown.sh
}

xx=`ps aux|grep tomcat`

tomcat5="apache-tomcat-8.0.30-5"
tomcat4="apache-tomcat-8.0.30-4"

has5=$(echo $xx | grep "${tomcat5}")
if [[ "$has5" != "" ]]
then
    echo "关闭5"
    stopTomcat "5"
fi

has4=$(echo $xx | grep "${tomcat4}")
if [[ "$has4" != "" ]]
then
    echo "关闭4"
    stopTomcat "4"
fi
