import { create } from 'zustand'

const useCursorStore = create((set) => ({
	showCursor: false,
	isHovering: false,
	toggleCursorVisibility: () => set(state => ({ showCursor: !state.showCursor })),
	x: 0,
	y: 0,
	toggleHoverState: () => set(state => ({ isHovering: !state.isHovering })),
	setCursorPosition: (x, y) => set(state => ({
		x: x,
		y: y
	}))
}))

export default useCursorStore