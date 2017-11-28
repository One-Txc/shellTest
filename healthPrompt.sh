#!/bin/bash

idArray=("r020601" "12124124");
replaceStr="XXX";

handleFile(){
	DONE=false
	until $DONE 
	do read || DONE=true
	     addToFile "${REPLY//$1/$2}" "./sss/"$2".html"
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

