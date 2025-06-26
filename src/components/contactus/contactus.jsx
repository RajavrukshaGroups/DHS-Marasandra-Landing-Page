import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      alert("Thank you! Your message has been sent.");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-[#24447c] mb-10">
        Contact Us
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 items-stretch max-w-6xl mx-auto">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 p-8 rounded-xl shadow-lg border-2 border-[#24447c] min-h-[28rem] flex flex-col justify-between"
        >
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[#24447c] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-[#24447c] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#24447c]"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-600 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#24447c] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[#24447c] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#24447c]"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#24447c] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-[#24447c] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#24447c]"
                placeholder="1234567890"
              />
              {errors.phone && (
                <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#24447c] mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-[#24447c] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#24447c]"
                placeholder="Type your message here..."
              />
              {errors.message && (
                <p className="text-red-600 text-xs mt-1">{errors.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#24447c] text-white py-2 rounded-lg font-semibold hover:bg-[#1c3764] transition"
          >
            Submit
          </button>
        </form>

        {/* Google Maps Iframe */}

        <div className="flex-1 border-2 border-[#24447c] rounded-xl overflow-hidden shadow-lg h-[300px] sm:h-[28rem]">
          <iframe
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?q=Defence%20Habitat%20Housing%20Co-operative%20Society%2C%20behind%20Swathi%20Gardenia%20Restaurant%2C%20Sahakar%20Nagar%2C%20Byatarayanapura%2C%20Bengaluru%2C%20Karnataka%20560092&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
