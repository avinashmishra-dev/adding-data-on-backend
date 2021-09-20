import classes from './Product.module.css'

const Product = ({name,amount,description})=>{

    const price = ` Rs ${amount} `
    return(<div>
        <li>
           <div className = {classes.name}>{name}</div>
           <div className = {classes.price}>{price}</div>
           <p className = {classes.description}>{description}</p>
        </li>
    </div>)
};

export default Product;