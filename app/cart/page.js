import { age, name } from './data.js'

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}

function CartItem() {
    return (
        <div className="cart-item">
            <p>{name}{age}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}