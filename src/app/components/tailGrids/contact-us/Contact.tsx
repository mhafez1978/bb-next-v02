import React from "react";

const Contact = () => {
  return (
    <section className="relative z-40 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-primary lg:w-1/2"></div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="pr-5 lg:max-w-[500px]">
              <div className="mb-10 max-w-[500px]">
                <h2 className="mb-4 text-4xl font-bold text-black sm:text-[45px]">
                  Get in touch
                </h2>
                <p className="text-base text-black/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  non dui aliquet, pellentesque tellus ac, faucibus ex.
                </p>
              </div>
              <form>
                <div className="-mx-3 flex flex-wrap">
                  <InputBox
                    labelFor="name"
                    labelTitle="First Name"
                    type="text"
                    name="name"
                    placeholder="Enter your first name"
                  />
                  <InputBox
                    labelFor="name"
                    labelTitle="Last Name"
                    type="text"
                    name="name"
                    placeholder="Enter your last name"
                  />
                  <InputBox
                    labelFor="subject"
                    labelTitle="Subject"
                    type="text"
                    name="subject"
                    placeholder="Enter your Subject"
                  />
                  <InputBox
                    labelFor="phone"
                    labelTitle="Phone"
                    type="text"
                    name="phone"
                    placeholder="Enter your Phone"
                  />
                  <TextArea
                    labelFor="message"
                    labelTitle="Your Message"
                    row="5"
                    placeholder="Type Your Message"
                    name="message"
                    defaultValue=""
                  />
                  <div className="w-full px-3">
                    <button
                      type="submit"
                      className="rounded-md border border-black bg-white px-7 py-3 text-base font-medium text-primary hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full h-full px-4 lg:w-1/2">
            <div className="hidden text-center lg:block">
              <img
                src="https://img.freepik.com/free-vector/staying-touch-modern-communication-means-phone-calls-letters-emails-person-contacting-friends-customers-via-email-encouraging-feedback-vector-isolated-concept-metaphor-illustration_335657-2779.jpg"
                alt="contact image"
                className="mx-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const InputBox = ({ type, placeholder, name, labelFor, labelTitle }: any) => {
  return (
    <div className="w-full px-3 md:w-1/2">
      <div className="mb-5">
        <label
          htmlFor={labelFor}
          className="mb-2.5 block text-base font-medium text-black"
        >
          {labelTitle}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded-md border border-black/20 bg-white/5 px-5 py-3 text-black placeholder-black/50 outline-none focus:border-black"
        />
      </div>
    </div>
  );
};

const TextArea = ({
  row,
  placeholder,
  name,
  defaultValue,
  labelFor,
  labelTitle,
}: any) => {
  return (
    <div className="w-full px-3">
      <div className="mb-8">
        <label
          htmlFor={labelFor}
          className="mb-2.5 block text-base font-medium text-black"
        >
          {labelTitle}
        </label>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded-md border border-black/20 bg-white/5 px-5 py-3 text-black placeholder-black/50 outline-none focus:border-black"
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
};
