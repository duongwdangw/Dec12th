import { useState, useEffect } from "react";
import TextTransition, { presets } from 'react-text-transition';

function AdsComponent() {
    const TEXTS = [" QUẢNG CÁO MỞ ĐẦU - GIẢM 10% CHO TOÀN BỘ CỬA HÀNG",
        " QUẢNG CÁO MỞ ĐẦU - GIẢM 20% CHO TOÀN BỘ CỬA HÀNG",
        " QUẢNG CÁO MỞ ĐẦU - GIẢM 30% CHO TOÀN BỘ CỬA HÀNG",
        " QUẢNG CÁO MỞ ĐẦU - GIẢM 40% CHO TOÀN BỘ CỬA HÀNG",
        " QUẢNG CÁO MỞ ĐẦU - GIẢM 50% CHO TOÀN BỘ CỬA HÀNG",
    ];

    const [ads, setAds] = useState(true);
    const [adsMsg, setAdsMsg] = useState(0);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setAds(false);
        }, 50000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log("abcd");
        console.log(adsMsg);
        // let interval=setInterval(() => {
        //     if (adsMsg < msgData.length - 1) {
        //         setAdsMsg(adsMsg + 1)
        //     } else {
        //         setAdsMsg(0);
        //     }
        // }, 3000)
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearInterval(intervalId);
        //return clearInterval(interval)
    }, []);




    const handleClose = () => {
        setAds(false);
    };

    return (
        <div>
            {ads && <div >
                {/* {adsMsg != null && <h3 style={{color:"red"}}>
                    {msgData[adsMsg]}
                </h3>} */}
                <h4 style={{marginRight: "50px", marginTop: "30px"}}>
                    <TextTransition direction="down" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                </h4>   
            </div>}
        </div>
    );
}

export default AdsComponent;

