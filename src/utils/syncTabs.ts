import { Books, Book } from "../interfaces/Book";

// const bc = new BroadcastChannel('sync-tabs');

// export const syncTabs = (callback: (data: any) => void) => {
//     bc.onmessage = (ev) => {
//         callback(ev.data);
//     }
// }

// export const sendToTabs = (data: any) => {
//     bc.postMessage(data);
// }


window.addEventListener('storage', (event) => {
    if (event.key === 'books') {
        const books = JSON.parse(event.newValue || "{ library: [] }") as Books;
        console.log(books);
    }
    if (event.key === 'toReadBooks') {
        const books = JSON.parse(event.newValue || "[]") as Book[];
        console.log(books);
    }
})