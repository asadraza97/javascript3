// // Q1------------------
document.write("Assignment: 1")
document.write("Result:")
document.write("<br>")
a = 10
document.write("The Value of a is:"+ a)
document.write("<br>")
document.write("-----------------------------")

document.write("<br>")
document.write("The Value of ++a is:"+ ++a)
document.write("<br>")
document.write("Now the Value of ++a is:" +a)
document.write("<br>")
document.write("<br>")

document.write("The Value of a++ is:"+ a++)
document.write("<br>")
document.write("Now the Value of a is:" +a)
document.write("<br>")
document.write("<br>")

document.write("The Value of --a is:"+ --a)
document.write("<br>")
document.write("Now the Value of a is:" + a)
document.write("<br>")
document.write("<br>")

document.write("The Value of a++ is:"+ a--)
document.write("<br>")
document.write("Now the Value of a is:" +a)
document.write("<br>")

// Q2-------------------------------

document.write("<br>")
document.write("<br>")

var a = 2
document.write("a is "+ a)
document.write("<br>")

var b = 1
document.write("a is "+ b)
document.write("<br>")
var result= --a - --b + ++b + b-- ;
              1 -   0 +   1 + 1
document.write("Result is " + result  )
document.write("<br>")
document.write("<br>")



// Q3--------------------------------------

 var fullname = prompt("Enter your user name")
 document.write(fullname)
document.write("<br>")
document.write("<br>")
// //  Q4------------------------------------

var number = prompt("Write on the table")
console.log(number , " x 1 = " , number*1)
console.log(number , " x 2 = " , number*2)
console.log(number , " x 3 = " , number*3)
console.log(number , " x 4 = " , number*4)
console.log(number , " x 5 = " , number*5)
console.log(number , " x 6 = " , number*6)
console.log(number , " x 7 = " , number*7)
console.log(number , " x 8 = " , number*8)
console.log(number , " x 8 = " , number*9)
console.log(number , " x 10 = " , number*10)



// Q5-----------------------------------------

var subject1 = prompt('subject no.1')
var subject2 = prompt('subject no.2')
var subject3 = prompt('subject no.3')

var totalMarks = 100

var marks1 = prompt('marks no 1')
var marks2 = prompt('marks no 2')
var marks3 = prompt('marks no 3')

var percentage1 = ((marks1 / totalMarks))* 100 
var percentage2 = ((marks2 / totalMarks))* 100 
var percentage3 = ((marks3 / totalMarks))* 100 

document.write(subject1 + "  " + totalMarks + "  " + marks1  + "  " + percentage1 + "%<br>" )
document.write(subject2 + "  " + totalMarks + "  " + marks2  + "  " + percentage2 + "%<br>" )
document.write(subject3 + "  " + totalMarks + "  " + marks3  + "  " + percentage3 + "%<br>"  )

// document.write( (marks1 + marks2 + marks3 )+ "       "+ (subject1 + subject2 + subject3 )+ "      " + (percentage1 + percentage2 + percentage3 ))









