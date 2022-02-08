import React, { useContext } from 'react';
import { cartContex } from '../../App';
import '../Products/Products.css'

const ReviewItem = (props) => {
    const [cart, setCart] = useContext(cartContex)
    const {name,seller,price,img,stock}=props.product
    const handleRemove=(pd)=>{
        const newcart=cart.filter(item=>item !== pd)
        setCart(newcart)
    }
    return (

            <div className='products'>
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="info-container">
                    <h3 className='name'>{name}</h3>
                    <h5>By:{seller}</h5>
                    <p className='price'>${price}</p>
                    <button className='btnRemove' onClick={()=>handleRemove(props.product)}>Remove</button>
                </div>
            </div>
        );
};

export default ReviewItem;