

document.getElementById("project1View").style.display = "none";
document.getElementById("project2View").style.display = "none";
document.getElementById("project3View").style.display = "none";
document.getElementById("project4View").style.display = "none";
document.getElementById("workmap1").addEventListener("click", project1Click);
document.getElementById("workmap2").addEventListener("click", project2Click);
document.getElementById("workmap3").addEventListener("click", project3Click);
document.getElementById("workmap4").addEventListener("click", project4Click);




function project1Click() {
    // show(project1View)
    // hide(project2View)
    // hide(project3View)
    // hide(project4View)
    document.getElementById("project1View").style.display = "block";
    document.getElementById("project2View").style.display = "none";
    document.getElementById("project3View").style.display = "none";
    document.getElementById("project4View").style.display = "none";


}

function project2Click() {
    // show(project1View)
    // hide(project2View)
    // hide(project3View)
    // hide(project4View)
    document.getElementById("project1View").style.display = "none";
    document.getElementById("project2View").style.display = "block";
    document.getElementById("project3View").style.display = "none";
    document.getElementById("project4View").style.display = "none";


}

function project3Click() {
    // show(project1View)
    // hide(project2View)
    // hide(project3View)
    // hide(project4View)
    document.getElementById("project1View").style.display = "none";
    document.getElementById("project2View").style.display = "none";
    document.getElementById("project3View").style.display = "block";
    document.getElementById("project4View").style.display = "none";


}

function project4Click() {
    // show(project1View)
    // hide(project2View)
    // hide(project3View)
    // hide(project4View)
    document.getElementById("project1View").style.display = "none";
    document.getElementById("project2View").style.display = "none";
    document.getElementById("project3View").style.display = "none";
    document.getElementById("project4View").style.display = "block";


}

// function show(element){
//     document.getElementById(element).style.display = "block";

// }

// function hide(element){
//     document.getElementById(element).style.display = "none";
// }