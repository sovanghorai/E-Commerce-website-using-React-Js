import React from 'react'
import './RelatedProducts.css'
import data_produt from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproduct'>
      <h1>Trending Products</h1>
      <hr />
      <div className="relatedproduct-item">
        {data_produt.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
