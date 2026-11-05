export function idGenerator(label){
    let id = Math.random().toString().substring(2,5);
    return "label" + id
}