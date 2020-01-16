declare module '*.scss' {
	interface IClassNames {
	  [todo: string]: string
	}
	const classNames: IClassNames;
	export = classNames;
}
