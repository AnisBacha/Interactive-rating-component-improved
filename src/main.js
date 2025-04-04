

function getSelectedValue() {
    const selected = document.querySelector('input[name="rating"]:checked');
    const paragraph = document.getElementById('rating');
    if (selected) {
        localStorage.setItem('ratingValue', selected.value);
        window.location.href = "thankyou.html";
    } else {
      alert("You didn't give a rating");
    }
  }
