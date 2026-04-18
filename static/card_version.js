window.changeVersion = (card_version) => {
  localStorage.setItem('card_version', card_version)
  location.href = "/card"
}
