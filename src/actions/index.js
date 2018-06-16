export const newGame = (word) => {
  console.log('you clicked on wordbutton!',word)
  return {
    typt: "NEW_GAME",
    payload: word
  }
}
