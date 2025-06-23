import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="">
            <div className="p-15 xl:px-18 xl:py-25 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10 xl:space-x-13.5">
                <div>
                    <Image src="/logo.png" alt="Logo" width={306} height={76} className="mb-8"/>
                    <p className="mb-4"> 9425 North MacArthur Blvd,
                        <br/>Suite 100 
                        <br/> Irving, TX 75063-4706
                    </p>
                    <p>
                        <b>Phone:</b> (972) 243-2272 <br/>
                        <b>Fax:</b> (972) 484-2720 <br/>
                        <b>E-Mail Us</b>
                    </p>
                </div>
                <div className="mt-2 xl:mt-0">
                    <h5 className="text-xl mb-2 font-bold xl:mb-3">About Us</h5>
                    <div>
                        <p className="mb-4">The American Respiratory Care Foundation is a nonprofit organization formed for the purpose of supporting research, education, and charitable activities.</p>
                        <p>The ARCF seeks to educate the public about respiratory health, assist in the training and continuing education of health care providers, and improve the quality of our environment.</p>
                    </div>
                </div>
                <div className="mt-2 xl:mt-0">
                    <h5 className="text-xl font-bold xl:mb-3">How We Give</h5>
                    <ul>
                        <li className="border-b-1 py-3">Student Awards</li>
                        <li className="border-b-1 py-3">Research Awards & Grants</li>
                        <li className="border-b-1 py-3">Achievement Awards</li>
                        <li className="border-b-1 py-3">Literary Awards</li>
                        <li className="py-3">International Fellowship Program</li>
                    </ul>
                </div>
                <div className="mt-2 xl:mt-0" >
                    <h5 className="text-xl font-bold xl:mb-3">Donations & Support</h5>
                    <ul>
                        <li className="border-b-1 py-3">Make A Donation</li>
                        <li className="border-b-1 py-3">Endowments</li>
                        <li className="border-b-1 py-3">Sponsors and Donors</li>
                        <li className="py-3">Support for International Fellowships</li>
                    </ul>
                </div>
            </div>
            <hr className="text-gray-600"/>
            <div className="flex flex-col xl:flex-row justify-between py-4 px-18.5">
                <p className="text-gray-600 mb-2 sm:mb-0">&copy;2024 American Respiratory Care Foundation. All Rights Reserved.</p>
                <p className="text-gray-600">The American Respiratory Care Foundation is a 501(c)(3) charitable organization.</p>
            </div>
        </footer>
    
    );
};

export default Footer;
