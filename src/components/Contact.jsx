import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const inputName = useRef("");
  const inputEmail = useRef("");
  const inputMessage = useRef("");
  const isEng = useSelector((state) => state.languageReducer.isEng);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then((res) => {
        console.log(res.text);
        setShowModal(true);
      })
      .catch((err) => console.log(err));

    inputName.current.value = "";
    inputEmail.current.value = "";
    inputMessage.current.value = "";
  };

  useEffect(() => {
    if (showModal === true) {
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
  }, [showModal]);

  return (
    <section id="Contact" className="w-[80%] mx-auto text-white max-w-[900px]">
      <div
        className={`${
          showModal ? "flex" : "hidden"
        } w-screen h-screen z-50 fixed top-0 bottom-0 left-0 right-0 bg-black/80 flex justify-center items-center`}
      >
        <div className="border-dav-green border flex flex-col py-5 px-14 justify-center items-center">
          <p>{isEng ? "Message sent succesfully!" : "Mensaje enviado!"}</p>
        </div>
      </div>

      <h2 className="text-center text-3xl mb-5">
        {isEng ? "Contact me" : "Contáctame"}
      </h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col" action="">
        <label htmlFor="">{isEng ? "Your name" : "Tu nombre"}</label>
        <input
          name="from_name"
          ref={inputName}
          className="w-full px-3 py-1 my-2 bg-transparent bg-dav-light-gray rounded-lg border border-dav-green"
          type="text"
        />
        <label htmlFor="">{isEng ? "Your email" : "Tu email"}</label>
        <input
          name="email"
          ref={inputEmail}
          className="w-full px-3 py-1 my-2 bg-transparent bg-dav-light-gray rounded-lg border border-dav-green"
          type="text"
        />
        <label htmlFor="">{isEng ? "Message" : "Mensaje"}</label>
        <textarea
          name="message"
          ref={inputMessage}
          className="w-full px-3 py-1 my-2 bg-transparent bg-dav-light-gray rounded-lg border border-dav-green"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="bg-dav-green px-5 py-2 rounded-md mt-3 hover:bg-dav-green/80  transition-colors delay-150">
          {isEng ? "Send message" : "Enviar mensaje"}
        </button>
      </form>
    </section>
  );
};
export default Contact;
