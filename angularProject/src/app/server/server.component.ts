import { Component } from "@angular/core";
@Component({
    selector: 'app-server',
    template: `
    <style>
        h1{color: red; background-color: yellow;}
    </style>
    <h1>This is a server component</h1>`,
    styleUrls: ['./server.component.css']
})
export class ServerComponent{

    name: string = 'Codemind';

}
// template: `<h1> This is my server component</h1>
//     <h1 class="test1" id="test1">This is h2</h1>
//     <h1>{{name}}</h1> <app-servers></app-servers>`,