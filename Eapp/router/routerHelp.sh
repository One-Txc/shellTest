#!/bin/bash

handleFile(){
	# echo $1
	# echo $2
	# echo $3

	# echo "--------start--------"
	needReplace=false
	replaceStr=""

	DONE=false
	until $DONE 
	do read || DONE=true
		echo $REPLY
		str=$REPLY
		hasState=$(echo $REPLY | grep ".state(")
		if [[ "$hasState" != "" ]]
		then
			line=$REPLY
			string="('"
			s=${line/${string}*/}
			startIndex=`expr $((${#s} )) + ${#string} `

			string="',"
			e=${line/${string}*/}
			endIndex=$((${#e} + 1))
			replaceStr=${line:$startIndex:`expr $endIndex - $startIndex - 1`}
			needReplace=true
		elif [[ $needReplace ]]
	    then
	    	needReplace=false
			str=${REPLY//"XXXYYY"/$replaceStr}
	    fi
	    echo $str >> "newRouter.js"
	done < $1
	# echo "---------end---------"
}


handleFile router.js
