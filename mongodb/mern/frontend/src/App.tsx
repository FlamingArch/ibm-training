import { Link } from 'react-router-dom';
import ProductsList from './components/productsList';
// import { ProductProvider } from './context/productContext';
import { ChangeEvent, FC, useReducer, useState } from 'react';
import { fetchProducts, setSearchKey } from './redux/productListSlice';
// import { ProductContext } from './context/productContext';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './redux/store';
import { RootState } from './redux/store';

const App:FC<any> = ({children}) => {

  const products = useSelector((state: RootState) => state.products).products

  const dispatch = useDispatch<AppDispatch>()

  const handleChange:any = (event:ChangeEvent) => {
    dispatch(setSearchKey((event.target as HTMLInputElement).value.toLocaleLowerCase()))
    dispatch(fetchProducts((event.target as HTMLInputElement).value.toLocaleLowerCase()))
  }

  const handleSearch:any = (event:Event) => {
    event.preventDefault()
    // dispatch(set(products.filter(p=>p.productName.toLocaleLowerCase().includes(searchKey))))
  }

  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">ProductsList</Link>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className='container'> 
  {children} {/*to render the routed components*/}
</div>



  <footer className="mt-5 p-3 text-center bg-light">
  Products @copy;
  </footer>
</>
  );
}

export default App;
