import { Tutorial } from "../models/tutorial.model";

export class AddTutorial {
    static readonly type = '[Tutorial] Add';

    constructor(public payload: Tutorial) {} // payload is the tutorial object
}

export class RemoveTutorial {
    static readonly type = '[Tutorial] Remove'; // payload is the tutorial object

    constructor(public payload: string ) {} // payload is the tutorial name
}