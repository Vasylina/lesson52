import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const notify = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve("Успіх") : reject("Помилка");
      }, 3000);
    });

    toast.promise(
      promise,
      {
        pending: "Повідомлення завантажується",
        success: "Повідомлення успішно завантажене 👌",
        error: "Помилка завантажене 🤯",
      },
      { position: "top-center", autoClose: 4000 }
    );
  };

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
};

export default App;
