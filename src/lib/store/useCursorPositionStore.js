import { create } from 'zustand'

const useCursorStore = create((set) => ({
	showCursor: false,
	isHovering: false,
	cursorBackgroundColor: 'transparent',
	setCursorVisibility: (v) => set({ showCursor: v }),
	x: 0,
	y: 0,
	toggleHoverState: (bgColor) => set(state => ({ isHovering: !state.isHovering, cursorBackgroundColor: state.cursorBackgroundColor === 'transparent' ? bgColor : 'transparent' })),
	setCursorPosition: (x, y) => set(state => ({
		x: x,
		y: y
	}))
}))

export default useCursorStore