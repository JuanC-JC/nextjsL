import { useState, useEffect, useRef } from "react"
import { CollapseStyled } from "./collapse.style"
import { CollapseType } from "./interfaces"

const Collapse = (props: CollapseType) => {
	const { isOpened = false, transition = 500, children } = props

	const collapseBodyRef = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		if (collapseBodyRef.current) {
			const currentHeight = collapseBodyRef.current.scrollHeight

			if (isOpened) {
				setTimeout(() => {
					if (collapseBodyRef.current) {
						collapseBodyRef.current.style.height = "auto"
					}
				}, (transition))
			} else {
				collapseBodyRef.current.removeAttribute("style")
			}

			setTimeout(() => {
				setHeight(isOpened ? currentHeight : 0)
			}, 100)
		}

	}, [isOpened, transition])

	return (
		<CollapseStyled
			ref={collapseBodyRef}
			height={height}
			transition={transition}
		>
			{children}
		</CollapseStyled>
	)
}

export default Collapse