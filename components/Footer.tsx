
import { JSX } from "preact";

export default function Footer(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<>
			<div class="text-center py-6">
				<a 
					class="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-purple-600 px-6 py-2 rounded-full font-bold transition-all duration-300 hover:shadow-lg shadow-md" 
					href="/about"
				>
					<span>💝</span>
					<span>关于</span>
				</a>
			</div>
			<div class="text-center text-white/50 text-xs pb-4">
				have fun ✨
			</div>
		</>
	);
}
