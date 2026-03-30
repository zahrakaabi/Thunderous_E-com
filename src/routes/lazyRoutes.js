/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { lazy } from 'react';

/* -------------------------------------------------------------------------- */
/*                                LAZY IMPORTS                                */
/* -------------------------------------------------------------------------- */
export const Home = lazy(() => import('../pages/index').then((module) => {
  return { default: module.Home };
}));

export const ProductDetails = lazy(() => import('../pages').then((module) => {
  return { default: module.ProductDetails };
}));

export const Products = lazy(() => import('../pages/index').then((module) => {
  return { default: module.Products };
}));

export const Cart = lazy(() => import('../pages/index').then((module) => {
  return { default: module.Cart };
}));