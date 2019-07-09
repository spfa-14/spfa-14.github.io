//import $ from "./jquery-3.4.1";
$("#search-btn").click(function(event){
    var name=$("#search-name").val();
    open("post/"+name+".html","_blank");
});