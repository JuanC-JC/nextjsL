import styled, { MainTheme } from "styled-components";

export const SectionCollapsibleStyled = styled.div.attrs({
  className: `sectionCollapsible`
})
  `
	width: 100%;
	font-size: 16px;
	background-color: white;
	padding: ${({ theme }: { theme: MainTheme }) => theme.paddings.small};

	.sectionCollapsible_title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 10px;
		cursor: pointer;
		background-color: white;
	}

	.sectionCollapsible__content{
		margin-top: 13px;
	}
`
