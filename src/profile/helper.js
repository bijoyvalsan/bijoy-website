export const to = pageNumber => (
  {
    x: 0,
    y: pageNumber * -4,
    scale: 1,
    rot: 0, delay: pageNumber * 100
  }
)
export const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
