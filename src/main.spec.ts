import { describe, it, expect, afterEach, beforeEach, vi } from "vitest"
import { MorningRoutine } from "./main.js"

describe("Morning routine", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("shows no activity when not in morning hours", () => {
    const routine = new MorningRoutine()

    const activity = routine.whatShouldIDoNow()

    expect(activity).toBe("No activity")
  })

  it("shows exercise activity between 06:00 and 06:59", () => {
    const date = new Date(2000, 1, 1, 6, 0, 0)
    vi.setSystemTime(date)

    const routine = new MorningRoutine()

    const activity = routine.whatShouldIDoNow()

    expect(activity).toBe("Do exercise")
  })

  it("shows read and study activity between 07:00 and 07:59", () => {
    const date = new Date(2000, 1, 1, 7, 0, 0)
    vi.setSystemTime(date)

    const routine = new MorningRoutine()

    const activity = routine.whatShouldIDoNow()

    expect(activity).toBe("Read and study")
  })

  it("shows eat breakfast activity between 08:00 and 08:59", () => {
    const date = new Date(2000, 1, 1, 7, 0, 0)
    vi.setSystemTime(date)

    const routine = new MorningRoutine()

    const activity = routine.whatShouldIDoNow()

    expect(activity).toBe("Eat breakfast")
  })
})
