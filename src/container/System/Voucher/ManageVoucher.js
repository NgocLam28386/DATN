<div className="container-fluid px-4">
<h1 className="mt-4">Quản lý mã voucher</h1>


<div className="card mb-4">
    <div className="card-header">
        <i className="fas fa-table me-1" />
        Danh sách mã voucher
    </div>
    <div className="card-body">
    <div className='row'>
       
        <div className='col-12 mb-2'>
        <button  style={{float:'right'}} onClick={() => handleOnClickExport()} className="btn btn-success" >Xuất excel <i class="fa-solid fa-file-excel"></i></button>
        </div>
        </div>
        <div className="table-responsive">
            <table className="table table-bordered" style={{ border: '1' }} width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã voucher</th>
                        <th>Loại voucher</th>
                        <th>Số lượng</th>
                        <th>Đã sử dụng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>

                <tbody>
                    {dataVoucher && dataVoucher.length > 0 &&
                        dataVoucher.map((item, index) => {
                            let name = `${item.typeVoucherOfVoucherData.value} ${item.typeVoucherOfVoucherData.typeVoucherData.value}`
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.codeVoucher}</td>
                                    <td>{name}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.usedAmount}</td>
                                    <td>{moment.unix(item.fromDate / 1000).format('DD/MM/YYYY')}</td>
                                    <td>{moment.unix(item.toDate / 1000).format('DD/MM/YYYY')}</td>
                                    <td>
                                        <Link to={`/admin/edit-voucher/${item.id}`}>Edit</Link>
                                        &nbsp; &nbsp;
                                        <span onClick={() => handleDeleteVoucher(item.id)} style={{ color: '#0E6DFE', cursor: 'pointer' }}   >Delete</span>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    </div>
</div>
<ReactPaginate
    previousLabel={'Quay lại'}
    nextLabel={'Tiếp'}
    breakLabel={'...'}
    pageCount={count}
    marginPagesDisplayed={3}
    containerClassName={"pagination justify-content-center"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    breakLinkClassName={"page-link"}
    breakClassName={"page-item"}
    activeClassName={"active"}
    onPageChange={handleChangePage}
/>
</div>