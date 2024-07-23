import {EventEmitter} from 'events';


const myEmiter = new EventEmitter();

const Hello = (name) =>{
    console.log(`Hello ${name}`);
}

myEmiter.on('greet', Hello);

myEmiter.emit('greet', 'Mubashir Ali');

myEmiter.emit('error', (error) => {
    console.log(error);
});
