export const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (pages: number) => {
  const pagesArr = []

  for(let i = 1; i <= pages; i++) {
    pagesArr.push(i)
  }

  return pagesArr
}