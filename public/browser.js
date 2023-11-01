document.addEventListener('click', function (e) {
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("Enter your new desired item: ")
    axios.post('/update-item', { text: userInput }).then(function () {
      // do sth
    }).catch(function () {
      console.log("try later")
    })
  }
})