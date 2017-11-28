#!/bin/bash

idArray=(
	"r020101"
	"r020202"
	"r020301"
	"r020401"
	"r020402"
	"r020403"
	"r020601"
	"r020602"
	"r020603"
	"r020604"
	"r020605"
	"r020606"
	"r020607"
	"r020608"
	"r020609"
	"r020610"
	"r020611"
	"r020612"
	"r020613"
	"r020701"
	"r020702"
	"r020801"
	"r020901"
	"r021002"
	"r021003"
	"r021004"
	);
replaceStr="XXX";

handleFile(){
	DONE=false
	until $DONE 
	do read || DONE=true
	     addToFile "${REPLY//$1/$2}" "z-"$2".html"
	done < $3
}

addToFile(){
	echo $1 >> $2
}


index=0
while(( $index<${#idArray[*]} ))
do
    handleFile ${replaceStr} ${idArray[$index]} "model.html"
    let "index++"
done

