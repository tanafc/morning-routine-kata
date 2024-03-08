interface IMorningRoutine {
  whatShouldIDoNow: () => string
}

export class MorningRoutine implements IMorningRoutine {
  whatShouldIDoNow = () => {
    if (this.getCurrentDate() === 6) return "Do exercise"
    return "No activity"
  }

  private getCurrentDate = () => {
    return new Date().getHours()
  }
}
