import React from 'react'
import "../styles/Myorder.css"

function Myorder() {
    return (
        <>
        <div className="Myorder">
        {/* <Navbar login={true} /> */}
              <h2>My Orders</h2>
            <div class="container">
              <ul class="responsive-table">
                <li class="table-header">
                  <div class="topic1">Transaction Id</div>
                  <div class="head_col-2">Disease</div>
                  <div class="head_col-3">Date Of Purchase</div>
                  <div class="head_col-4">Amount</div>
                  <div class="head_col-5">Details</div>
                </li>
                      <li class="table-row">
                        <div class="col col-1" data-label="Job Id">
                          {/* {transaction.transactionHash} */}
                          ajdb
                        </div>
                        <div class="col col-2" data-label="Customer Name">
                          {/* {transaction.contractAddr} */}
                          ljdnvsdl
                        </div>
                        <div class="col col-3" data-label="Amount">
                          {/* {transaction.details.dateOfStarting} */}
                        dlknsdk</div>
                        <div class="col col-4" data-label="Payment Status">
                          {/* {transaction.details.years} */}5.375 ETH
                        </div>
    
                        <div class="col_btn" data-label="Payment Status">
                          <a
                            // href={`https://goerli.etherscan.io/tx/${transaction.transactionHash}`}
                            // target="_blank"
                          >
                            View Details
                          </a>
                        </div>

                        <div class="col_btn" data-label="Payment Status">
                          <a
                            // href={`https://goerli.etherscan.io/tx/${transaction.transactionHash}`}
                            // target="_blank"
                          >
                            View NFT
                          </a>
                        </div>
                      </li>
                    
              </ul>
            </div>
            {/* <Footer/> */}
          </div>
        </>
  )
}

export default Myorder