function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var memberButton = document.getElementById("memberButton");
  var skillsButton = document.getElementById("skillsButton");
  var memberText = document.getElementById("memberText");
  var skillsText = document.getElementById("skillsText");

  member.style.display = "block";
  skills.style.display = "none";
  memberButton.style.backgroundColor = "#f9f9f9";
  skillsButton.style.backgroundColor = "#e9e9e9";
  memberText.style.color = "#000";
  skillsText.style.color = "#999";
}