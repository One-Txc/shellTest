#!/bin/sh


# echo `seq 1 30`



read var

unset var
while [ "$var" != "end" ]
do
     echo -n "please input a number: "
     read var
     if [ "$var" = "end" ]
     then
         # break
         echo "var is $var"
     fi
     echo "var is $var"
done

