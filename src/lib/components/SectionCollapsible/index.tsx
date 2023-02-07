import { useState } from "react"
import Collapse from "../Collapse"

import { SectionCollapsibleStyled } from "./style"
import { Arrow } from "../Icons"

interface SectionType {
	title: string
	content: string
	onClick: () => void
	isOpen?: boolean
	controlled?: boolean
}

const SectionCollapsible = (props: SectionType) => {
	const { title, content, onClick, isOpen, controlled } = props

	const [isOpenControlled, setIsOpenControlled] = useState(false)

	const handlerCollapser = () => {
		if (typeof onClick === "function") onClick()

		if (controlled) setIsOpenControlled(!isOpenControlled)
	}

	return (
		<SectionCollapsibleStyled>
			<div className="sectionCollapsible_title" onClick={handlerCollapser}>
				<p><strong>{title}</strong></p>
				<Arrow rotation={isOpen ? 180 : 0} />
			</div>

			<Collapse isOpened={controlled ? isOpenControlled : isOpen || false} transition={200}>
				<div className="sectionCollapsible__content">
					{content}
				</div>
			</Collapse>

		</SectionCollapsibleStyled>
	)
}

export default SectionCollapsible