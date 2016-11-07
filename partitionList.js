//Function which takes a input a list and an arbitrary n amount of functions.
//Depending on the input to the function, either true or false is returned, and a
//list of lists (1 list containing n lists) is created
function partition(list) {
    //args contains the object arguments (functions)
    var args = Array.prototype.slice.call(arguments);

    //function which appends 2 lists
    function append(list1, list2){
        //if either list is null, return the other
        if (list2 == null){
            return list1;
        }
        if (list1 == null) {
            return cons(list2, null);
        }
        //recursively appends 2 lists together
        return cons(car(list1),append(cdr(list1),list2));}

    //function which creates the list for each function
    function functionHelper(list, fn, counter, smallList) {
        //if list isn't null, we get the outermost element
        if (list != null) {
            var curElement = car(list);

            //if the function with curElement as input is true, add it to the list
            if (fn[counter](curElement)) {
                //recursively append elements belonging to a function
                return functionHelper(cdr(list), fn,counter, append(smallList, curElement));
            } else {
                //check next element
                return functionHelper(cdr(list), fn,counter, smallList);
            }
        }
        //reached end of list, return the created list
        else {
            return smallList;
        }
    }
    //function which appends all the small lists together
    //bigList stores the list of lists
    function partitionFunctions(list, fns, counter, bigList) {
        //if we have reached the number of functions, return the list of lists
        if (counter == fns.length) {
            return bigList;
        }
        //fnList contains the list for a specific function
        var fnList = functionHelper(list, fns, counter , null);
        //append the small lists together
        return partitionFunctions(list, fns, counter+1, append(bigList, fnList));
    }
    return partitionFunctions(list, args, 1, null);
}
