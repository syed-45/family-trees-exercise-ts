import { Person } from "./personTypes";


export function listAllPeopleInTree(topPerson: Person): string[] {
    const workStack: Person[] = [];
    const treeList: string[] = [];
    workStack.push(topPerson);

    while (workStack[0] !== undefined) {
        let currentPerson = workStack.pop()

        if (currentPerson!== undefined) {
            treeList.push(currentPerson.name)
            for (let i = 0; i < currentPerson.children.length; i++) {
                workStack.push(currentPerson.children[i]);                
            }
        }
    }

    return treeList
}