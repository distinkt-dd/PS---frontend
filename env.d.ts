declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<object, object, unknown>
	export default component
}

declare module '@'
declare module '@components/*'
declare module '@services/*'
declare module '@pages/*'
declare module '@layouts/*'
declare module '@app/*'
declare module '@types/*'
declare module '@styles/*'
declare module '@router/*'
declare module '@stores/*'
declare module '@shared/*'
