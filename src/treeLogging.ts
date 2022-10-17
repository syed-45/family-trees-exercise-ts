import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    const workStack: Person[] = [];
    workStack.push(topPerson);

    while (workStack[0] !== undefined) {
        let currentPerson = workStack.pop()

        if (currentPerson!== undefined) {
            console.log(currentPerson.name)
            for (let i = 0; i < currentPerson.children.length; i++) {
                workStack.push(currentPerson.children[i]);                
            }
        }
    }

}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    const workQueue: Person[] = [];
    workQueue.unshift(topPerson);

    while (workQueue[0] !== undefined) {
        let currentPerson = workQueue.pop()

        if (currentPerson!== undefined) {
            console.log(currentPerson.name)
            for (let i = 0; i < currentPerson.children.length; i++) {
                workQueue.unshift(currentPerson.children[i]);                
            }
        }
    }
}

