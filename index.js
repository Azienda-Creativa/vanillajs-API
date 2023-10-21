const body = document.body
body.style.backgroundColor = "#FBF5DF"

const navbar = document.createElement("navbar")
navbar.setAttribute("id", "navbar")
body.append(navbar)

const createDiv = (id, text, text2) => {
  const div = document.createElement("div")
  div.setAttribute("id", id)

  if (text && text.trim() !== "") {
    div.innerText = text
  }

  if (text2 && text2.trim() !== "") {
    div.innerHTML += "<br>" + "<br>" + text2
  }

  div.style.textAlign = "center"
  div.style.position = "fixed"
  div.style.left = "50%"
  div.style.top = "15%"
  div.style.maxWidth = "70%"
  div.style.transform = "translate(-50%, -50%)"
  body.append(div)
  return div
}

const createLogo = (src) => {
  const logo = document.createElement("img")
  logo.setAttribute("src", src)
  logo.setAttribute("alt", "Logo")
  logo.style.display = "block"
  logo.style.margin = "20px auto 20px auto"
  logo.style.textAlign = "center"
  logo.style.width = "600px"
  navbar.append(logo)
  return logo
}

const logo = createLogo("https://codaio.imgix.net/docs/C1RpC3utte/blobs/bl-oSafg7j48o/eb36153fe0dbf78cf25810d35605c59338e8b9ebc1d84caee196b42df3a58f5a03d812faab321163107d49c6413a4774499e968275b6910bceac06789766373542f9e776643ab756b2333390e6af5689b0de44c317018fc949f7a489a51edd1ddc2476f7?auto=format%2Ccompress&fit=max&h=360&crop=entropy")

createDiv("1")
let box = document.getElementById("1")

box.style.backgroundColor = "rgba(202, 202, 202, 0.43)"
box.style.width = "600px"
box.style.height = "60%"
box.style.marginTop = "300px"

const fetchData = () => {
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      let randomIndex = Math.floor(Math.random() * 17)
      const quoteText = data[randomIndex].text
      const quoteAuthor = data[randomIndex].author

      let prevQuoteText = document.getElementById("quote")
      prevQuoteText && prevQuoteText.remove()

      const quoteDiv = createDiv("quote", quoteText, quoteAuthor)
      box.append(quoteDiv)
    })
    .catch((error) => console.error(error))
}

const createButton = (text) => {
  const button = document.createElement("button")
  button.setAttribute("class", "btn")

  button.style.textAlign = "center"
  button.style.left = "50%"
  button.style.width = "100px"
  button.style.height = "30px"
  button.innerText = text
  button.style.marginTop = "400px"
  return button
}

const button = createButton("Fetch quote")
box.append(button)
button.addEventListener("click", fetchData)
