import React from 'react'
import galleryImages from './galleryImage'
import Masnory,{ ResponsiveMasonry } from 'react-responsive-masonry'

const MasonryImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Masnory gutter='1rem'>
            {
                galleryImages.map((item,index) =>(
                    <img src={item} key={index} alt="" style={{width:"100%",display:"block",borderRadius:"10px"}} />
                ))}

        </Masnory>
    </ResponsiveMasonry>
  )
}

export default MasonryImageGallery