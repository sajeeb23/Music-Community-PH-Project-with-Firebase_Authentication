
const Contact = () => {
    return (
        <div className="my-24 mx-3 lg:mx-12 bg-sky-500 rounded-2xl text-white">
            <div className="p-8">
                <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
                <p className="text-xl mb-4">
                    For inquiries or assistance, feel free to reach out to us:
                </p>
                <ul className="list-disc pl-6 text-lg">
                    <li>Email: <a href="">musiccommunity@yahoo.com</a></li>
                    <li>Phone: <a href="">01239143188989</a></li>
                    <li>Address: 123 Music Street, Dhaka, Bangladesh</li>
                </ul>

                <div className="mt-6">
                    <p className="text-xl mb-2">Connect with us on social media:</p>

                </div>
            </div>
        </div>
    );
};

export default Contact;
