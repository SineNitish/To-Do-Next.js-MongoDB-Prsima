"use client"
import {deleteTodo} from "@/app/actions/todoAction";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Form from "../ui/Form";
import { TodoType } from "@/types/todoType";
import { BsFillTrashFill } from "react-icons/bs";

const DeleteTodo = ({todo}:TodoType) => {
  return (
    <Form action={deleteTodo}>
        <Input
        type="hidden"
        name="inputId"
        value={todo.id}
        />

        <Button
        actionButton
        type="submit"
        text={<BsFillTrashFill/>}
        />

    </Form>
  )
}

export default DeleteTodo