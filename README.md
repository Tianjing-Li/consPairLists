# consPairLists

Javascript assignment problems which focus on functional programming and code clarity.

In pairs, we generalize the cons function to create a list with 2 elements, which can be further nested. For example, you can create 
var list = cons(1, cons(2, cons(3, cons(4, null)))); which is a list that can be accessed with 
function car (returns the first element of list) or 
function cdr (second element of the list).

Because we can nest cons structures, both car and cdr can return other lists as well.

In pairs, we define such functions.

In accessorMaker, given that we have car and cdr, we wish to create a function that creates a combination
of car and/or cdr. For example, given var list = cons(1, cons(2, cons(3, cons(4, null))));
cadd returns -> car(cdr(cdr(list))) -> 3.

In makeConsTree, we search through a given tree and return whether a string is present inside the tree or not.

In partitionList, we take a list and an arbitrary number of functions, and return a list of lists where each sublist
contains only the elements that the function(s) apply to. For example, we could have a function that returns true only for odd values,
and a second function that returns true only for even values, in this case given a list of integers we would return a list of 2 lists,
one containing odd values and the other even values.

