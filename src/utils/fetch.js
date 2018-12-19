const fetchData = url =>
  fetch(url).then((resp) => {
    const data = resp.json()
    if (resp.status === 200) {
      return data
    }
  })

export default fetchData
