import React from "react";
import Image from "next/image";
import {FooterData} from "@/mock-data";

const Footer = () => {
    return (
        <footer className="">
            <div className="p-15 xl:px-18 xl:py-25 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-12.5">
                <div>
                    <Image src="/images/Logo.png" alt="Logo" width={306} height={76} className="mb-8"/>
                    <div className="mb-4"> 
                        {(FooterData[0].address as string[]).map((item,i)=>(
                            <p key={i}>{item}</p>
                        ))}
                    </div>
                    <p>
                        <b>Phone:</b> {FooterData[0].phoneNumber} <br/>
                        <b>Fax:</b> {FooterData[0].fax} <br/>
                        <b>E-Mail Us</b>
                    </p>
                </div>
                <div className="mt-2 xl:mt-0">
                    <h5 className="text-[1.125rem] mb-2 font-bold xl:mb-3">{FooterData[1].label}</h5>
                    <div>
                        {(FooterData[1].description as string[]).map((item,i)=>(
                            <p key={i} className="mb-4 last:m-0">{item}</p>
                        ))}
                    </div>
                </div>
                <div className="mt-2 xl:mt-0">
                    <h5 className="text-[1.125rem] font-bold xl:mb-3">{FooterData[2].label}</h5>
                    <ul>
                        {(FooterData[2].description as string[]).map((item,i)=>(
                            <li key={i} className="py-3 not-last:border-b-1">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-2 xl:mt-0" >
                    <h5 className="text-[1.125rem] font-bold xl:mb-3">{FooterData[3].label}</h5>
                    <ul>
                        {(FooterData[3].description as string[]).map((item,i)=>(
                            <li key={i} className="py-3 not-last:border-b-1">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr style={{ borderColor: "#001446" , opacity : "0.1"}}/>
            <div className="flex flex-col xl:flex-row justify-between py-8.5 px-18 opacity-75">
                <p className="text-gray-600 mb-2 sm:mb-0 text-xs">{FooterData[4].copyWrite}</p>
                <p className="text-gray-600 text-xs">{FooterData[4].note}</p>
            </div>
        </footer>
    
    );
};

export default Footer;
