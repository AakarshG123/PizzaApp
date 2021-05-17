var menu_array=["Veg Pizza", "Paneer Pizza", "Chicken Pizza", "Peperoni Pizza"];
function getMenu(){
var menuItems;
menuItems="<ol>"
for (var i=0;i<menu_array.length;i++){
    menuItems=menuItems + '<li>' + menu_array[i] + '</li>';
}
menuItems=menuItems + "</ol>";
document.getElementById("display_menu").innerHTML=menuItems;
}