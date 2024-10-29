import React from 'react';
import SideBar from './SideBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import AddProduct from './Product/AddProduct';
import EditProduct from './Product/EditProduct';
import ManageProduct from './Product/ManageProduct';
import ManageProductDetail from './Product/ProductDetail/ManageProductDetail';
import ManageProductImage from './Product/ProductImage/ManageProductImage';
import AddProductDetail from './Product/ProductDetail/AddProductDetail';
import EditProductDetail from './Product/ProductDetail/EditProductDetail';
function HomePageAdmin(props) {
    return (

        <Router>

            <Switch>
                <div className="sb-nav-fixed">
                    {/* <Header /> */}
                    <div id="layoutSidenav">
                        <SideBar />
                        <div id="layoutSidenav_content">
                            <main>
                                <Route exact path="/admin/">
                                    {/* <Home /> */}
                                </Route>
                                <Route exact path="/admin/list-user">
                                    {/* <ManageUser /> */}
                                </Route>
                                <Route exact path="/admin/add-user">
                                    {/* <Adduser /> */}
                                </Route>
                                <Route exact path="/admin/edit-user/:id">
                                    {/* <Adduser /> */}
                                </Route>
                                <Route exact path="/admin/list-category">
                                    {/* <ManageCategory /> */}
                                </Route>
                                <Route exact path="/admin/add-category">
                                    {/* <AddCategory /> */}
                                </Route>
                                <Route exact path="/admin/edit-category/:id">
                                    {/* <AddCategory /> */}
                                </Route>
                                <Route exact path="/admin/list-brand">
                                    {/* <ManageBrand /> */}
                                </Route>
                                <Route exact path="/admin/add-brand">
                                    {/* <AddBrand /> */}
                                </Route>
                                <Route exact path="/admin/edit-brand/:id">
                                    {/* <AddBrand /> */}
                                </Route>
                                <Route exact path="/admin/infor/:id">
                                    {/* <Information /> */}
                                </Route>
                                <Route exact path="/admin/change-password/:id">
                                    {/* <ChangePassword /> */}
                                </Route>
                                <Route exact path="/admin/add-product">
                                    <AddProduct />
                                </Route>
                                <Route exact path="/admin/edit-product/:id">
                                    <EditProduct />
                                </Route>
                                <Route exact path="/admin/list-product">
                                    <ManageProduct />
                                </Route>
                                <Route exact path="/admin/add-supplier">
                                    {/* <AddSupplier /> */}
                                </Route>
                                <Route exact path="/admin/edit-supplier/:id">
                                    {/* <AddSupplier /> */}
                                </Route>
                                <Route exact path="/admin/list-supplier">
                                    {/* <ManageSupplier /> */}
                                </Route>
                                <Route exact path="/admin/add-receipt">
                                    {/* <AddReceipt /> */}
                                </Route>
                                <Route exact path="/admin/list-receipt">
                                    {/* <ManageReceipt /> */}
                                </Route>
                                <Route exact path="/admin/detail-receipt/:id">
                                    {/* <DetailReceipt /> */}
                                </Route>
                                <Route exact path="/admin/list-product-detail/:id">
                                    <ManageProductDetail />
                                </Route>
                                <Route exact path="/admin/list-product-detail-image/:id">
                                    <ManageProductImage />
                                </Route>
                                <Route exact path="/admin/add-product-detail/:id">
                                    <AddProductDetail />
                                </Route>
                                <Route exact path="/admin/update-product-detail/:id">
                                    <EditProductDetail />
                                </Route>
                                <Route exact path="/admin/add-banner">
                                    {/* <AddBanner /> */}
                                </Route>
                                <Route exact path="/admin/edit-banner/:id">
                                    {/* <AddBanner /> */}
                                </Route>
                                <Route exact path="/admin/list-banner">
                                    {/* <ManageBanner /> */}
                                </Route>
                                <Route exact path="/admin/add-blog">
                                    {/* <AddBlog /> */}
                                </Route>
                                <Route exact path="/admin/list-blog">
                                    {/* <ManageBlog /> */}
                                </Route>
                                <Route exact path="/admin/edit-blog/:id">
                                    {/* <AddBlog /> */}
                                </Route>
                                <Route exact path="/admin/list-subject">
                                    {/* <ManageSubject /> */}
                                </Route>
                                <Route exact path="/admin/add-subject">
                                    {/* <AddSubject /> */}
                                </Route>
                                <Route exact path="/admin/edit-subject/:id">
                                    {/* <AddSubject /> */}
                                </Route>
                                <Route exact path="/admin/list-typeship">
                                    {/* <ManageTypeShip /> */}
                                </Route>
                                <Route exact path="/admin/add-typeship">
                                    {/* <AddTypeShip /> */}
                                </Route>
                                <Route exact path="/admin/edit-typeship/:id">
                                    {/* <AddTypeShip /> */}
                                </Route>
                                <Route exact path="/admin/add-typevoucher">
                                    {/* <AddTypeVoucher /> */}
                                </Route>
                                <Route exact path="/admin/list-typevoucher">
                                    {/* <ManageTypeVoucher /> */}
                                </Route>
                                <Route exact path="/admin/edit-typevoucher/:id">
                                    {/* <AddTypeVoucher /> */}
                                </Route>
                                <Route exact path="/admin/add-voucher">
                                    {/* <AddVoucher /> */}
                                </Route>
                                <Route exact path="/admin/edit-voucher/:id">
                                    {/* <AddVoucher /> */}
                                </Route>
                                <Route exact path="/admin/list-voucher">
                                    {/* <ManageVoucher /> */}
                                </Route>
                                <Route exact path="/admin/list-order">
                                    {/* <ManageOrder /> */}
                                </Route>
                                <Route exact path="/admin/order-detail/:id">
                                    {/* <DetailOrder /> */}
                                </Route>
                                <Route exact path="/admin/chat">
                                    {/* <Message /> */}
                                </Route>
                                <Route exact path="/admin/turnover">
                                    {/* <Turnover /> */}
                                </Route>
                                <Route exact path="/admin/profit">
                                    {/* <Profit /> */}
                                </Route>
                                <Route exact path="/admin/stock-product">
                                    {/* <StockProduct /> */}
                                </Route>
                            </main>
                            {/* <Footer /> */}
                        </div>
                    </div>

                </div>
            </Switch>

        </Router>

    );
}

export default HomePageAdmin;