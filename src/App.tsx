import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import CompareView from './views/CompareView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import SearchView from './views/SearchView'
import ShoppingCartView from './views/ShoppingCartView';
import WhisListView from './views/WhisListView';
import NotFoundView from './views/NotFoundView';
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

  function App() {
  return (
    <BrowserRouter>
    <ShoppingCartProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:name" element={<ProductDetailsView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/shoppingCart" element={<ShoppingCartView />} />
          <Route path="/whishList" element={<WhisListView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
