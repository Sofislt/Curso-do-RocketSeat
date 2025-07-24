function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // Esse comando faz a mesma coisa que o de cima, mas de forma mais simples
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se estiver light mode, adicionar o avatar-light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Sofia Lima com uma cara séria, delineado e cabelo cacheado tirada no espelho"
    )
  } else {
    // Se estiver dark mode, manter a imagem normal (avatar)
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Selfie de Sofia Lima com uma cara séria, delineado e cabelo cacheado"
    )
  }
}
