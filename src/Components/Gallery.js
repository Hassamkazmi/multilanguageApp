import React from 'react'
import {useTranslation} from 'react-i18next'

const Gallery = () => {

    const {t} = useTranslation();
  return (
    <div className='gallery'>
      <div className='row6'>
        <img src={t('img1')} alt="img"/>
        <h3>{t('img1title')}</h3>
      </div>
      <div className='row6'>
      <img src={t('img2')} alt="img"/>
      <h3>{t('img2title')}</h3>
      </div>
    </div>
  )
}

export default Gallery
