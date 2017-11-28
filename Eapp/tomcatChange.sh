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
    echo "关闭5开启4"
    stopTomcat "5"
    startTomcat "4"
fi

has4=$(echo $xx | grep "${tomcat4}")
if [[ "$has4" != "" ]]
then
    echo "关闭4开启5"
    stopTomcat "4"
    startTomcat "5"
fi

if [[ "$has5" == "" && "$has4" == "" ]]; 
then
	echo "都不包含，开启5"
	startTomcat "5"
fi
