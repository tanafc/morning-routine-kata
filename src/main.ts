interface IMorningRoutine {
  whatShouldIDoNow: () => string
}

export class MorningRoutine implements IMorningRoutine {
  whatShouldIDoNow = () => {
    return "No activity"
  }
}
