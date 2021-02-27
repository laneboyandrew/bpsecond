export const lerp = (v0: number, v1: number, t: number) => (1 - t) * v0 + t * v1;

//TODO: Remove this function when server data comes.
export const splitTime= (numberOfHours) => {
    let Days=Math.floor(numberOfHours/24);
    let Remainder=numberOfHours % 24;
    let Hours=Math.floor(Remainder);
    let Minutes=Math.floor(60*(Remainder-Hours));
    return({"Days":Days,"Hours":Hours,"Minutes":Minutes})
}
