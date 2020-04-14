const input = [
  //{ startTime: 1, endTime: 3 },
  //{ startTime: 2, endTime: 4 },
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

function compareStartTime(meeting1, meeting2) {
  return meeting1.startTime - meeting2.startTime
}

function isMergeable(meeting1, meeting2) {
  const range = [meeting1.startTime, meeting1.endTime]
  return meeting2.startTime >= range[0] && meeting2.startTime < range[1]
}

function mergeRanges(meetings) {
  const sortedMeetings = meetings.sort(compareStartTime) // O(n log n)
  const merged = [sortedMeetings[0]]

  for (let i = 1; i < sortedMeetings.length; i++) { // O(n)
    const meeting = sortedMeetings[i]

    let didAMerge = false

    for (j = 0; j < merged.length; j++) { // O(n)
      const alreadyMerged = merged[j]

      if (isMergeable(alreadyMerged, meeting)) {
        didAMerge = true

        const mergedMeeting = {
          startTime: Math.min(alreadyMerged.startTime, meeting.startTime),
          endTime: Math.max(alreadyMerged.endTime, meeting.endTime),
        }

        merged[j] = mergedMeeting
      }
    }

    if (!didAMerge) {
      merged.push(meeting)
    }
  }

  return merged
}


let actual = mergeRanges([
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
])

console.log(actual)



