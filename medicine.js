document.querySelectorAll(".food-options .option").forEach(option => {
    option.addEventListener("click", () => {
      document.querySelectorAll(".food-options .option").forEach(opt => opt.classList.remove("selected"));
      option.classList.add("selected");
    });
  });
  
  document.getElementById('planForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Plan saved successfully!');
  });
  