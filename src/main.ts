interface IMorningRoutine {
  whatShouldIDoNow: () => string
}

export class MorningRoutine implements IMorningRoutine {
  whatShouldIDoNow = () => {
    const activity = this.calculateCurrentActivity()

    return activity ?? Activity.NO_ACTIVITY
  }

  private currentHour = () => {
    return new Date().getHours()
  }

  private calculateCurrentActivity = () => {
    return Routine[this.currentHour()]
  }
}

enum Activity {
  NO_ACTIVITY = "No activity",
  DO_EXERCISE = "Do exercise",
  READ_AND_STUDY = "Read and study",
}

const Routine: Record<number, Activity> = {
  6: Activity.DO_EXERCISE,
  7: Activity.READ_AND_STUDY,
}
