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
    const currentMeeting = sortedMeetings[i]
    const lastMerged = merged[merged.length - 1]


    if (currentMeeting.startTime < lastMerged.endTime) {
      lastMerged.endTime = Math.max(lastMerged.endTime, currentMeeting.endTime)
    } else {
      merged.push(currentMeeting)
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



