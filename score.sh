#!/bin/bash

#stop command
node_modules/.bin/pm2 kill

#run command
node_modules/.bin/pm2 start -f App.js --watch
sleep 5
score=0 

add=`curl -s 'http://localhost:8000/cal?func=add&a=20&b=5'`
sub=`curl -s 'http://localhost:8000/cal?func=subtract&a=200&b=150'`
mul=`curl -s 'http://localhost:8000/cal?func=multiple&a=25&b=25'`
div=`curl -s 'http://localhost:8000/cal?&a=100&b=4'`

if [ "$add" == "Addition is: 25" ]
then 
    score=$((score + 25))
fi
if [ "$sub" == "Subtraction is: 50" ]
then 
    score=$((score + 25))
fi
if [ "$mul" == "Multiplication is: 625" ]
then
    score=$((score + 25))
fi
if [ "$div" == "Division is: 25" ]
then
    score=$((score + 25))
fi

echo "FS_SCORE:$score%"
