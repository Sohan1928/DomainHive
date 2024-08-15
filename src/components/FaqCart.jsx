import React from "react";

const FaqCart = () => {
  return (
    <div className="pt-20">
      <div>
        <div className="grid md:grid-cols-2 join join-vertical w-full">
          <div className="collapse collapse-arrow join-item ">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-purple-900 text-xl font-medium">
              Why can't people connect to the web server on my PC?
            </div>
            <div className="collapse-content">
              <p className="opacity-80">
                We operate one of the most advanced 100 Gbit networks in the
                world, complete with Anycast support and extensive DDoS
                protection.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item ">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl text-purple-900 font-medium">
              How can I make my website work without www. in front?
            </div>
            <div className="collapse-content">
              <p className="opacity-80">
                We operate one of the most advanced 100 Gbit networks in the
                world, complete with Anycast support and extensive DDoS
                protection.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item ">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl text-purple-900 font-medium">
              What domain name should I choose for my site?
            </div>
            <div className="collapse-content">
              <p className="opacity-80">
                We operate one of the most advanced 100 Gbit networks in the
                world, complete with Anycast support and extensive DDoS
                protection.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item ">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl text-purple-900 font-medium">
              Why does Internet Information Server want a password?
            </div>
            <div className="collapse-content">
              <p className="opacity-80">
                We operate one of the most advanced 100 Gbit networks in the
                world, complete with Anycast support and extensive DDoS
                protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCart;
