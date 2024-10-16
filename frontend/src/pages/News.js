import React from 'react'
import NewsHeader from '../components/NewsHeader'
import NewsLetter from '../components/NewsLetter'
import Contact from '../components/Contact'

function News() {
  return (
    <div className='NEWS'>
        <NewsHeader/>
        <hr/>
        <NewsLetter/>
        <Contact/>

    </div>
  )
}

export default News