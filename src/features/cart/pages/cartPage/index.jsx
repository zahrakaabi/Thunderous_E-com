/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// UI Local Components
import EmptyCart from '../../components/empty-cart';
import CartTableRow from '../../components/cart-table-row';

// Utils
import { useCart } from '../../hooks';
import { FormatCurrency } from '../../../../shared/helpers';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             CART PAGE COMPONENT                            */
/* -------------------------------------------------------------------------- */
function CartPage() {
/* ---------------------------------- HOOKS --------------------------------- */
  const { t } = useTranslation('common');
  const { cart, totalPrice } = useCart();

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <>
        {cart.length === 0 ? <EmptyCart /> : (
            <div className="cart container cursor-auto">
                <div className='cart__back-to-shop w-full cursor-auto'>
                    <h2>{t('empty_cart.your_purchases')}</h2>
                    <Link to="/shop" className="flex items-center transition">
                        <svg viewBox="0 0 24 24">
                            <path d="M20 3h-7.21a2 2 0 0 0-1.987 1.779L10 12H4a2 2 0 0 0 0 4h12l-1.212 3.03a2.001 2.001 0 0 0 1.225 2.641l.34.113a.998.998 0 0 0 1.084-.309l4.332-5.197c.149-.179.231-.406.231-.64V5a2 2 0 0 0-2-2z"></path>
                        </svg>
                        {t('empty_cart.Go_TO_SHOP')}
                    </Link>
                </div>

                <table className="cart__table w-full">
                    <thead>
                        <tr>
                            <th>{t('empty_cart.th_first')}</th>
                            <th>{t('empty_cart.th_second')}</th>
                            <th>{t('empty_cart.th_third')}</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cart?.map((product) => <CartTableRow 
                            key={product.id}
                            product={product}
                        />)}
                    </tbody>
                </table>

                <div className="cart__subtotal flex flex-column items-end w-full">
                    <div className="amount flex items-center gap-1">
                        <h2>{t('empty_cart.subTotal')}</h2>
                        <h3>{FormatCurrency(totalPrice)}</h3>
                    </div>
                    <button className="checkout flex justify-center items-center transition cursor-pointer" 
                    type="button"
                    title="checkout"
                    aria-label="checkout">
                        Checkout
                    </button>
                </div>
            </div>
        )}
    </>
  )
};

export default CartPage;