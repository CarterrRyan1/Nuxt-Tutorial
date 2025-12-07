interface ToDoItem {
    title: string;
    completed: boolean;
}
let toDo: ToDoItem[] = [];

export function addToDo(item: ToDoItem){
    toDo.push(item);
}
export function listToDos(): ToDoItem[] {
    return toDo;
}
export function clearToDos(): void {
    toDo = [];
}
export function completeToDo(index:number):void{
    if(toDo[index]){
        toDo[index].completed = true;
    }
}
export function unCompleteToDo(index:number):void{
    if(toDo[index]){
        toDo[index].completed = false;
    }
}
export function deleteToDo(index:number):void{
    if(toDo[index]){
        toDo.splice(index,1);
    }
}
