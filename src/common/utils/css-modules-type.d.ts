// no loading styles module without this declare 
declare module '*.scss' {
	interface IClassNames {
	  [str: string]: string
	}
	const classNames: IClassNames;
	export = classNames;
}
