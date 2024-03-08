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
})
