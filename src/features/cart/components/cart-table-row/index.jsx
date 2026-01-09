/* -------------------------------------------------------------------------- */
/*                                DPEENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Utils
import { useCart } from '../../hooks';
import { FormatCurrency } from '../../../../helpers';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                          CART TABLE ROW COMPOENNTN                         */
/* -------------------------------------------------------------------------- */
function CartTableRow({product}) {
/* ---------------------------------- HOOKS --------------------------------- */
  const { incrementQuantity, decrementQuantity, removeProduct } = useCart();

/* --------------------------------- CONSTS --------------------------------- */
  const { id, name, image, price, inCart } = product;

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <tr>
        <td className='cart-table-row'>
            <div className="product flex items-center gap-1">
                <img className="product__image" src={image} alt={name} />
                <div className="product__name-price">
                    <h2>{`${name} | THUNDEROUS`}</h2>
                    <h3>{FormatCurrency(price)}</h3>
                </div>
            </div>
        </td>

        <td className="quantity">
            <div className="flex items-center">
                <button className='quantity__increment cursor-pointer' 
                type="button" 
                title="increment quantity"
                aria-label="increment quanity"
                onClick={() => decrementQuantity(id)}>-</button>
                    <div className="quantity__count flex justify-center items-center">{inCart}</div>
                <button className='quantity__decrement cursor-pointer' 
                type="button" 
                title="decrement quantity"
                aria-label="decrement quanity"
                onClick={() => incrementQuantity(id)}>+</button>

                <button className="quantity__remove cursor-pointer" 
                type="button"
                aria-label="remove product"
                title="remove product"
                onClick={() => removeProduct(id)}>
                    <svg viewBox="0 0 24 24">
                        <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
                        <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
                    </svg>
                </button>
            </div>
        </td>

        <td className="total">{FormatCurrency(inCart * price)}</td>
    </tr>
  )
};

export default CartTableRow;