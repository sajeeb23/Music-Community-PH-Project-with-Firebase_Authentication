
const Faq = () => {
    return (
        <div className="my-24 w-11/12 mx-4">
            <h1 className="text-center text-5xl py-4 font-semibold underline mb-5 text-lime-500">FAQ</h1>
            <div className="collapse collapse-plus bg-sky-500 text-white mt-2">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    When and where is the next music event taking place?
                </div>
                <div className="collapse-content">
                    <p>You can find information about upcoming music events, including dates, venues, and ticket details, on our <span className="link-primary hover:cursor-pointer">Events page.</span></p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-sky-500 text-white mt-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    How can I purchase tickets for an event?
                </div>
                <div className="collapse-content">
                    <p>To buy tickets, visit the event page of the concert you are interested in and click the <span className="link-primary hover:cursor-pointer">Buy Tickets</span> button. Follow the instructions to complete your purchase securely.

                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-sky-500 text-white mt-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Can I get a refund if I can not attend the event after purchasing a ticket?
                </div>
                <div className="collapse-content">
                    <p>We have a refund policy in place. Please refer to our Refund Policy page for detailed information on our refund process and eligibility.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-sky-500 text-white mt-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Is there an age restriction for attending the events?
                </div>
                <div className="collapse-content">
                    <p>Age restrictions vary depending on the event and the venue policy. You can find age-related information on the event page or during the ticket purchase process.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;