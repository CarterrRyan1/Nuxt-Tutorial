import * as x from "../utils/listStore";
export default defineEventHandler(async (event) => {
  const reqType = event.method;
  if (reqType == "GET") {
    return {
      success: true,
      todos: x.listToDos(),
      message: "ToDos fetched successfully",
    };
  }

  if (reqType == "POST") {
    const body = await readBody(event);
    const { title } = body;
    if (!title || typeof title !== "string") {
      return { success: false, message: "Invalid title" };
    }
    x.addToDo({ title: title, completed: false });
    return { success: true, message: "ToDo added successfully" };
  }

  if (reqType == "DELETE") {
    const body = await readBody(event);
    if(body===undefined){
      x.clearToDos();
      return {
        success: true,
        message: "All ToDos cleared",
      };
    }
    else{
      const { index } = body;
      x.deleteToDo(index);
      return {
        success: true,
        message: "ToDo deleted successfully",
      };
    }
  }
  if (reqType == "PUT") {
    const body = await readBody(event);
    const { index, completed } = body;
    if (!completed) {
      x.completeToDo(index);
      return {
        success: true,
        message: "ToDo marked as completed",
      };
    } else {
      x.unCompleteToDo(index);
      return {
        success: true,
        message: "ToDo marked as uncompleted",
      };
    }
  }
});
