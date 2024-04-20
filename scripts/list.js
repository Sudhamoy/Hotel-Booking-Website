function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section.style.display === "none") {
      section.style.display = "block";
  } else {
      section.style.display = "none";
      section.scrollIntoView({ behavior: "smooth", block: "center"}); // Scroll to the section
  }
}
