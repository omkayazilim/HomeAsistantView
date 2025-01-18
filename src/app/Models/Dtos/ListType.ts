export class ListType<T>{
    constructor(_key:string,_value:T){
        this.key=_key;
        this.value=_value;
    }
    key!:string;
    value!:T;
}