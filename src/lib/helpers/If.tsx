interface IProps {
    condition: JSX.Element | string | number | boolean | undefined
    Then?: JSX.Element | JSX.Element[]
    Else?: JSX.Element | JSX.Element[]
    children?: JSX.Element | JSX.Element[] | string
  }
  
  export const If = ({ condition, Then, Else, children }: IProps) => {
    if (condition) {
      if (children) return <>{children}</>
      return <>{Then}</>
    }
    if (Else) return <>{Else}</>
    return null
  }
  