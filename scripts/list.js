/* function toggleSection(sectionId) {
  const section = document.getElementById("content-1");

  if (section.style.display === "none") {
      section.style.display = "block";
  } else {
      section.style.display = "none";
      section.scrollIntoView({ behavior: "smooth", block: "center"}); // Scroll to the section
  }
} */

const section=document.getElementById("map");
//adding event:
section.addEventListener("click", (e) => {
  console.log(e);
  const s1=document.querySelector("#content-3");
  if(s1.style.display==="block"){
    s1.style.display="none";
  }
  else{
    s1.style.display="block";
  }
});
