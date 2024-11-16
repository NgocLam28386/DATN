<section className="cart_area">
<div className="container">
    <div className="cart_inner">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>

                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th style={{ textAlign: 'center' }} scope="col">Số lượng</th>
                        <th style={{ textAlign: 'center' }} scope="col">Tổng tiền</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>

                    {dataCart && dataCart.length > 0 &&
                        dataCart.map((item, index) => {
                            price += item.quantity * item.productDetail.discountPrice

                            let name = `${item.productData.name} - ${item.productDetail.nameDetail} - ${item.productdetailsizeData.sizeData.value}`
                            return (
                                <ShopCartItem isOrder={false} id={item.id} userId={user && user.id} productdetailsizeId={item.productdetailsizeData.id} key={index} name={name} price={item.productDetail.discountPrice} quantity={item.quantity} image={item.productDetailImage[0].image} />
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    </div>
    <div className="box-shipping">


        <h6>
            Chọn đơn vị vận chuyển
        </h6>
        <div>
            {typeShip && typeShip.length > 0 &&
                typeShip.map((item, index) => {
                    return (
                        <div key={index} className="form-check">
                            <input className="form-check-input" checked={item.id === dataTypeShip.id ? true : false} type="radio" name="exampleRadios" id="exampleRadios1" onChange={() => hanldeOnChangeTypeShip(item)} />
                            <label className="form-check-label" for="exampleRadios1">
                                {item.type} - {CommonUtils.formatter.format(item.price)}
                            </label>
                        </div>
                    )
                })
            }


        </div>



    </div>
    <div className="box-shopcart-bottom">
        <div className="content-left">
            <div className="wrap-voucher">
                <img width="20px" height="20px" style={{ marginLeft: "-3px" }} src={storeVoucherLogo}></img>
                <span className="name-easier">Easier voucher</span>
                <span onClick={() => handleOpenModal()} className="choose-voucher">Chọn Hoặc Nhập Mã</span>
                {dataVoucher && dataVoucher.voucherData &&
                    <span className="choose-voucher">Mã voucher: {dataVoucher.voucherData.codeVoucher}</span>
                }

            </div>
        </div>
        <div className="content-right">
            <div className="wrap-price">
                <span className="text-total">Tổng thanh toán ({dataCart && dataCart.length} sản phẩm): </span>
                <span className="text-price">{dataVoucher && dataVoucher.voucherData ? CommonUtils.formatter.format(totalPriceDiscount(price, dataVoucher) + priceShip) : CommonUtils.formatter.format(price + (+priceShip))}</span>
            </div>

            <div className="checkout_btn_inner">
                <a onClick={() => handleOpenAddressUserModal()} className="main_btn" >Đi đến thanh toán</a>
            </div>
        </div>
    </div>
</div>
<VoucherModal closeModalFromVoucherItem={closeModalFromVoucherItem} price={price + (+priceShip)} isOpenModal={isOpenModal}
    closeModal={closeModal} id={user && user.id} />
<AddressUsersModal sendDataFromModalAddress={sendDataFromModalAddress} isOpenModal={isOpenModalAddressUser} closeModaAddressUser={closeModaAddressUser} />
</section>