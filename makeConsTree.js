//Return the path required for the function cXXXr to reach
//a target string in a given tree
function makeXXX(tree, s){
    var string = "";  //will store the path to the target

    //helper function to find the target inside the tree
    function routeTracker(tree, s, string){
        if(tree != null){ //check if tree is null
            var node = car(tree);  //current element (first car) of the tree
        } else { //invalid tree
            return null;
        }
        //if node is a string
        if (typeof(node) === 'string'){
            //if we have found the target string
            if (node == s){
                return 'a'+string; //return the appended string
            }else{ //if not target
                return routeTracker(cdr(tree),s,'d'+string); //recursively call routeTracker, going deeper into the tree
                                                              //append 'd' to the string for next recursive call
            }
        }
        //check if node is a list
        else if (isList(node)){
            if(routeTracker(node,s,'a'+string)) { //if the list contains the string
                return routeTracker(node, s, 'a' + string); //return it
            } else {
                return routeTracker(cdr(tree),s,'d'+string); //search the other part of the tree
            }
        }
        else if(cdr(tree) == null){ //if the rest of the tree is null, return null (string not found)
            return null;
        } else {
            return routeTracker(cdr(tree),s,'d'+string);
        }
    }
    return routeTracker(tree,s,string);
}
