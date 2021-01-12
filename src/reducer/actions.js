export const types = {
  PAN: 'PAN',
  PAN_START: 'PAN_START',
}

export const startPan = (event) => ({
  type: types.PAN_START,
  clientX: event.clientX,
  clientY: event.clientY,
})

export const pan = (event) => ({
  type: types.PAN,
  clientX: event.clientX,
  clientY: event.clientY
})


