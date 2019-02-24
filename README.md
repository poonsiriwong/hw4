# hw4

How many lines are drawn each frame? In other words, how often does the for loop run?
The 'for' loop runs every instance of the cursor moving, aka when mouseX and mouseY changes. 
The total number of lines in each frame stay the same, and it would only change if width increases or decreases, since the 'for' loop is programmed to draw lines all the way till width - x <= 10. 


What do the first, second, and third appearances of the number 10 do in the code?
First : sets the starting point of the first line  (initializer)
Second : sets the boundary where the starting point of the last line can be  (condition)
Third : sets the intervals between the starting points of all lines to be 10 (increment)

How many times does the loop body run each frame, once the x and y arrays are full?
(I'm not too sure but) It runs 50 times

What are two ways of increasing the spacing between rings?
Firstly, we could increase i = i + 10 to i = i + any number above 10.
Secondly, we could put 'for' loop that increases the spacing between the rings (i) with each one. 

How can you make the ellipse trail longer?
I could change the x.slice(-50) into x.slice(-500).
