import React, {useEffect} from 'react'

const Dashboard = () => {
  const postFilmData = () => {
    fetch('https://hoblist.com/api/movieList', {
      method: 'post',
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
    })
      .then((response: any) => console.log(response, 'cherry'))
      .then(result => {
        console.log(result, 'cherry')
      })
      .catch(error => {
        console.error(error, 'cherry')
      })
  }

  useEffect(() => {
    postFilmData()
  }, [])

  return <div>Card design</div>
}

export default Dashboard
