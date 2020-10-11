const calcScore = (bGuessed, bLeft, time) => {
  const wrongGuessesPoints = bGuessed - bLeft * 5
  
  let finalScore = ((40 - bGuessed) * 10) - wrongGuessesPoints - (time * 2)

  if (finalScore < 0) {
    finalScore = 0
  }
  return finalScore
}

export default {
  calcScore
}