const codeEventModifiers = [
  [0b1, events => events.concat ("wink")],
  [0b10, events => events.concat ("double blink")],
  [0b100, events => events.concat ("close your eyes")],
  [0b1000, events => events.concat ("jump")],
  [0b10000, events => [...events].reverse ()]
]

export const secretHandshake = handshakeSequence => {
  if (typeof handshakeSequence !== "number")
    throw new Error ("Handshake must be a number")

  return codeEventModifiers.reduce (
    (events, [code, eventModifier]) =>
      code & handshakeSequence ? eventModifier (events) : events,
    []
  )
}
