import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then((res) => console.log(res.text))
      .catch((err) => console.log(err));
  };

  
  return (
    <section className="w-[80%] mx-auto text-white max-w-[900px]">
      <h2 className="text-center text-3xl mb-5">Contact me</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col" action="">
        <label htmlFor="">Your Name</label>
        <input
          name="from_name"
          className="w-full px-3 py-1 my-2 bg-transparent bg-dav-light-gray rounded-lg border border-dav-green"
          type="text"
        />
        <label htmlFor="">Your e-mail</label>
        <input
          name="email"
          className="w-full px-3 py-1 my-2 bg-transparent bg-dav-light-gray rounded-lg border border-dav-green"
          type="text"
        />
        <label htmlFor="">Your message</label>
        <textarea
          name="message"
          className="w-full px-3 py-1 my-2 bg-transparent bg-dav-light-gray rounded-lg border border-dav-green"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="bg-dav-green px-5 py-2 rounded-md mt-3">
          Send Message!
        </button>
      </form>
    </section>
  );
};
export default Contact;
