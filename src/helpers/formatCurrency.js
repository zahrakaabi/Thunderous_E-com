/* ---------------------------- */
/*    CONST CURRENCY FORMATER   */
/* ---------------------------- */
const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency'
});

/* ---------------------------- */
/*        FORMAT CURRENCY       */
/* ---------------------------- */
function FormatCurrency(price) {
    /* ******* RENDERING ***** */
    return CURRENCY_FORMATER.format(price);
}

export default FormatCurrency;