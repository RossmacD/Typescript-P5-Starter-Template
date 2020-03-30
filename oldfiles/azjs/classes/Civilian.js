'use strict';
import Human from './abstract/Human';

export default class Civilian extends Human {
    // Constructor takes in a Human object to replace
    constructor(_id) {
        super(_id);
    }
}