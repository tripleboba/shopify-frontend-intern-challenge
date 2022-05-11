import Header from "./components/Header";
import Form from "./components/Form";
import ResponsesList from "./components/ResponsesList";
import { Fragment } from "react";

export default function App() {

  const responsesList = [
    {id:1, response:"response1", prompt:"prompt1"},
    {id:2, response:"response2", prompt:"prompt2"}
  ];

  return (
    <Fragment>
      <Header />
      <Form />
      <ResponsesList responsesList={responsesList}/>
    </Fragment>
  );
}

