import paypalIcon from "@/assets/icons/paypal.png";
import stripeIcon from "@/assets/icons/stripe.png";
import visaIcon from "@/assets/icons/visa.png";
import mastercardIcon from "@/assets/icons/mastercard.png";
import americanExpressIcon from "@/assets/icons/american-express.png";
import Image from "next/image";

const Footer = () => {
  const iconArray = [
    mastercardIcon,
    americanExpressIcon,
    visaIcon,
    stripeIcon,
    paypalIcon,
  ];

  return (
    <footer className="bg-black/90 text-white/90">
      <div className=" section-wrapper py-10 flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-2/5 space-y-5">
          <h1>Frozify</h1>
          <p>Got Question? Call us 24/7</p>
          <p className="font-semibold">(+880) 123456789</p>
          <p>
            Register now & get you 10% <br /> offer from first order!
          </p>
        </div>

        <div className="lg:w-3/5 flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-3">
            <h4>Company</h4>

            <div className="space-y-2">
              <p>About Us</p>
              <p>Career</p>
              <p>Contact Us</p>
              <p>Start Selling</p>
              <p>Order History</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4>My Account</h4>

            <div className="space-y-2">
              <p>Track My Order</p>
              <p>View Cart</p>
              <p>Sign In</p>
              <p>Help</p>
              <p>Wishlist</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4>Customer Service</h4>

            <div className="space-y-2">
              <p>Payment Methods</p>
              <p>Money Return Policy</p>
              <p>Product Return</p>
              <p>Contact Seller</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/80 py-5">
        <div className="section-wrapper flex flex-wrap items-center justify-between gap-5 lg:gap-10">
          <p>All Rights Reserved. © 2024 Ibrahim Khalil</p>

          <div className="flex items-center gap-5">
            <p>Payment Method</p>

            <div className="flex items-center gap-2">
              {iconArray.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  width={500}
                  height={500}
                  alt="Payment Icon"
                  className="size-8"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
