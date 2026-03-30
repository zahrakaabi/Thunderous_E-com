/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { lazy } from 'react';

/* -------------------------------------------------------------------------- */
/*                                LAZY IMPORTS                                */
/* -------------------------------------------------------------------------- */
export const Home = lazy(() => import('../Pages').then((module) => {
  return { default: module.Home };
}));

export const ProductDetails = lazy(() => import('../Pages').then((module) => {
  return { default: module.ProductDetails };
}));

export const Products = lazy(() => import('../Pages').then((module) => {
  return { default: module.Products };
}));

export const Cart = lazy(() => import('../Pages').then((module) => {
  return { default: module.Cart };
}));