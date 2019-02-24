# hw4

How many lines are drawn each frame? In other words, how often does the for loop run?
The 'for' loop runs every instance of the cursor moving, aka when mouseX and mouseY changes. 
The total number of lines in each frame stay the same, and it would only change if width increases or decreases, since the 'for' loop is programmed to draw lines all the way till width - x <= 10. 


What do the first, second, and third appearances of the number 10 do in the code?
First : sets the starting point of the first line 
Second : sets the boundary where the starting point of the last line can be 
Third : sets the intervals between the starting points of all lines to be `10

