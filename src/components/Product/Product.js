import './Product.css'

function Product (props) {
    console.log(props)
    return (
        <div className='product'>
            <img src={props.productpty.image} alt="bag" className='product-image'/>
            <h2 className='product-title'>{props.productpty.title}</h2>
            <p className='product-category'>{props.productpty.category}</p>
            <p className='product-price'>{props.productpty.price}£</p>

        </div>
    )
}

export default Product;