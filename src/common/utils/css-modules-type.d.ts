// no loading styles module without this declare
declare module '*.scss' {
    interface SubClass {
        [str: string]: string;
    }
    const classNames: SubClass;
    export = classNames;
}
