import { useContext, useState } from "react";
import { TodoListContext } from "../../../contexts/PostListContext";

const Form = () => {
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const { createPost } = useContext(PostListContext)

  const changeHandler = (e) => setInput(e.target.value);
  const changeHandlerInput1 = (e) => setInput1(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const inputTrim = input.trim();
    const inputTrim1 = input1.trim(); 
    if (inputTrim&&inputTrim1) {
      createPost(inputTrim, inputTrim1);
      setInput("");
      setInput1("");
    }
  };

  return (
    
    <div className="container w-50">
    <form onSubmit={submitHandler} className="d-flex flex-column align-item-center mb=3">
        <div className="mb-3">
            <label for="exampleInput" className="form-label">Pictures:</label>
            <input onChange={changeHandlerInput} value={input} type="text" className="form-control" id="exampleInput" aria-describedby="textHelp" />
            <div id="textHelp" className="form-text">Укажите URL адрес публикуемого изображения</div>
        </div>
        <div className="mb-3">
            <label for="exampleInput1" className="form-label">Message:</label>
            <input onChange={changeHandlerInput1} value={input1} type="text" className="form-control" id="exampleInput1 aria-describedby="textHelp" />
            <div id="textHelp" className="form-text">Напишите Ваше сообщение</div>
        </div>
        {/* <div className="mb-3">
        <label for="exampleInput2" className="form-label">Pictures URL:</label>
        <input value={input} type="text" className="form-control" id="exampleInput2" aria-describedby="textHelp" />
        <div id="textHelp" className="form-text">Укажите URL адрес публикуемого изображения</div>
    </div>
    <div className="mb-3">
        <label for="exampleInput3" className="form-label">Tags:</label>
        <input value={input} type="text" className="form-control" id="exampleInput4" aria-describedby="textHelp" />
        <div id="textHelp" className="form-text">Укажите теги</div>
    </div> */}
        <button type="submit" className="btn btn-primary">Done</button>
    </form>
</div>