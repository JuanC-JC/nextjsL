import Image from "next/image"
import { Fragment } from "react"
import styled from "styled-components"
import icon from "../../../assets/images/icon_vammo.webp"

interface IPropsColumnPerformance {
  styles?: any
  dataRows: (string | object)[]
}

const ColumnPerformanceStyled = styled.div.attrs({
  className: "ColumnPerformance"
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

  .columnPerformance__row {
    width: 100%;
    min-height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 16px;

    &:not(:first-child) {
      justify-content: center;
    }
  }

  .columnPerformance__rowImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.2rem;
    font-weight: normal;
    height: 100%;

    /* & > img {
      width: 24px;
      height: 100%;
    } */
  }

  .columnPerformance__img{
    width: 24px;
    height: 100%;
  }

  .columnPerformance__square {
    width: 24px;
    height: 24px;
    background: #767676;
  }

  .title {
    font-weight: bold;
  }

  @media (min-width: 720px) {
    width: 30%;
    flex-direction: row;
    width: 100%;

    .columnPerformance__row {
      min-height: 0px;
    }

    .columnPerformance__rowImg {
      flex-direction: row;
      gap: 1rem;
    }
  }
`

const ColumnPerformance = ({ styles, dataRows }: IPropsColumnPerformance) => {
  return (
    <ColumnPerformanceStyled style={styles}>
      {dataRows?.map((dataRow: any, index: number) => {
        const { img, type, bike, cost, gas, total } = dataRow

        return (
          <Fragment key={index}>
            <div className="columnPerformance__row title">
              <span className={img ? "columnPerformance__rowImg" : ""}>
                {img && img !== "blank" && <Image loading="lazy" src={icon} alt={type} className="columnPerformance__img"/>}
                {img === "blank" && <div className="columnPerformance__square" />}
                <strong>{type}</strong>
                <span>{bike}</span>
              </span>
            </div>
            
            <div className="columnPerformance__row">
              <span>
                {img
                  ? `R$ ${cost}`
                  : <>{cost}<sup>1</sup></>
                }
              </span>
            </div>

            <div className="columnPerformance__row">
              <span>
                {img
                  ? `R$ ${gas}`
                  : <> {gas}<sup>2</sup></>
                }
              </span>
            </div>

            <div className={img ? "columnPerformance__row" : "columnPerformance__row title"}>
              <span>
                {img ? `R$ ${total}` : `${total}`}
              </span>
            </div>
          </Fragment>
        )
      })}
    </ColumnPerformanceStyled>
  )
}

export default ColumnPerformance