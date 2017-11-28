#!/bin/bash


oldStrArray=("xxx" "IS" "MAX" "MIN");
newStrArray=("yyy" "is" "max" "min");

# newStrArray=("xxx" "IS" "MAX" "MIN");
# oldStrArray=("yyy" "is" "max" "min");


##################下面这种方式可以读取文件的最后一行,会多读一个空行#################
# DONE=false
# until $DONE 
# do read || DONE=true
#     echo "$REPLY"
# done < ${files}
# ##################下面这种方式无法读取到文件的最后一行#################
# while read line
# do
#     echo "$line 1 n"
# done < ${file}
# ############################################################


handleFile(){
	# echo $1
	# echo $2
	# echo $3

	# echo "--------start--------"
	DONE=false
	until $DONE 
	do read || DONE=true
	     # echo $REPLY		##REPLY文本每一行的内容
	     # echo ${REPLY//$1/$2} >> $3".copy"  #这里可根据实际用途变化
	     # echo "${REPLY//$1/$2}"
	     addToFile "${REPLY//$1/$2}" $3".copy"
	done < $3
	# echo "---------end---------"
	mv $3 $3".old"
	mv $3".copy" $3
	rm $3".old"
}

handleFileWay2(){

	while read line
	do
	    addToFile "${REPLY//$1/$2}" $3".copy"
	done < $3
	
	mv $3 $3".old"
	mv $3".copy" $3
	rm $3".old"
}

addToFile(){
	# echo "--------xxxx--------"
	# echo $1
	# echo $2
	# echo "--------yyyy--------"
	echo $1 >> $2
}




index=0
# handleFile ${oldStrArray[$index]} ${newStrArray[$index]} test.json
while(( $index<${#newStrArray[*]} ))
do
	if 	`[ $(($index%2)) == 0 ]`
	then
		# echo "xxx"
    	handleFile ${oldStrArray[$index]} ${newStrArray[$index]} test.json
    elif [ $(($index%2)) == 1 ]
    then
    	echo "yyy"
    	# handleFileWay2 ${oldStrArray[$index]} ${newStrArray[$index]} test.json
    fi
    let "index++"
done




