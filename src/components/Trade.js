import React from "react";
import "./css/trade.css";

const Trade=()=>{

    return(
        <div className="trade-main">
            <div className="chart" id="chrt">

            </div>
            <div className="token-info">
                <span className="title">Token Information Summary</span>
                <div className="sub-info">
                    <div className="opt">Token Name:</div><div className="ans">Name</div>
                    <div className="opt">Total Supply:</div><div className="ans">1,000,000</div>
                    <div className="opt">Tokens/USDC:</div><div className="ans">10</div>
                    <div className="opt">USDC/Token:</div><div className="ans">0.5</div>
                    <div className="opt">USD In Pool:</div><div className="ans">50,000</div>
                    <div className="opt">Token In Pool:</div><div className="ans">100,000</div>
                    <div className="opt">Buy Tax:</div><div className="ans">4%</div>
                    <div className="opt">Sale Tax:</div><div className="ans">8%</div>
                    <div className="opt">DAO Threshold</div><div className="ans">35000</div>
                </div>
            </div>
            <div className="footer">
                <span id="heading">
                    <span style={{color:"#91E564"}}>
                        Fresh
                    </span>
                    <span style={{color:"#F9C04C"}}>
                        Swap
                    </span>
                    <div className="footer-content">
                        <span id="sub-heading">Disclaimer</span>
                        <p style={{fontSize:"0.8rem"}}>The Information on this website, and other official FreshSwap channels such as Discord, Twitter, and Telegram, is provided for education and
                            informational purposes only, without any express or implied warranty of any kind, including warranties of accuracy, completeness, or fitness for any
                            particular purpose. They are not intended to be and does not constitute financial advice, investment advice, trading advice or any other advice.
                            All Information is general in nature and is not specific to you the User or anyone else. </p>
                            <div className="links">
                                <a href="#">Whitepaper</a>|
                                <a href="#">Discord</a>|
                                <a href="#">Twitter</a>|
                                <a href="#">Telegram</a>
                            </div>
                            <p style={{margin:"auto", justifySelf:"flex-end", fontSize:"0.8rem"}}> &copy; FreshSwap 2023 | All rights reserved</p>
                    </div>
                </span>
            </div>
            <div className="execution">
                <div className="buy-sell">
                    <div className="selector-btn-buy">
                        Buy
                    </div>
                    <div className="selector-btn">
                        Sell
                    </div>
                </div>
                <div className="buy-sell" style={{flexDirection:"column", marginTop:"2%"}}>
                    <input placeholder="Enter Amount" type="number" min="0"></input>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <span id="balance">Wallet Balance: $2,000</span>
                        <span id="balance" style={{cursor:"pointer"}}>MAX</span>
                    </div>
                </div>
                <div className="confirmation">
                    <div>
                        Approve
                    </div>
                    <div>
                        Confirm
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Trade;