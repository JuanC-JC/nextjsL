import styled from "styled-components"

export const HeaderStyled = styled.header.attrs({
  className: "header"
})`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: white;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  padding: 0 20px;
  position: fixed;
  z-index: 2000;
  justify-content: space-between;

  @keyframes headerNav {
    from{
      width: 20%;
    }

    to{
      width: 70%;
    }
  }

  .header__burger{
    display: flex;
    cursor: pointer;
  }

  .hidden{
    display: none;
  }

  .header__icon {
    height: 20px;
    cursor: pointer;
  }

  .header__menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s;
    z-index: 2;
    top: 50px;
    left: 0px;
    background: white;
    width: 100%;
    padding: 0  50px;
    align-items: center;

    li {
      text-align: center;
      font-weight: 500;
      position: relative;
      display: flex;
      justify-content: center;
      cursor: pointer;

      &:hover {
        &::after {
          animation: headerNav 500ms 10ms forwards;
          content: "";
          height: 3px;
          background: black;
          width: 0%;
          position: absolute;
          bottom: 0;
        }
      }

      a {
        width: 100%;
        padding: 10px 0;
        color: black;
        cursor: pointer;
        text-decoration: none;
        font-weight: 700;
      }
    }

    button{
      margin: 0 24px;
      margin-top: 16px;
    }
  }

  .menu--visibility {
    max-height: 250px;
    padding: 10px 0px;
    transition: all 0.4s;
  }

  .header__burger {
    width: 24px;
    height: 24px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 4.5px;
      width: 100%;
      background: black;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;

      &:nth-child(1) {
        top: 0px;
        transform-origin: left center;
      }

      &:nth-child(2) {
        top: 8px;
        transform-origin: left center;
      }

      &:nth-child(3) {
        top: 16px;
        transform-origin: left center;
      }
    }

    &.open span {
      &:nth-child(1) {
        transform: rotate(45deg);
        top: -3px;
        left: 0;
        border-radius: 8px;
      }

      &:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        top: 14px;
        left: 0;
        border-radius: 8px;
      }
    }
  }

  @media (min-width:1024px) {
    height: 80px;
    justify-content: space-between;
    box-shadow: none;
    width: calc(100% - 40px);
    margin-top: 0;
    padding: 16px 24px;
    width: 100%;

    .header__burger {
      display: none;
    }

    .header__menu {
      display: flex;
      position: static;
      width: auto;
      min-height: 65px;
      padding: 0px;
      background-color: transparent;
      flex-direction: row;
      align-items: center;
      gap: 20px;

      ul {
        gap: 20px;
      }

      button {
        margin: 0;
        height: fit-content;
      }

      .menu-container {
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: center;

        li {
          font-size: 18px;

          a {
            padding: 2px 15px;
          }
        }
      }
    }
  }
`
