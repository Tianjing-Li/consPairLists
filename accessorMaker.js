function cXXXr(string){
    //check if input is string type
    if (typeof(string)!='string'){
        return string;
    }
    if (string.length == 0){ //if string input is empty, we return the list
        return function(list){
            return list;
        }
    }
    var curSelector = string.charAt(string.length - 1); //curSelector is the current last character of the string input
                                                        //ex: "add" will have "d" as curSelector during the first recursion
    if (curSelector == 'a'){ //if current character is 'a', use car
        return function(list){
            if (isList(list)){ //check if list variable is a list
                return cXXXr(string.slice(0,-1))(car(list)); //return cXXXr with the last character sliced off from the input string
                                                             //car becomes the selector for the list
            }else{ //if not a list, return whatever variable we gave as list
                return list;
            }
        }
    }
    else if (curSelector == 'd'){ //if current character is 'd', use cdr
        return function(list){
            if (isList(list)){ //check if list variable is a list
                return cXXXr(string.slice(0,-1))(cdr(list)); //return cXXXr with the last character sliced off from the input string
                                                             //car becomes the selector for the list
            }else{ //if not a list, return whatever variable we gave as list
                return list;
            }
        }
    }else{ //if the string contains something other than 'a' or 'd', return it
        return string;
    }
}
